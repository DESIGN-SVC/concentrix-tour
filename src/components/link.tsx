import { cva, VariantProps } from "cva";
import Anchor, { LinkProps as RouteProps } from "next/link";
import { ComponentProps } from "react";

const tw = cva(
    [   'relative',
        "flex items-center gap-1",
        'w-fit',
        "font-semibold",
        "after:absolute after:left-1/2 after:-right-1/2 after:bottom-0",
        "after:w-0 after:h-[1px]",
        'after:duration-300 after:ease-in-out',
        'hover:after:w-full hover:after:left-0'
    ],
    {
        variants: {
            appearance: {
                primary: ["text-white",'after:bg-white'],
            },
        },
        defaultVariants: {
            appearance: "primary",
        },
    }
);

type LinksProps = RouteProps & ComponentProps<"a"> & VariantProps<typeof tw>;
export const Link = ({ className, ...props }: LinksProps) => (
    <Anchor className={tw({ className })} {...props} />
);
