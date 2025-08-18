import { ComponentProps } from "react";

export function Games({ ...props }: ComponentProps<"svg">) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.166 22.34c0-.967.784-1.75 1.75-1.75h6.5a1.75 1.75 0 110 3.5h-6.5a1.75 1.75 0 01-1.75-1.75zM14.916 22.34c0-.967.784-1.75 1.75-1.75h6.5a1.75 1.75 0 110 3.5h-6.5a1.75 1.75 0 01-1.75-1.75z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.916 17.34c.966 0 1.75.783 1.75 1.75v6.5a1.75 1.75 0 11-3.5 0v-6.5c0-.967.784-1.75 1.75-1.75z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.983 9.974a12.313 12.313 0 01.004 24.625h-.004l-12.42.05-8.234 9.102a1.814 1.814 0 01-.09.097 7.438 7.438 0 01-12.584-6.551l.006-.03L6.97 20.248l.008-.048a12.316 12.316 0 0112.124-10.173H19.1l.005 1.75v-1.75m17.878-.053v1.75zm0 3.5l-17.873.053h-.005a8.816 8.816 0 00-8.684 7.312L7.1 37.919a3.938 3.938 0 006.63 3.488l8.756-9.68a1.75 1.75 0 011.291-.575l13.2-.053h.006a8.813 8.813 0 00.003-17.625h-.003z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.052 18.734a1.75 1.75 0 012.05 1.386l3.328 17.177a7.439 7.439 0 01-12.584 6.551 1.8 1.8 0 01-.093-.1l-8.746-9.709a1.75 1.75 0 112.6-2.342l8.748 9.71a3.938 3.938 0 006.63-3.489l-3.318-17.133a1.75 1.75 0 011.385-2.05z"
                fill="currentColor"
            />
        </svg>
    );
}
