import { ComponentProps } from "react";

export function UserCheck({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={55}
            height={55}
            viewBox="0 0 55 55"
            fill="none"
            {...props}
        >
            <circle
                cx={28.6168}
                cy={15.6085}
                r={8.09139}
                stroke="currentColor"
                strokeWidth={3}
            />
            <path
                d="M28.623 46.991h-7.926c-4.378 0-8.243-4.481-5.961-8.84 2.23-4.26 6.55-7.343 13.887-7.343"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <path
                d="M48.271 32.65L34.92 46.002l-6.676-6.675"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
