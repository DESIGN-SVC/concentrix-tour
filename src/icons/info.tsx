import { ComponentProps } from "react";

export function Info({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={27}
            viewBox="0 0 26 27"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 3.854c-5.385 0-9.75 4.365-9.75 9.75 0 5.384 4.365 9.75 9.75 9.75s9.75-4.366 9.75-9.75c0-5.385-4.365-9.75-9.75-9.75zm-11.375 9.75C1.625 7.32 6.718 2.229 13 2.229S24.375 7.32 24.375 13.604c0 6.282-5.093 11.375-11.375 11.375S1.625 19.886 1.625 13.604z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.813 11.56v8.126h-1.626V11.56h1.626z"
                fill="currentColor"
            />
            <path
                d="M14.206 8.728a1.206 1.206 0 11-2.413 0 1.206 1.206 0 012.413 0z"
                fill="currentColor"
            />
        </svg>
    );
}
