"use client";
import { cx } from "cva";
import { useState } from "react";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

import { motion } from "framer-motion";
import { Button } from "@/components";
import { Chevron, Globe } from "@/icons";

type Images360Props = {
    pictures_360: string[];
};

export const Images360 = ({ pictures_360 }: Images360Props) => {
    const [indexImage, setIndexImage] = useState<number>(0);
    const nextImage = () => {
        setIndexImage((prev) => (prev + 1) % pictures_360.length);
    };

    const prevImage = () => {
        setIndexImage(
            (prev) => (prev - 1 + pictures_360.length) % pictures_360.length
        );
    };
    return (
        <aside
            id="images-360"
            className={cx(
                "w-full bg-blue-900 rounded-b-4xl",
                "py-14",
                "lg:py-[6.25rem]",
                "duration-300 ease-in",
                "dark:bg-gray-800"
            )}
        >
            <div className={cx("flex flex-col gap-8", "container")} data-animation="up-3">
                <header
                    className={cx(
                        "flex flex-col gap-2 items-center",
                        "md:flex-row md:justify-center md:gap-6"
                    )}
                >
                    <h2
                        className={cx(
                            "text-white font-semibold text-[2rem]/[2.4rem] text-center",
                            "w-full max-w-3xs",
                            "md:max-w-fit md:text-[2.5rem]/[3rem]"
                        )}
                    >
                        Explore os ambientes em
                    </h2>
                    <span
                        className={cx(
                            "px-6 py-1",
                            "rounded-full bg-seafoam-teal-30",
                            "font-semibold text-[2rem]/[2.4rem] text-blue-900"
                        )}
                    >
                        360°
                    </span>
                </header>
                <ul
                    className={cx(
                        "h-[28.75rem]",
                        "rounded-4xl relative z-0",
                        "after:absolute top-[calc(-1*3px)] left-[calc(-1*3px)] after:-z-10",
                        "after:w-[calc(100%_+3px_*2)] after:h-[calc(100%_+3px_*2)]",
                        "after:bg-[linear-gradient(164deg,#25e2cc,#003d5b,#25e2cc)] after:bg-[length:300%_300%] after:rounded-4xl",
                        "after:animate-border-gradient after:[animation-play-state:paused]",
                        "hover:after:[animation-play-state:running]",
                        "md:mt-7"
                    )}
                >
                    {pictures_360?.map((el, index) => (
                        <li key={index * 8} className="relative">
                            <motion.div
                                className={cx(
                                    "absolute top-[3px] left-[3px]",
                                    "w-full h-[28.75rem]",
                                    "object-cover rounded-4xl"
                                )}
                                initial={false}
                                animate={{
                                    opacity: index === indexImage ? 1 : 0,
                                    zIndex: index === indexImage ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    pointerEvents:
                                        index === indexImage ? "auto" : "none",
                                }}
                            >
                                <div
                                    className={cx(
                                        "absolute top-6 right-6 z-10",
                                        "text-white font-semibold text-sm text-center",
                                        "p-2 size-16",
                                        "flex items-center justify-center flex-col",
                                        "bg-black/10 backdrop-blur-[2px]"
                                    )}
                                >
                                    <Globe className="size-8" />
                                    <span>360°</span>
                                </div>
                                <div
                                    className={cx(
                                        "w-full h-full",
                                        "flex items-center justify-center",
                                        "rounded-[30px] overflow-hidden"
                                    )}
                                >
                                    <ReactPhotoSphereViewer
                                        src={el}
                                        height="100%"
                                        width="100%"
                                        defaultYaw={0}
                                        defaultPitch={0}
                                        littlePlanet={true}
                                        navbar={["zoom", "move", "fullscreen"]}
                                    />
                                </div>
                            </motion.div>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-between gap-4 md:justify-center">
                    <Button
                        disabled={indexImage === 0}
                        appearance={"secondary"}
                        size={"small"}
                        onClick={prevImage}
                    >
                        <Chevron className="-rotate-180" />
                    </Button>

                    <p className="font-semibold text-gray-400">
                        {indexImage < 9 && "0"}
                        {indexImage + 1} de{" "}
                        {pictures_360?.length >= 10
                            ? pictures_360?.length
                            : `0${pictures_360?.length}`}
                    </p>
                    <Button
                        disabled={indexImage === pictures_360.length - 1}
                        appearance={"secondary"}
                        size={"small"}
                        onClick={nextImage}
                    >
                        <Chevron />
                    </Button>
                </div>
            </div>
        </aside>
    );
};
