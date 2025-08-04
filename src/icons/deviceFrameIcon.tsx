import { ComponentProps } from "react";

export function DeviceFrameIcon({ ...props }:ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={24}
            viewBox="0 0 18 24"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.108 20.576H.516A3.404 3.404 0 003.916 24h10.192c1.877 0 3.392-1.535 3.392-3.424V6.494c0-.064-.056-.128-.12-.128h-3.152c-.064 0-.12.056-.12.128v14.082zm0-20.576C15.985 0 17.5 1.535 17.5 3.432H3.908v14.082a.132.132 0 01-.128.128H.628a.132.132 0 01-.128-.128V3.432C.5 1.535 2.016 0 3.9 0h10.208z"
                fill="currentcolor"
            />
        </svg>
    );
}
