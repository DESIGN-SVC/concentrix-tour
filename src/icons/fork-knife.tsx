import { ComponentProps } from "react";

export function ForkKnife({ ...props }:ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            {...props}
        >
            <g
                clipPath="url(#clip0_1742_9632)"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M17.5 8.75v10.5M17.5 28v21M45.5 36.75H33.25s0-22.75 12.25-28V49M10.5 8.75l-1.75 10.5a8.75 8.75 0 0017.5 0L24.5 8.75" />
            </g>
            <defs>
                <clipPath id="clip0_1742_9632">
                    <path fill="#fff" d="M0 0H56V56H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
