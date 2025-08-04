import { cx } from "cva";
import concentrix from "@/assets/images/brand-tour.png";
import Image from "next/image";

import { Button } from "@/components";

export const Presentation = () => (
    <main
        className={cx([
            "py-8",
            "bg-[linear-gradient(180deg,#003D5B_53.68%,#FFF_54.15%)]",
            "duration-300 ease-in",
            "dark:bg-[linear-gradient(180deg,#2A2B2C_53.68%,#1F2123_54.15%)]",
            ,
            "lg:pt-[4.5rem]",
        ])}
    >
        <div className="container">
            <div
                className={cx([
                    "relative overflow-hidden",
                    "flex justify-end",
                    "w-full h-[27.125rem] mx-auto",
                    "border rounded-4xl border-blue-300 bg-blue-900",

                    "after:w-[calc(100%_-3rem)] after:h-[calc(100%_-3rem)]",
                    "after:absolute after:left-6 after:top-6",
                    "after:border after:rounded-[3.5rem] after:border-blue-500 after:pointer-events-none",

                    "lg:h-[33.375rem]",
                    "lg:after:h-[calc(100%_-9rem)] lg:after:w-[calc(100%_-15rem)]",
                    "lg:after:left-[7.5rem] lg:after:top-[4.5rem]",
                ])}
            >
                <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    className={cx([
                        "w-full object-cover h-[27.125rem]",
                        "absolute left-0 bottom-0",
                        "lg:h-[33.375rem]",
                    ])}
                >
                    <source src="/video/earth.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
                    className={cx([
                        "relative",
                        "pt-[7.75rem] px-6 w-full",
                        "flex flex-col items-center gap-8",
                        "bg-[linear-gradient(180deg,rgba(0,61,91,0.00)_87.63%,#003D5B_98.96%),radial-gradient(42.93%_42.17%_at_50%_64.72%,rgba(0,61,91,0.00)_58.77%,#003D5B_100%)]",
                        "lg:pt-[8em]",
                    ])}
                >
                    <Image
                        src={concentrix}
                        alt="Concentrix tour"
                        className="w-full max-w-3xs lg:max-w-[31.563rem]"
                        priority={true}
                    />
                    <Button size={"medium"}>Comece seu Tour</Button>
                </div>
            </div>
        </div>
    </main>
);
