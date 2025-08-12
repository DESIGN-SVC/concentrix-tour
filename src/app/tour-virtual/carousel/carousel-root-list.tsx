import { cx } from "cva";
import { PropsWithChildren, Ref } from "react";

type CarouselRootListProps = {
    ref?: Ref<HTMLUListElement>;
} & PropsWithChildren;

export const CarouselRootList = ({ children, ref }: CarouselRootListProps) => (
    <ul
        className={cx(
            "flex items-center gap-3",
            "overflow-x-auto [&::-webkit-scrollbar]:hidden scroll-smooth"
        )}
        ref={ref}
    >
        {children}
    </ul>
);
