import { ComponentProps } from "react";

export function Pin({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M12 6.282a4 4 0 10-8 0c0 1.352 1.234 3.733 3.715 7.009l.014.019a.34.34 0 00.542 0C10.762 10.024 12 7.637 12 6.282zm-4.393 8.5c-.16-.2-.288-.364-.384-.491C4.408 10.643 3 7.974 3 6.28a5 5 0 1110 0c0 1.693-1.41 4.366-4.228 8.02l-.379.485a.5.5 0 01-.785 0l-.001-.004zM8 7.282a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 110-4 2 2 0 010 4z"
        fill="currentcolor"
      />
    </svg>
  )
}
