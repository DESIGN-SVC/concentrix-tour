"use client";

import { Carousel } from "@/components";
import { Building } from "@/lib/data";
import { cx } from "cva";
import { useRef, useState } from "react";

type CarouselStructuresProps = {
    listStructures: Building[];
};

export const CarouselStructures = ({
    listStructures,
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
        <div className="space-y-6">
            <Carousel.Root ref={carouselRef}>
                {listStructures.map(
                    (
                        { names: { short }, img: { building_facade }, city },
                        index
                    ) => (
                        <Carousel.UnityList
                            key={index}
                            link={`/location/${city}?building=${short}`}
                            title={short}
                            background_img={building_facade}
                            className={cx({
                                "ml-8 lg:ml-14": index === 0,
                                "mr-8 lg:mr-14": index === listStructures.length - 1,
                            })}
                        />
                    )
                )}
            </Carousel.Root>

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
