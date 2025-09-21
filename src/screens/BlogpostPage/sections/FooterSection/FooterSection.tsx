"use client";
import React, { JSX, useState } from "react";

export const FooterSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const navigationLinks = [
    { label: "HABERLER", position: { top: "331px", left: "5px" } },
    { label: "ETKİNLİKLER", position: { top: "331px", left: "135px" } },
    { label: "MÜZİKLER", position: { top: "369px", left: "5px" } },
    { label: "VİDEOLAR", position: { top: "369px", left: "135px" } },
    { label: "İLETİŞİM", position: { top: "369px", left: "257px" } },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="bg-transparent">
      <div className="w-full max-w-[428px] p-0">
        <h2 className="w-full max-w-[350px] font-saira-cond-40-bold font-[number:var(--saira-cond-40-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-40-bold-font-size)] tracking-[var(--saira-cond-40-bold-letter-spacing)] leading-[var(--saira-cond-40-bold-line-height)] [font-style:var(--saira-cond-40-bold-font-style)]">
          GELİŞMELERDEN İLK SEN HABERDAR OL!
        </h2>

        <form className="mt-6 w-full max-w-[416px]" onSubmit={handleEmailSubmit}>
          <label htmlFor="email-input" className="block mb-2 font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-blackwhite text-[length:var(--saira-14-bold-font-size)] tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] whitespace-nowrap [font-style:var(--saira-14-bold-font-style)]">
            EMAIL
          </label>

          <div className="relative">
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-[300px] h-9 bg-transparent text-blackwhite font-saira-14-reg outline-none"
              placeholder=""
              required
              aria-label="Email address"
            />
            <img className="absolute top-[35px] left-0 w-full h-px object-cover" alt="" src="https://c.animaapp.com/wnzjM5fQ/img/vector-7.svg" role="presentation" />

            <button type="submit" className="absolute right-0 top-0 w-[83px] h-3.5 bg-transparent cursor-pointer hover:opacity-80 transition-opacity" aria-label="Submit email">
              <span className="font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-yellow text-[length:var(--saira-14-bold-font-size)] tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] [font-style:var(--saira-14-bold-font-style)]">
                GÖNDER
              </span>
              <img className="inline-block ml-2 w-3 h-3 align-[-2px]" alt="" src="https://c.animaapp.com/wnzjM5fQ/img/group-5768@2x.png" role="presentation" />
            </button>
          </div>
        </form>

        <img className="mt-6 w-56 h-[35px]" alt="Rapkology Logo" src="https://c.animaapp.com/wnzjM5fQ/img/frame-39.svg" />

        <nav aria-label="Footer navigation" className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-4">
          {navigationLinks.map((link, index) => (
            <a key={index} href="#" className="font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackwhite text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] [font-style:var(--saira-14-reg-font-style)] hover:text-yellow transition-colors cursor-pointer">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-6 w-full max-w-[381px] font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackblack-500 text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] [font-style:var(--saira-14-reg-font-style)]">
          © RAPKOLOGY All Rights Are Reserved 2022.
        </p>
      </div>
    </footer>
  );
};
