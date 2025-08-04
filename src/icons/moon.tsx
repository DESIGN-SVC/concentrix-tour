import { ComponentProps } from "react";

export function Moon({...props}: ComponentProps<'svg'>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.202 1.021a.5.5 0 01.622.627 6.122 6.122 0 007.527 7.528.5.5 0 01.63.342.5.5 0 01-.003.28 7.12 7.12 0 11-8.776-8.777zm-.526 1.246a6.121 6.121 0 108.057 8.057 7.121 7.121 0 01-8.057-8.057z"
        fill="currentColor"
      />
    </svg>
  )
}

