import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cx } from "cva";

export const List = ({
    className,
    ...props
}: DropdownMenu.DropdownMenuRadioItemProps) => (
    <DropdownMenu.Item
        className={cx(
            "outline-none",
            "text-center",
            "w-full py-2 px-5",
            "items-center justify-center",
            'duration-300 ease-in',
            'hover:bg-gray-200',
            className
        )}
        {...props}
    />
);
