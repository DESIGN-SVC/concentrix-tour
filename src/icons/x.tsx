import { ComponentProps } from "react";

export function X({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            {...props}
        >
            <path
                d="M19.105 2.507a.64.64 0 01.904.904l-7.848 7.847 7.848 7.848a.64.64 0 01-.904.903l-7.847-7.848L3.41 20.01a.64.64 0 01-.903-.903l7.847-7.848-7.847-7.847a.64.64 0 01.903-.904l7.848 7.848 7.847-7.848z"
                fill="currentColor"
            />
        </svg>
    );
}
