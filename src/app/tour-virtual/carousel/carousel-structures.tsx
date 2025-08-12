"use client";

import { cx } from "cva";
import { useRef, useState } from "react";

import { CarouselRootList } from "./carousel-root-list";
import { CarouselUnityList } from "./carousel-unity-list";
import { CarouselBtnScroll } from "./carousel-btn-scroll";
import { Building } from "@/lib/data";

type ScrollPosition = {
    position: "start" | "middle" | "end";
};
type CarouselStructuresProps = {
    listStructures: Building[];
};

export const CarouselStructures = ({
    listStructures,
}: CarouselStructuresProps) => {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
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
    /* const handleManualScroll = () => {
        if (!carouselRef.current) return;

        const {
            scrollLeft,
            scrollWidth: totalScrollWidth,
            clientWidth,
        } = carouselRef.current;

        handleScrollPosition({
            clientWidth,
            scrollLeft,
            totalScrollWidth,
        });
    }; */

    /* useEffect(() => {
        const carouselElement = carouselRef.current;
        if (!carouselElement) return;

        carouselElement.addEventListener("scroll", handleManualScroll);

        return () => {
            carouselElement.removeEventListener("scroll", handleManualScroll);
        };
    }, []); */

    return (
        <section
            id="carousel-structures"
            className={cx(
                "w-full pb-[4.5rem]",
                "bg-white",
                "duration-300 ease-in",
                "dark:bg-gray-900"
            )}
        >
            <div className="container">
                <aside
                    className={cx(
                        "py-6",
                        "bg-blue-900 rounded-3xl",
                        "flex flex-col gap-12",
                        "lg:py-12",
                        "dark:bg-gray-800"
                    )}
                >
                    <header className="space-y-2 px-6 lg:px-14">
                        <h2
                            className={cx(
                                "text-white font-semibold text-[2rem]/[2.4rem]",
                                "lg:text-[2.5rem]/[3rem]"
                            )}
                        >
                            Nossas estruturas
                        </h2>
                        <p
                            className={cx(
                                "text-white text-sm",
                                "lg:max-w-[29rem]"
                            )}
                        >
                            Passeie por nossas estruturas e descubra como cada
                            espaço foi pensado para conectar pessoas, valorizar
                            nossos colaboradores e transformar o presente.
                        </p>
                    </header>
                    <div className="space-y-6">
                        <CarouselRootList ref={carouselRef}>
                            {listStructures.map(
                                (
                                    {
                                        names: { short },
                                        img: { building_facade },
                                        city,
                                    },
                                    index
                                ) => (
                                    <CarouselUnityList
                                        key={index}
                                        link={`/location/${city}?building=${short}`}
                                        title={short}
                                        background_img={building_facade}
                                        className={cx({
                                            "ml-14": index === 0,
                                            "mr-14":
                                                index ===
                                                listStructures.length - 1,
                                        })}
                                    />
                                )
                            )}
                        </CarouselRootList>

                        <div className="w-full flex items-center gap-4 justify-center">
                            <CarouselBtnScroll
                                direction="prev"
                                onClick={() => handleCarouselScroll("prev")}
                                disabled={scrollPosition.position === "start"}
                            >
                                prev
                            </CarouselBtnScroll>
                            <CarouselBtnScroll
                                direction="next"
                                onClick={() => handleCarouselScroll("next")}
                                disabled={scrollPosition.position === "end"}
                            >
                                next
                            </CarouselBtnScroll>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};
