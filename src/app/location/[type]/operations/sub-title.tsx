import { cx } from "cva";
import { ComponentProps } from "react";

export const SubTitle = ({ className, ...props }: ComponentProps<"h2">) => (
    <h2
        className={cx(
            "text-white font-semibold text-[2rem]/[2.4rem]",
            className
        )}
        {...props}
    />
);
