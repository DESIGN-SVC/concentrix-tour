"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "cva";
import { useState } from "react";
import { SubTitle } from "./sub-title";

import { motion } from "framer-motion";
import { Button } from "@/components";
import { Chevron, CircleCurrency, UserCheck, Workflow } from "@/icons";

import img1 from "@/assets/images/woman-white-phone.png";
import img2 from "@/assets/images/man-black-pc.png";
import img3 from "@/assets/images/woman-white-book.png";
import Image from "next/image";

type ModelOperationsProps = {
    model_operations: {
        type: string;
        title: string;
        description: string;
    }[];
};

export const ModelOperations = ({ model_operations }: ModelOperationsProps) => {
    const types = model_operations.flatMap((el) => el.type);
    const [typeTab, setTypeTab] = useState<string>(types[0]);
    console.log(typeTab);

    const handleCarouselScroll = (direction: "prev" | "next") => {
        const currentIndex = types.indexOf(typeTab);

        if (direction === "prev") {
            const prevIndex =
                currentIndex > 0 ? currentIndex - 1 : types.length - 1;
            setTypeTab(types[prevIndex]);
        }

        if (direction === "next") {
            const nextIndex =
                currentIndex < types.length - 1 ? currentIndex + 1 : 0;
            setTypeTab(types[nextIndex]);
        }
    };
    const imageListAccordingToOperation = [
        {
            img: img1,
            icon: <CircleCurrency />,
        },
        {
            img: img2,
            icon: <UserCheck />,
        },
        {
            img: img3,
            icon: <Workflow />,
        },
    ];

    return (
        <div className={cx("flex flex-col gap-14", "lg:grid lg:grid-cols-2")}>
            <div className="space-y-8">
                <SubTitle className="lg:text-[2.5rem]/[3rem]">
                    Tipos de operação:
                </SubTitle>
                <Tabs.Root
                    value={typeTab}
                    onValueChange={(value) =>
                        setTypeTab(value as typeof typeTab)
                    }
                    className="space-y-14"
                >
                    <Tabs.List className={cx("flex items-center gap-2")}>
                        {model_operations.map((el) => (
                            <Tabs.Trigger
                                key={el.type}
                                value={el.type}
                                className={cx(
                                    "px-5 py-3",
                                    "rounded-full border",
                                    "cursor-pointer",
                                    "duration-300 ease-in",
                                    "font-bold",
                                    {
                                        "border-jade text-jade bg-blue-300":
                                            el.type === typeTab,
                                        "border-gray-400 text-gray-400":
                                            el.type !== typeTab,
                                    }
                                )}
                            >
                                {el.type}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>
                    {model_operations.map(({ title, type, description }) => (
                        <Tabs.Content key={title} value={type} asChild>
                            <motion.div
                                className="space-y-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <SubTitle>{title}</SubTitle>
                                <p className="text-white">{description}</p>
                            </motion.div>
                        </Tabs.Content>
                    ))}
                </Tabs.Root>
            </div>
            <div
                className={cx(
                    "flex items-center justify-between",
                    "md:justify-start md:gap-4",
                    "lg:col-start-1"
                )}
            >
                <Button
                    disabled={typeTab === types[0]}
                    appearance={"secondary"}
                    size={"small"}
                    onClick={() => handleCarouselScroll("prev")}
                >
                    <Chevron className="-rotate-180" />
                </Button>

                <Button
                    disabled={typeTab === types[types.length - 1]}
                    appearance={"secondary"}
                    size={"small"}
                    onClick={() => handleCarouselScroll("next")}
                >
                    <Chevron />
                </Button>
            </div>

            {imageListAccordingToOperation.map(({ icon, img }, index) => (
                <div
                    key={index * 245}
                    className={cx(
                        "relative overflow-hidden",
                        "flex justify-end",
                        "w-full max-w-[20.25rem] mx-auto h-[24.438rem]",
                        "duration-300 ease-in",

                        "before:w-full before:max-w-[11.274rem] before:h-[18.572rem]",
                        "before:absolute before:left-2.5 before:bottom-5",
                        "before:duration-300 before:ease-in before:z-[1]",
                        "before:rounded-full before:bg-blend-difference",

                        "after:w-full after:max-w-[13.438rem] after:h-full",
                        "after:absolute after:left-1/2 after:-translate-x-1/2 after:z-0",
                        "after:duration-300 after:ease-in",
                        "after:rotate-180 after:rounded-full after:bg-blend-difference",
                        "lg:row-span-2 lg:col-start-2 lg:row-start-1",
                        {
                            hidden: types.indexOf(typeTab) !== index,
                            "after:bg-[linear-gradient(295deg,#007380_3.45%,rgba(0,115,128,0.00)_88.07%)] before:bg-jade-800":
                                index === 0,
                            "after:bg-[linear-gradient(295deg,#FBCA18_3.45%,rgba(251,202,24,0.00)_88.07%)] before:bg-yellow-500 lg:overflow-visible":
                                index === 1,
                            "after:bg-[linear-gradient(295deg,#CC3262_3.45%,rgba(204,50,98,0.00)_88.07%)] before:bg-pink-700":
                                index === 2,
                        }
                    )}
                >
                    <Image
                        src={img}
                        alt=""
                        className={cx(
                            "absolute left-2 bottom-5 z-[2]",
                            "animate-flip-in-ver-right",
                            {
                                "h-[21.25rem]": [0, 1].includes(index),
                                "lg:scale-x-[-1] lg:-left-20": index === 1,
                            }
                        )}
                    />
                    <div
                        className={cx(
                            "border rounded-full z-[1]",
                            "w-full max-w-24 h-56 mt-14",
                            "flex justify-center",
                            "duration-300 ease-in",
                            "overflow-hidden",
                            {
                                "border-blue-400": index === 0,
                                "border-yellow-400": index === 1,
                                "border-pink-700": index === 2,
                            }
                        )}
                    >
                        <div
                            className={cx(
                                "size-24",
                                "rounded-full",
                                "flex items-center justify-center",
                                "animate-slide-in-bottom",
                                {
                                    "bg-blue-500 text-jade": index === 0,
                                    "bg-yellow-300 text-yellow-600":
                                        index === 1,
                                    "bg-pink-50 text-pink-700": index === 2,
                                }
                            )}
                        >
                            {icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
