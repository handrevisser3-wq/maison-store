"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Linear interpolation helper
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function VideoScrub() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);

  // Lerp state — lives outside React renders to avoid allocation in RAF
  const targetTimeRef  = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef         = useRef<number>(0);
  const durationRef    = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const video   = videoRef.current;
    if (!section || !video) return;

    // ── RAF lerp loop ──────────────────────────────────────────────────
    // Runs every animation frame. Smoothly chases the target currentTime
    // set by the ScrollTrigger onUpdate, eliminating seek jitter.
    const tick = () => {
      if (durationRef.current > 0) {
        // Lerp factor: 0.12 per frame ≈ very smooth at 60 fps
        currentTimeRef.current = lerp(
          currentTimeRef.current,
          targetTimeRef.current,
          0.12
        );
        // Only seek if difference is perceptible (avoids redundant decoder work)
        if (Math.abs(currentTimeRef.current - video.currentTime) > 0.008) {
          video.currentTime = currentTimeRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const triggers: ReturnType<typeof ScrollTrigger.create>[] = [];

    const init = () => {
      const dur = video.duration;
      if (!dur || isNaN(dur)) return;
      // Guard against double-init (loadedmetadata + loadeddata both firing)
      if (video.dataset.scrubInit === "true") return;
      video.dataset.scrubInit = "true";
      durationRef.current = dur;

      // Start the lerp loop
      rafRef.current = requestAnimationFrame(tick);

      // ScrollTrigger writes ONLY to targetTimeRef — no direct currentTime
      // assignment here. scrub: true gives 1:1 scroll mapping; all smoothing
      // is handled by the lerp loop above.
      const scrub = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 2.5,
        onUpdate: (self) => {
          const clamped = Math.min(Math.max(self.progress, 0), 1);
          targetTimeRef.current = clamped * dur;
        },
      });
      triggers.push(scrub);

      // Fade from 0.6 → 1.0 as section scrolls into view
      const fade = gsap.to(video, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end:   "top 15%",
          scrub: true,
        },
      });
      if (fade.scrollTrigger) triggers.push(fade.scrollTrigger);

      // Fade hero text out as box begins to open
      const textFade = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '22% top',
        scrub: 1,
        onUpdate: (self) => {
          const el = document.querySelector('.hero-text-scroll-overlay');
          if (el) {
            const opacity = 1 - self.progress * 1.5;
            (el as HTMLElement).style.opacity = String(Math.max(0, Math.min(1, opacity)));
          }
        }
      });
      triggers.push(textFade);
    };

    video.pause();

    // Run immediately if already cached/loaded
    if (video.readyState >= 1) {
      init();
    }

    // loadedmetadata — primary event
    video.addEventListener("loadedmetadata", init);
    // loadeddata — fires later, more reliable on Android/mobile
    video.addEventListener("loadeddata", init);

    // Last-resort fallback: some mobile browsers never fire either event
    // even though the video is ready. Force a reload then retry.
    const fallbackTimer = setTimeout(() => {
      if (video.dataset.scrubInit !== "true") {
        video.load();
        setTimeout(init, 500);
      }
    }, 2000);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", init);
      video.removeEventListener("loadeddata", init);
      clearTimeout(fallbackTimer);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Separate effect: force video load on mount.
  // Mobile browsers with data-saving or Low Power Mode ignore preload="auto".
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    /*
     * Section height = 120vh — section spans just 20vh beyond one viewport,
     * so the full video duration is covered in ~20vh of actual scroll travel.
     * Much faster than the original 250vh.
     */
    <section
      ref={sectionRef}
      className="relative bg-[#EDE8E1]"
      style={{ height: "350vh" }}
    >
      {/* VIDEO STICKY CONTAINER */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden bg-[#EDE8E1]"
        style={{ willChange: "transform" }}
      >
        {/* VIDEO — full-bleed, fills entire viewport */}
        <video
          ref={videoRef}
          src="/videos/maison-box-h264.mp4"
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover block"
          style={{
            opacity: 0.6,
            willChange: "transform, opacity",
            transform: "translate3d(0,0,0)",
          }}
        />

        {/* HERO TEXT OVERLAY — upper center */}
        <div className="hero-text-scroll-overlay absolute top-[3%] md:top-[6%] left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[860px] z-30 flex flex-col items-center text-center pointer-events-none scale-[0.58] md:scale-[0.78] origin-top">
          <p className="hero-label text-xs tracking-[0.5em] uppercase text-[#2C2520]/60 mb-10">
            Curated in Cape Town
          </p>
          <h1 className="hero-headline font-serif text-5xl sm:text-7xl lg:text-8xl text-[#2C2520] leading-[1.05] mb-8">
            Live Beautifully.
            <br />
            <span className="italic text-gold">Live Proudly South African.</span>
          </h1>
          <p className="hero-subheading text-base sm:text-lg text-[#2C2520]/75 max-w-xl mb-14 leading-relaxed">
            Discover home décor and lifestyle pieces thoughtfully selected
            for the modern South African home.
          </p>
          <div className="hero-cta pointer-events-auto flex flex-row gap-4 mt-2">
            <Link href="/shop">
              <Button className="bg-gold hover:bg-gold/90 text-charcoal font-sans font-medium text-xs tracking-widest uppercase px-10 py-6 h-auto rounded-none transition-all duration-300 w-full sm:w-auto">
                Explore the Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#2C2520] text-[#2C2520] hover:bg-[#2C2520]/10 hover:border-[#2C2520] font-sans font-medium text-xs tracking-widest uppercase px-10 py-6 h-auto rounded-none bg-transparent transition-all duration-300 w-full sm:w-auto"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Thin divider separating from next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(28,28,26,0.10)" }}
      />
    </section>
  );
}
