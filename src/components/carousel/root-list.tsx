import { cx } from "cva";
import { PropsWithChildren, Ref } from "react";

type RootProps = {
    ref?: Ref<HTMLUListElement>;
} & PropsWithChildren;

export const Root = ({ children, ref }: RootProps) => (
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
