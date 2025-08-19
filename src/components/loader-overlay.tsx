import { cx } from "cva";

export function LoaderOverlay() {
    return (
        <div
            className={cx([
                "fixed inset-0 z-50 ",
                "flex items-center justify-center",
                "bg-white ",
            ])}
        >
            <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-20 animate-spin"
            >
                <path
                    d="M9.75 3v2.586"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.8}
                    d="M15.054 5.196l-1.83 1.83"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.7}
                    d="M17.25 10.5h-2.586"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.6}
                    d="M15.054 15.804l-1.83-1.83"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.5}
                    d="M9.75 18v-2.586"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.3}
                    d="M4.446 15.804l1.829-1.83"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.2}
                    d="M2.25 10.5h2.586"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity={0.1}
                    d="M4.446 5.196l1.829 1.83"
                    stroke="#2A2B2C"
                    strokeWidth={1.74569}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
