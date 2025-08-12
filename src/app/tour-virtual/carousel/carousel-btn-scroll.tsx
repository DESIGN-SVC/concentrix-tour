import { Chevron } from "@/icons";
import { cx } from "cva";
import { ComponentProps } from "react";

type CarouselBtnScrollProps = ComponentProps<"button"> & {
    direction: "prev" | "next";
};

export const CarouselBtnScroll = ({
    direction,
    ...props
}: CarouselBtnScrollProps) => (
    <button
        className={cx(
            "w-11 h-8",
            "rounded-full bg-seafoam-teal-30 border border-transparent",
            "flex items-center justify-center",
            "cursor-pointer",
            "duration-300 ease-in",
            "text-blue-900",
            'lg:w-16 lg:h-12',

            "disabled:cursor-not-allowed disabled:bg-transparent disabled:border-gray-600 disabled:text-gray-600",
            {
                "rotate-180": direction === "prev",
            }
        )}
        {...props}
    >
        <Chevron />
    </button>
);
