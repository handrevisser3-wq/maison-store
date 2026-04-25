import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MAISON — we typically respond within one business day.",
};

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Once your order is placed and confirmed, we source and dispatch your item within 3–7 business days. Delivery within South Africa then takes a further 3–5 business days via our tracked courier service.",
  },
  {
    q: "How does your ordering process work?",
    a: "When you place an order, we source your product directly from our vetted suppliers and ship it to you in South Africa. This allows us to keep prices accessible while maintaining quality. You will receive a tracking number once your order is dispatched.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, as well as EFT. Payment processing is handled securely — your card details are never stored on our systems.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "If your product arrives damaged or is not as described, please contact us within 48 hours of receipt and we will make it right. For other returns, please reach out and we will discuss options on a case-by-case basis.",
  },
  {
    q: "Do you ship outside South Africa?",
    a: "At this stage we deliver within South Africa only. We are working on expanding to neighbouring countries — follow us to stay updated.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            We&apos;d love to hear from you
          </h1>
          <p className="text-stone leading-relaxed">
            Whether you have a question about an order, a product, or simply want
            to say hello — we typically respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — contact info */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-10">
                Contact Details
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <MessageCircle size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      WhatsApp
                    </p>
                    <p className="font-serif text-charcoal">060 123 4567</p>
                    <p className="text-sm text-stone mt-1">
                      Quickest way to reach us — available Mon–Fri, 9am–6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      Email
                    </p>
                    <p className="font-serif text-charcoal">handrevisser3@gmail.com</p>
                    <p className="text-sm text-stone mt-1">
                      We respond to all emails within one business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <Clock size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      Hours
                    </p>
                    <p className="font-serif text-charcoal">Monday – Friday</p>
                    <p className="text-sm text-stone mt-1">9:00 am – 6:00 pm SAST</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      Based In
                    </p>
                    <p className="font-serif text-charcoal">South Africa</p>
                    <p className="text-sm text-stone mt-1">
                      Delivering nationwide via tracked courier
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-10">
                Send a Message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Order enquiry, product question..."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button className="w-full bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none py-5 h-auto transition-all duration-300">
                  Send Message
                </Button>
                <p className="text-xs text-stone/50 text-center">
                  We typically respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 md:py-28 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              FAQs
            </h2>
          </div>
          <div className="space-y-0 divide-y divide-stone/20">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-7">
                <h3 className="font-serif text-lg text-charcoal mb-3">{q}</h3>
                <p className="text-stone text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping anchor */}
      <div id="shipping" />
      <div id="track" />
    </div>
  );
}
