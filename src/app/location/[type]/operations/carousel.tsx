"use client";
import { Button } from "@/components";
import { Chevron, ForkKnife, Games, Lockers, Smiles } from "@/icons";
import { Slot } from "@radix-ui/react-slot";
import { cx } from "cva";
import { useRef, useState } from "react";

type ScrollPosition = {
    position: "start" | "middle" | "end";
};

export const Carousel = () => {
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

    const list = [
        {
            icon: <ForkKnife />,
            title: "Refeitórios e Lanchonetes",
            description:
                "Ambiente com diversas opções gastronômicas para refeições tranquilas e momentos de interação.",
        },
        {
            icon: <Smiles />,
            title: "Espaço RELAX",
            description:
                "Espaços pensados para descanso e equilíbrio entre produtividade e bem-estar.",
        },
        {
            icon: <Games />,
            title: "Espaços Game",
            description:
                "Fliperamas, sinuca e outros jogos para promover diversão, interação dar aquela pausa e recarregar as energias!",
        },
        {
            icon: <Lockers />,
            title: "Guarda-volumes",
            description:
                "Segurança e praticidade com guarda-volumes individuais para proteger seus pertences.",
        },
    ];

    return (
        <div className="space-y-6">
            <ul
                className={cx(
                    "flex items-center gap-8",
                    "overflow-x-auto [&::-webkit-scrollbar]:hidden scroll-smooth",
                    "xl:gap-7 xl:justify-between xl:overflow-hidden"
                )}
                ref={carouselRef}
            >
                {list.map(({ title, icon, description }) => (
                    <li
                        key={title}
                        className={cx(
                            "flex flex-col gap-6 flex-none",
                            "text-white text-sm",
                            "w-full max-w-60 h-52"
                        )}
                    >
                        <Slot className="text-blue-400">{icon}</Slot>
                        <h6>{title}</h6>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-between gap-6 md:justify-center xl:hidden">
                <Button
                    disabled={scrollPosition.position === "start"}
                    appearance={"secondary"}
                    size={"small"}
                    onClick={() => handleCarouselScroll("prev")}
                >
                    <Chevron className="-rotate-180" />
                </Button>

                <Button
                disabled={scrollPosition.position === "end"}
                    appearance={"secondary"}
                    size={"small"}
                    onClick={() => handleCarouselScroll("next")}
                >
                    <Chevron />
                </Button>
            </div>
        </div>
    );
};
