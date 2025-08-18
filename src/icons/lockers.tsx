import { ComponentProps } from "react";

export function Lockers({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={57}
            height={56}
            viewBox="0 0 57 56"
            fill="none"
            {...props}
        >
            <path
                d="M28.564 8.75V49M35.563 15.75h5.25M35.563 22.75h5.25M16.314 15.75h5.25M16.314 22.75h5.25M11.063 8.75h35a1.75 1.75 0 011.75 1.75v33.25h-38.5V10.5a1.75 1.75 0 011.75-1.75zM9.313 43.75V49M47.813 43.75V49"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
