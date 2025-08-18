import { ComponentProps } from "react";

export function Workflow({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            width={47}
            height={48}
            viewBox="0 0 47 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask id="a" fill="#fff">
                <rect
                    x={0.0449219}
                    y={0.491508}
                    width={13.3512}
                    height={13.3512}
                    rx={0.953659}
                />
            </mask>
            <rect
                x={0.0449219}
                y={0.491508}
                width={13.3512}
                height={13.3512}
                rx={0.953659}
                stroke="currentColor"
                strokeWidth={6}
                mask="url(#a)"
            />
            <mask id="b" fill="#fff">
                <rect
                    x={16.7344}
                    y={17.1805}
                    width={13.3512}
                    height={13.3512}
                    rx={0.953659}
                />
            </mask>
            <rect
                x={16.7344}
                y={17.1805}
                width={13.3512}
                height={13.3512}
                rx={0.953659}
                stroke="currentColor"
                strokeWidth={6}
                mask="url(#b)"
            />
            <path
                d="M13.396 7.167h30.756c.527 0 .954.427.954.954v14.781a.954.954 0 01-.954.954h-9.713"
                stroke="currentColor"
                strokeWidth={3}
            />
            <mask id="c" fill="#fff">
                <rect
                    x={33.4238}
                    y={33.8696}
                    width={13.3512}
                    height={13.3512}
                    rx={0.953659}
                />
            </mask>
            <rect
                x={33.4238}
                y={33.8696}
                width={13.3512}
                height={13.3512}
                rx={0.953659}
                stroke="currentColor"
                strokeWidth={6}
                mask="url(#c)"
            />
            <path
                d="M16.73 23.856H2.667a.954.954 0 00-.954.954v14.782c0 .526.427.953.954.953h27.417"
                stroke="currentColor"
                strokeWidth={3}
            />
            <path
                d="M40.1 18.85l-6.574 4.93a.095.095 0 000 .152l6.573 4.93M23.41 35.538l6.574 4.93c.051.039.051.115 0 .153l-6.574 4.93"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
            />
        </svg>
    );
}
