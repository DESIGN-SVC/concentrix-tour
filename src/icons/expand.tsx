import { ComponentProps } from "react";

export const Expand = ({ ...props }: ComponentProps<"svg">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.125 2.25a.75.75 0 01.75-.75h4.875a.75.75 0 01.75.75v4.875a.75.75 0 01-1.5 0V3h-4.125a.75.75 0 01-.75-.75z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.28 1.72a.75.75 0 010 1.06l-6.824 6.825a.75.75 0 11-1.061-1.06L21.22 1.72a.75.75 0 011.06 0zM2.25 16.125a.75.75 0 01.75.75V21h4.125a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75v-4.875a.75.75 0 01.75-.75z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.605 14.395a.75.75 0 010 1.06L2.78 22.28a.75.75 0 01-1.06-1.06l6.825-6.825a.75.75 0 011.06 0zM21.75 16.125a.75.75 0 01.75.75v4.875a.75.75 0 01-.75.75h-4.875a.75.75 0 010-1.5H21v-4.125a.75.75 0 01.75-.75z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.395 14.395a.75.75 0 011.06 0l6.826 6.825a.75.75 0 11-1.061 1.06l-6.825-6.825a.75.75 0 010-1.06zM1.5 2.25a.75.75 0 01.75-.75h4.875a.75.75 0 010 1.5H3v4.125a.75.75 0 01-1.5 0V2.25z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.72 1.72a.75.75 0 011.06 0l6.825 6.825a.75.75 0 01-1.06 1.06L1.72 2.78a.75.75 0 010-1.06z"
            fill="currentColor"
        />
    </svg>
);
