"use client";

import {
  ChevronRightIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  EmailIcon,
} from "./icons";
import { useInView } from "@/hooks/useInView";

export const PortfolioSection = () => {
  const macFanRef = useInView(0.1);
  const remoteRef = useInView(0.1);
  const footerRef = useInView(0.2);

  return (
    <section id="one-section">
      {/* Container 02 — "Actually not a Mac Fan": image LEFT, text RIGHT */}
      <div
        ref={macFanRef}
        id="container02"
        className="bg-white flex flex-col md:flex-row anim-group"
        style={{ minHeight: "560px" }}
      >
        {/* Image column */}
        <div className="w-full md:w-1/2 overflow-hidden" style={{ minHeight: "320px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/image04.jpg"
            alt="Work setup"
            className="w-full h-full object-cover object-center block anim-img-zoom"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-14 md:px-14">
          <div className="dots-separator anim-fade" />
          <h2
            className="font-semibold leading-tight mb-6 anim-from-left"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 47px)", color: "#596269" }}
          >
            Actually not a Mac Fan
          </h2>
          <p
            className="leading-relaxed mb-10 anim-fade anim-delay-1"
            style={{ color: "#596269", fontSize: "clamp(0.9rem, 1.5vw, 24px)" }}
          >
            x
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 anim-from-up anim-delay-2">
            <li>
              <a
                href="mailto:edgar@edgarkretschmann.com"
                className="inline-flex items-center gap-2 px-7 py-3 font-semibold transition-colors bg-[var(--brand-accent)] text-[var(--brand-accent-foreground)] hover:brightness-110"
                style={{ borderRadius: "48px" }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-0.5" />

      {/* Container 04 — "Done. Remotely": text LEFT, image RIGHT */}
      <div
        ref={remoteRef}
        id="container04"
        className="bg-white flex flex-col md:flex-row-reverse anim-group"
        style={{ minHeight: "560px" }}
      >
        {/* Image column */}
        <div className="w-full md:w-1/2 overflow-hidden" style={{ minHeight: "320px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/image03.jpg"
            alt="Remote work"
            className="w-full h-full object-cover object-center block anim-img-zoom"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-14 md:px-14">
          <div className="dots-separator anim-fade" />
          <h2
            className="font-semibold leading-tight mb-6 anim-from-left"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 47px)", color: "var(--brand-accent-foreground)" }}
          >
            Done. Remotely
          </h2>
          <p
            className="leading-relaxed mb-10 anim-fade anim-delay-1"
            style={{ color: "var(--brand-accent-foreground)", fontSize: "clamp(0.9rem, 1.5vw, 24px)" }}
          >
            Modern work is done remotely, and that is not a disadvantage.
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 anim-from-up anim-delay-2">
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 font-semibold transition-colors bg-[var(--brand-accent)] text-[var(--brand-accent-foreground)] hover:brightness-110"
                style={{ borderRadius: "48px" }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-0.5" />

      {/* Container 05 — Social icons & footer */}
      <div
        ref={footerRef}
        id="container05"
        className="bg-white py-16 text-center anim-group"
      >
        <ul className="flex justify-center items-center gap-8 mb-10">
          {[
            { href: "https://twitter.com/", icon: <TwitterIcon className="w-8 h-8" />, label: "Twitter", delay: "anim-delay-1" },
            { href: "https://facebook.com/", icon: <FacebookIcon className="w-8 h-8" />, label: "Facebook", delay: "anim-delay-2" },
            { href: "https://instagram.com/", icon: <InstagramIcon className="w-8 h-8" />, label: "Instagram", delay: "anim-delay-3" },
            { href: "tel:+4915784928200", icon: <PhoneIcon className="w-8 h-8" />, label: "Phone", delay: "anim-delay-4" },
            { href: "mailto:edgar@edgarkretschmann.com", icon: <EmailIcon className="w-8 h-8" />, label: "Email", delay: "anim-delay-5" },
          ].map(({ href, icon, label, delay }) => (
            <li key={label}>
              <a
                href={href}
                className={`block text-black transition-opacity hover:opacity-60 anim-from-up ${delay}`}
                title={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm anim-fade anim-delay-5" style={{ color: "#596269" }}>
          © Untitled. All rights reserved.
        </p>
      </div>
    </section>
  );
};
