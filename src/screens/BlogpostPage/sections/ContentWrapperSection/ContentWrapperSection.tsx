import React, { JSX } from "react";

interface ContentItem {
  id: number;
  image: string;
  text: string;
}

export const ContentWrapperSection = (): JSX.Element => {
  const contentItems: ContentItem[] = [
    {
      id: 1,
      image: "https://c.animaapp.com/wnzjM5fQ/img/rectangle-10@2x.png",
      text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI... LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/wnzjM5fQ/img/rectangle-10-1@2x.png",
      text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/wnzjM5fQ/img/rectangle-10-2@2x.png",
      text: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI LOBORTIS...",
    },
  ];

  return (
    <section
      className="flex flex-col items-start gap-7 mt-10"
      role="region"
      aria-label="Content wrapper section"
    >
      {contentItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <article className="flex items-start gap-[21px] relative">
            <img
              className="relative w-[88.07px] h-[77.9px] object-cover flex-shrink-0"
              alt={`Content image ${index + 1}`}
              src={item.image}
            />
            <p className="relative mt-[-1.00px] font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] [font-style:var(--saira-cond-25-bold-font-style)] max-w-none md:max-w-[629.84px]">
              {item.text}
            </p>
          </article>
          {index < contentItems.length - 1 && (
            <div className="w-full md:w-[737.11px]">
              <hr
                className="relative w-full h-px object-cover border-0 bg-[url('https://c.animaapp.com/wnzjM5fQ/img/vector-12.svg')] bg-no-repeat bg-cover"
                aria-hidden="true"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};
