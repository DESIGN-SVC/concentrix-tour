import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const tw = cva(["w-fit", "font-semibold", "rounded-full",'cursor-pointer'], {
    variants: {
        size: {
            large: ["py-4 px-6"],
            medium: ["py-3 px-5"],
            small: ["py-2 px-3"],
        },
        appearance: {
            primary: ["bg-blue-900", "text-white"],
        },
    },
    defaultVariants: {
        size: "medium",
        appearance: "primary",
    },
});

type ButtonsProps = ComponentProps<"button"> & VariantProps<typeof tw>;

export const Button = ({ className, size, ...props }: ButtonsProps) => (
    <button className={tw({ className, size })} {...props} />
);
