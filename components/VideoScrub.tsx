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

    // autoPlay forces mobile to load the video — pause immediately
    // so scroll takes over from frame 0
    video.pause();
    video.currentTime = 0;

    // Force video visible immediately — prevents blank on mobile
    // while waiting for loadedmetadata to fire
    video.style.opacity = "1";
    video.style.visibility = "visible";
    video.style.display = "block";

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

    // Run immediately if autoPlay already loaded it
    if (video.readyState >= 2) {
      init();
    }

    // loadedmetadata — primary event
    video.addEventListener("loadedmetadata", init);
    // loadeddata — fires later, more reliable on Android/mobile
    video.addEventListener("loadeddata", init);
    // canplay — fires on mobile even when loadedmetadata doesn't
    video.addEventListener("canplay", init);

    // Last-resort fallback: reduced to 1.5s since autoPlay loads faster
    const fallbackTimer = setTimeout(() => {
      if (video.dataset.scrubInit !== "true") {
        init();
      }
    }, 1500);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", init);
      video.removeEventListener("loadeddata", init);
      video.removeEventListener("canplay", init);
      clearTimeout(fallbackTimer);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-scroll-section bg-[#EDE8E1]"
      style={{ height: "350vh", position: "relative" }}
    >
      {/* Sticky container — holds video in place while section scrolls */}
      <div
        ref={stickyRef}
        className="hero-sticky-container"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EDE8E1",
        }}
      >
        {/* VIDEO — full screen, contain so box is never cropped */}
        <video
          ref={videoRef}
          src="/maison-box.mp4"
          muted
          autoPlay
          playsInline
          preload="auto"
          className="hero-video-element"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center center",
            display: "block",
            zIndex: 1,
            WebkitMaskImage: `radial-gradient(
              ellipse 85% 90% at 50% 55%,
              black 55%,
              transparent 100%
            )`,
            maskImage: `radial-gradient(
              ellipse 85% 90% at 50% 55%,
              black 55%,
              transparent 100%
            )`,
          }}
        />

        {/* Cream edge-fade overlay — reinforces video mask for seamless blend */}
        <div
          className="hero-cream-overlay"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: `radial-gradient(
              ellipse 90% 92% at 50% 54%,
              transparent 50%,
              rgba(237, 232, 225, 0.4) 75%,
              rgba(237, 232, 225, 0.85) 90%,
              rgba(237, 232, 225, 1) 100%
            )`,
          }}
        />

        {/* Gold hairline separator between text and box */}
        <div className="hero-gold-hairline" style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40px",
          height: "1px",
          backgroundColor: "#C4A882",
          zIndex: 15,
          opacity: 0.5,
        }} />

        {/* HERO TEXT OVERLAY — floats over top of full-screen video */}
        <div
          className="hero-text-scroll-overlay hero-text-zone"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "40px",
            paddingLeft: "6vw",
            paddingRight: "6vw",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          {/* Inner content */}
          <div
            className="hero-text-content"
            style={{
              transform: "scale(0.82)",
              transformOrigin: "center top",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <p className="hero-label text-xs tracking-[0.5em] uppercase" style={{ color: "#8C7B6E" }}>
              Curated in Cape Town
            </p>
            <h1 className="hero-headline font-serif leading-[1.05]"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.4rem)", color: "#1C1712" }}
            >
              Live Beautifully.
              <br />
              <span className="italic text-gold" style={{ fontSize: "clamp(1.6rem, 2.8vw, 3rem)" }}>
                Live Proudly South African.
              </span>
            </h1>
            <p className="hero-subheading leading-relaxed"
              style={{
                fontSize: "clamp(0.75rem, 0.95vw, 0.9rem)",
                maxWidth: "520px",
                marginTop: "8px",
                marginBottom: "20px",
                color: "#5C4F43",
                opacity: 0.85,
              }}
            >
              Discover home décor and lifestyle pieces thoughtfully selected
              for the modern South African home.
            </p>
            <div className="hero-cta hero-buttons-wrapper" style={{ pointerEvents: "auto", marginTop: "4px", display: "flex", flexDirection: "row", gap: "16px" }}>
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
      </div>

      {/* Thin divider separating from next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(28,28,26,0.10)" }}
      />
    </section>
  );
}
