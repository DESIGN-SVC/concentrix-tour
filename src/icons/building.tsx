import { ComponentProps } from "react";

export function Building({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.125 15.007c0-.31.252-.563.563-.563h14.624a.563.563 0 010 1.125H1.688a.562.562 0 01-.562-.562z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.487 2.748c.203-.203.479-.317.767-.317h6.268a1.085 1.085 0 011.084 1.084v11.492a.563.563 0 01-1.125 0V3.556H3.294v11.45a.563.563 0 01-1.125 0V3.517c0-.288.114-.564.318-.768z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.481 7.172c0-.31.252-.563.563-.563h4.7a1.085 1.085 0 011.086 1.085v7.313a.563.563 0 01-1.125 0V7.734h-4.661a.562.562 0 01-.563-.562zM4.258 5.605c0-.31.252-.563.563-.563h2.09a.563.563 0 010 1.125H4.82a.563.563 0 01-.563-.562zM5.303 9.783c0-.31.252-.562.563-.562h2.089a.563.563 0 010 1.125h-2.09a.562.562 0 01-.562-.563zM4.258 12.395c0-.31.252-.563.563-.563h2.09a.563.563 0 010 1.125H4.82a.562.562 0 01-.563-.562z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.57 12.395c0-.31.253-.563.563-.563h1.045a.563.563 0 010 1.125h-1.045a.562.562 0 01-.562-.562zM11.57 9.783c0-.31.253-.562.563-.562h1.045a.562.562 0 110 1.125h-1.045a.562.562 0 01-.562-.563z"
                fill="currentColor"
            />
        </svg>
    );
}
