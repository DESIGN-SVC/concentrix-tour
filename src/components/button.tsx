"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const tw = cva(
    [
        "w-fit",
        "font-semibold",
        "flex items-center gap-2 justify-center",
        "rounded-full",
        "cursor-pointer relative overflow-hidden z-0 select-none",
        "duration-300 ease-in",

        "before:absolute before:left-1/2  before:top-full before:-z-10",
        "before:w-[140%] before:h-[180%]",
        "before:duration-500 before:ease-in",
        "before:scale-y-100 before:scale-x-125 before:-translate-x-1/2",
        "before:bg-black/5 before:rounded-[80%]",

        "hover:before:scale-y-125 hover:before:scale-x-75 hover:before:top-[-35%]",
        'disabled:cursor-not-allowed'
    ],
    {
        variants: {
            size: {
                large: ["py-4 px-6"],
                medium: ["py-3 px-5", "text-sm"],
                small: ["py-2 px-3", "text-xs"],
            },
            appearance: {
                primary: [
                    "bg-blue-900",
                    "text-white",
                    " focus:outline-blue-300",
                    " hover:before:bg-jade",
                ],
                secondary: [
                    "bg-seafoam-teal-30",
                    "text-blue-900",
                    "hover:before:bg-blue-400",
                    "focus:outline-blue-900",
                ],
                ghost: [
                    "text-blue-900",
                    "bg-transparent border border-blue-900",
                    'hover:before:bg-blue-200',
                    'disabled:before:hidden disabled:border-gray-200 disabled:text-gray-200'
                ],
            },
        },
        compoundVariants: [
            {
                appearance: ["primary", "secondary"],
                className: ["focus:outline-4",'disabled:before:hidden disabled:text-gray-400 disabled:bg-gray-200'],
            },
        ],
        defaultVariants: {
            size: "medium",
            appearance: "primary",
        },
    }
);

type ButtonsProps = ComponentProps<"button"> &
    VariantProps<typeof tw> & {
        asChild?: boolean;
    };

export const Button = ({
    className,
    size,
    asChild,
    appearance,
    ...props
}: ButtonsProps) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={tw({ className, size, appearance })} {...props} />;
};
