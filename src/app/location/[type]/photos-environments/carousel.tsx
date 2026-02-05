"use client";

import { Button } from "@/components";
import { Chevron, Expand } from "@/icons";
import { cx } from "cva";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

type CarouselProps = {
  photos_environments: StaticImageData[];
};

export const Carousel = ({ photos_environments }: CarouselProps) => {
  const [focusImages, setFocusImages] = useState<number>(0);

  const carouselRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const directionRef = useRef<"next" | "prev">("next");

  const params = useSearchParams();
  const building = params.get("building");

  function nextImage() {
    directionRef.current = "next";
    changeFocus((focusImages + 1) % photos_environments.length);
  }

  function prevImage() {
    directionRef.current = "prev";
    changeFocus(
      (focusImages - 1 + photos_environments.length) %
        photos_environments.length,
    );
  }

  function changeFocus(newIndex: number) {
    setFocusImages(newIndex);

    const container = carouselRef.current;
    const el = itemRefs.current[newIndex];
    const widthFactor = directionRef.current === "next" ? 4 : 1.5;

    if (container && el) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      const targetScrollLeft =
        container.scrollLeft +
        (elRect.left - containerRect.left) -
        (containerRect.width / 2 - elRect.width / widthFactor);

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <ul
        ref={carouselRef}
        className={cx(
          "flex items-center gap-4",
          "overflow-x-auto [&::-webkit-scrollbar]:hidden scroll-smooth",
          "cursor-e-resize snap-proximity",
        )}
      >
        {photos_environments?.map((el, index) => (
          <li
            key={index * 67}
            className={cx("flex-none", " relative")}
            ref={(el) => {
              if (el) itemRefs.current[index] = el;
            }}
            onClick={() => changeFocus(index)}
          >
            <img
              src={el.src}
              alt=""
              className={cx(
                "h-[28.75rem] w-full",
                "transition-all duration-300",
                "rounded-4xl",
                "object-cover",
                "max-w-56 scale-95 opacity-70 blur-[1px]",
                "lg:max-w-[14.75rem]",
                {
                  "max-w-[21.563rem] scale-100 opacity-100 lg:max-w-[31.5rem] blur-none":
                    focusImages === index,
                },
              )}
            />
            <Link
              onClick={(e) => e.stopPropagation()}
              href={{
                query: {
                  building: building,
                  modal: "photos-environments",
                  index: index,
                },
              }}
              scroll={false}
              className={cx(
                "flex items-center gap-2",
                "text-white text-sm font-semibold",
                "absolute left-6 ",
                "duration-300 ease-in",
                {
                  "bottom-6": focusImages === index,
                  "bottom-7": focusImages !== index,
                },
              )}
            >
              <Expand />
              <span>Ampliar imagem</span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={cx(
          "flex items-center justify-between",
          "lg:justify-center lg:gap-4",
        )}
      >
        <Button
          disabled={focusImages === 0}
          appearance={"secondary"}
          size={"small"}
          onClick={prevImage}
        >
          <Chevron className="-rotate-180" />
        </Button>
        <p className="font-semibold text-gray-400">
          {focusImages < 9 && "0"}
          {focusImages + 1} de{" "}
          {photos_environments?.length >= 10
            ? photos_environments?.length
            : `0${photos_environments?.length}`}
        </p>
        <Button
          disabled={focusImages === photos_environments?.length - 1}
          appearance={"secondary"}
          size={"small"}
          onClick={nextImage}
        >
          <Chevron />
        </Button>
      </div>
    </>
  );
};
