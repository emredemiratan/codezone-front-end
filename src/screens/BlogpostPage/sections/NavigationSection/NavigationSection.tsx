import React, { JSX } from "react";
import Link from "next/link";

export const NavigationSection = (): JSX.Element => {
  const navigationItems = [
    { label: "HABERLER", href: "/haberler" },
    { label: "ETKİNLİKLER", href: "/etkinlikler" },
    { label: "MÜZİKLER", href: "/muzikler" },
    { label: "VİDEOLAR", href: "/videolar" },
    { label: "BLOG", href: "/blog" },
    { label: "İLETİŞİM", href: "/iletisim" },
  ];

  return (
    <nav
      className="relative w-full h-20 bg-blackblack"
      role="navigation"
      aria-label="Ana navigasyon"
    >
      <Link href="/">
        <img
          className="absolute top-3 left-[84px] w-[235px] h-[59px]"
          alt="Rapkology Logo"
          src="https://c.animaapp.com/wnzjM5fQ/img/group-1@2x.png"
        />
      </Link>

      <button
        className="all-[unset] box-border absolute top-5 right-[81px] w-[120px] h-10 flex items-center justify-center bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blackblack transition-colors duration-200"
        type="button"
        aria-label="Giriş yap"
      >
        <span className="mt-0.5 h-3.5 ml-px w-[67px] font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-blackblack text-[length:var(--saira-14-bold-font-size)] text-center tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] whitespace-nowrap [font-style:var(--saira-14-bold-font-style)]">
          GİRİŞ YAP
        </span>
      </button>

      <ul
        className="inline-flex items-start gap-[30px] absolute top-[37px] left-[416px]"
        role="menubar"
      >
        {navigationItems.map((item, index) => (
          <li key={index} role="none">
            <a
              href={item.href}
              className="relative w-fit mt-[-1.00px] font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-white text-[length:var(--saira-14-reg-font-size)] text-center tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] whitespace-nowrap [font-style:var(--saira-14-reg-font-style)] hover:text-yellow focus:outline-none focus:text-yellow transition-colors duration-200"
              role="menuitem"
              tabIndex={0}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <img
        className="absolute w-0 h-[27.50%] top-[36.25%] left-[81.98%]"
        alt=""
        src="https://c.animaapp.com/wnzjM5fQ/img/vector.svg"
        aria-hidden="true"
      />
    </nav>
  );
};
