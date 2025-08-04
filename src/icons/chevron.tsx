import { ComponentProps } from "react";

export function Chevron({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.963 18.54a.625.625 0 01.051-.882L13.63 10 5.014 2.342a.625.625 0 11.83-.934l9.142 8.125a.625.625 0 010 .934l-9.141 8.125a.625.625 0 01-.882-.052z"
                fill="currentColor"
            />
        </svg>
    );
}
