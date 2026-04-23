"use client";

import Link from "next/link";
import { ChevronRightIcon, TwitterIcon, FacebookIcon, InstagramIcon, PhoneIcon, EmailIcon } from "./icons";
import { useInView } from "@/hooks/useInView";

const TEXT_COLOR = "var(--brand-accent-foreground)";
const BTN_BG = "var(--brand-accent)";

export const HomeSection = () => {
  const heroRef = useInView(0.1);
  const portfolioRef = useInView(0.1);
  const macRef = useInView(0.1);
  const remoteRef = useInView(0.1);
  const footerRef = useInView(0.1);

  return (
    <section id="home-section">
      {/* Container 03 — Hero: image LEFT, text RIGHT */}
      <div
        ref={heroRef}
        id="container03"
        className="bg-white flex flex-col md:flex-row anim-group mb-0.5"
        style={{ minHeight: "560px" }}
      >
        {/* Image column */}
        <div className="w-full md:w-[46%] overflow-hidden" style={{ minHeight: "320px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/image01.jpg"
            alt="Edgar Kretschmann"
            className="w-full h-full object-cover object-center block anim-img-zoom"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-[54%] flex flex-col justify-center px-8 py-14 md:px-14">
          <div className="dots-separator anim-fade mb-6" />
          <h1
            className="font-semibold leading-tight mb-6 anim-from-left"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 47px)", color: TEXT_COLOR }}
          >
            <span className="block">Hello! I&apos;m Edgar Kretschmann</span>
            <span
              className="block mt-3 font-normal anim-from-left anim-delay-1"
              style={{ fontSize: "clamp(1rem, 2vw, 24px)", color: TEXT_COLOR }}
            >
              Whatsapp +4915784928200
            </span>
          </h1>
          <p
            className="leading-relaxed mb-10 anim-fade anim-delay-1"
            style={{ color: TEXT_COLOR, fontSize: "clamp(0.85rem, 1.2vw, 17px)", lineHeight: 2 }}
          >
            I&apos;m a digital marketing enthusiast with a knack for community
            management and lead generation.
            <br />
            My strong suit is the implementation of automation and A.I.
            <br />
            I&apos;ve worked on a wide range of projects from retreats to language
            schools, crafting engaging marketing strategies that drive growth. I
            love connecting people and ideas, and I thrive in dynamic settings
            where I can enhance brand visibility and foster community.
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 anim-from-up anim-delay-2">
            <li>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 font-semibold transition-colors"
                style={{
                  backgroundColor: BTN_BG,
                  color: TEXT_COLOR,
                  borderRadius: "48px",
                  fontSize: "17px",
                  lineHeight: "54px",
                }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>Look at my Projects</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Container 01 — Portfolio Preview: text LEFT, image RIGHT */}
      <div
        ref={portfolioRef}
        id="container01"
        className="bg-white flex flex-col md:flex-row-reverse anim-group mb-0.5"
        style={{ minHeight: "560px" }}
      >
        {/* Image column */}
        <div className="w-full md:w-[46%] overflow-hidden" style={{ minHeight: "320px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/image02.jpg"
            alt="Portfolio preview"
            className="w-full h-full object-cover object-center block anim-img-zoom"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-[54%] flex flex-col justify-center px-8 py-14 md:px-14">
          <div className="dots-separator anim-fade mb-6" />
          <h2
            className="font-semibold leading-tight mb-6 anim-from-left"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 47px)", color: TEXT_COLOR }}
          >
            Explore my Portfolio
          </h2>
          <p
            className="leading-relaxed mb-10 anim-fade anim-delay-1"
            style={{ color: TEXT_COLOR, fontSize: "clamp(0.85rem, 1.2vw, 17px)", lineHeight: 2 }}
          >
            Between starting a German school in Manila, creating multiple online
            businesses and becoming a digital nomad there is much to learn. Find
            out about the projects I was involved with.
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 anim-from-up anim-delay-2">
            <li>
              <Link
                href="/bio"
                className="inline-flex items-center gap-2 px-7 font-semibold transition-colors"
                style={{
                  backgroundColor: BTN_BG,
                  color: TEXT_COLOR,
                  borderRadius: "48px",
                  fontSize: "17px",
                  lineHeight: "54px",
                }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>How I got here</span>
              </Link>
            </li>
            <li>
              <a
                href="mailto:edgar@edgarkretschmann.com"
                className="inline-flex items-center gap-2 px-7 font-semibold transition-colors"
                style={{
                  backgroundColor: BTN_BG,
                  color: TEXT_COLOR,
                  borderRadius: "48px",
                  fontSize: "17px",
                  lineHeight: "54px",
                }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Container 02 — Not a Mac Fan: image LEFT, text RIGHT */}
      <div
        ref={macRef}
        id="container02"
        className="bg-white flex flex-col md:flex-row anim-group mb-0.5"
        style={{ minHeight: "560px" }}
      >
        {/* Image column */}
        <div className="w-full md:w-[46%] overflow-hidden" style={{ minHeight: "320px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/image04.jpg"
            alt="Not a Mac Fan"
            className="w-full h-full object-cover object-center block anim-img-zoom"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-[54%] flex flex-col justify-center px-8 py-14 md:px-14">
          <div className="dots-separator anim-fade mb-6" />
          <h2
            className="font-semibold leading-tight mb-6 anim-from-left"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 47px)", color: TEXT_COLOR }}
          >
            Actually not a Mac Fan
          </h2>
          <p
            className="leading-relaxed mb-10 anim-fade anim-delay-1"
            style={{ color: TEXT_COLOR, fontSize: "clamp(0.85rem, 1.2vw, 17px)", lineHeight: 2 }}
          >
            x
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 anim-from-up anim-delay-2">
            <li>
              <a
                href="mailto:edgar@edgarkretschmann.com"
                className="inline-flex items-center gap-2 px-7 font-semibold transition-colors"
                style={{
                  backgroundColor: BTN_BG,
                  color: TEXT_COLOR,
                  borderRadius: "48px",
                  fontSize: "17px",
                  lineHeight: "54px",
                }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Container 04 — Done. Remotely: text LEFT, image RIGHT */}
      <div
        ref={remoteRef}
        id="container04"
        className="bg-white flex flex-col md:flex-row-reverse anim-group mb-0.5"
        style={{ minHeight: "560px" }}
      >
        {/* Image column */}
        <div className="w-full md:w-[46%] overflow-hidden" style={{ minHeight: "320px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/image03.jpg"
            alt="Done Remotely"
            className="w-full h-full object-cover object-center block anim-img-zoom"
          />
        </div>

        {/* Text column */}
        <div className="w-full md:w-[54%] flex flex-col justify-center px-8 py-14 md:px-14">
          <div className="dots-separator anim-fade mb-6" />
          <h2
            className="font-semibold leading-tight mb-6 anim-from-left"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 47px)", color: TEXT_COLOR }}
          >
            Done. Remotely
          </h2>
          <p
            className="leading-relaxed mb-10 anim-fade anim-delay-1"
            style={{ color: TEXT_COLOR, fontSize: "clamp(0.85rem, 1.2vw, 17px)", lineHeight: 2 }}
          >
            Modern work is done remotely, and that is not a disadvantage.
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 anim-from-up anim-delay-2">
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 font-semibold transition-colors"
                style={{
                  backgroundColor: BTN_BG,
                  color: TEXT_COLOR,
                  borderRadius: "48px",
                  fontSize: "17px",
                  lineHeight: "54px",
                }}
              >
                <ChevronRightIcon className="w-5 h-5 flex-shrink-0" />
                <span>Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Container 05 — Footer / Social Icons */}
      <div
        ref={footerRef}
        id="container05"
        className="bg-transparent px-8 py-12 flex flex-col items-center gap-8 anim-group"
      >
        <ul className="flex justify-center gap-6 anim-from-up">
          <li>
            <a href="#" className="text-[#596269] hover:text-[#BFF2DA] transition-colors">
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-[#596269] hover:text-[#BFF2DA] transition-colors">
              <FacebookIcon className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-[#596269] hover:text-[#BFF2DA] transition-colors">
              <InstagramIcon className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a href="tel:+4915784928200" className="text-[#596269] hover:text-[#BFF2DA] transition-colors">
              <PhoneIcon className="w-6 h-6" />
              <span className="sr-only">Phone</span>
            </a>
          </li>
          <li>
            <a href="mailto:edgar@edgarkretschmann.com" className="text-[#596269] hover:text-[#BFF2DA] transition-colors">
              <EmailIcon className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
        <p className="text-[#596269] text-sm opacity-50 anim-fade anim-delay-1">
          © Untitled. All rights reserved.
        </p>
      </div>
    </section>
  );
};
