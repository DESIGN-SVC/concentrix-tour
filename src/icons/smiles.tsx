import { ComponentProps } from "react";

export function Smiles({ ...props }:ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={57}
      height={56}
      viewBox="0 0 57 56"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1248_8017)">
        <path
          d="M37.187 33.25c-1.816 3.14-4.863 5.25-8.75 5.25-3.888 0-6.935-2.11-8.75-5.25"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.436 49c11.599 0 21-9.402 21-21s-9.401-21-21-21c-11.598 0-21 9.402-21 21s9.402 21 21 21z"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.561 25.375a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM36.312 25.375a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1248_8017">
          <path fill="#fff" transform="translate(.437)" d="M0 0H56V56H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
