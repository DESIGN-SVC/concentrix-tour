"use client";

import { Carousel } from "@/components";
import { cx } from "cva";
import { PropsWithChildren, useRef, useState } from "react";

type CarouselStructuresProps = {
    classNameRoot?: string;
} & PropsWithChildren;

export const CarouselStructures = ({
    children,
    classNameRoot,
}: CarouselStructuresProps) => {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [scrollPosition, setScrollPosition] =
        useState<Carousel.ScrollPosition>({
            position: "start",
        });

    const handleScrollPosition = ({
        scrollLeft,
        clientWidth,
        totalScrollWidth,
    }: {
        scrollLeft: number;
        clientWidth: number;
        totalScrollWidth: number;
    }) => {
        if (scrollLeft <= 0) {
            return setScrollPosition({ position: "start" });
        }
        if (scrollLeft + clientWidth >= totalScrollWidth) {
            return setScrollPosition({ position: "end" });
        }
        return setScrollPosition({ position: "middle" });
    };

    const handleCarouselScroll = (direction: "prev" | "next") => {
        if (!carouselRef.current) return;

        const scrollWidth = carouselRef.current.children[0].clientWidth + 12;
        const scrollDirection = direction === "prev" ? -1 : 1;
        const currentScrollLeft = carouselRef.current.scrollLeft;

        const newScrollLeft = currentScrollLeft + scrollWidth * scrollDirection;

        const { scrollWidth: totalScrollWidth, clientWidth } =
            carouselRef.current;

        handleScrollPosition({
            clientWidth,
            scrollLeft: newScrollLeft,
            totalScrollWidth,
        });

        carouselRef.current.scrollLeft = newScrollLeft;
    };
    return (
        <div className={cx("space-y-6", classNameRoot)}>
            <Carousel.Root ref={carouselRef}>{children}</Carousel.Root>

            <div className="w-full flex items-center gap-4 justify-center">
                <Carousel.BtnScroll
                    direction="prev"
                    onClick={() => handleCarouselScroll("prev")}
                    disabled={scrollPosition.position === "start"}
                >
                    prev
                </Carousel.BtnScroll>
                <Carousel.BtnScroll
                    direction="next"
                    onClick={() => handleCarouselScroll("next")}
                    disabled={scrollPosition.position === "end"}
                >
                    next
                </Carousel.BtnScroll>
            </div>
        </div>
    );
};
