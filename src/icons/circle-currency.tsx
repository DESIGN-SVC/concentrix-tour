import { ComponentProps } from "react";

export function CircleCurrency({ ...props }:ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={54}
            viewBox="0 0 54 54"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.894 12.564c.922 0 1.669.747 1.669 1.669v3.602a1.669 1.669 0 01-3.338 0v-3.602c0-.922.747-1.669 1.669-1.669zM26.894 34.177c.922 0 1.669.747 1.669 1.669v3.601a1.669 1.669 0 01-3.338 0v-3.601c0-.922.747-1.67 1.669-1.67z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.894 6.897c-11.06 0-20.027 8.967-20.027 20.027s8.966 20.027 20.027 20.027c11.06 0 20.027-8.966 20.027-20.027 0-11.06-8.967-20.027-20.027-20.027zM3.529 26.924C3.53 14.02 13.99 3.56 26.894 3.56c12.904 0 23.365 10.46 23.365 23.364S39.798 50.29 26.894 50.29c-12.904 0-23.365-10.46-23.365-23.365z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.192 19.505a2.833 2.833 0 000 5.667h5.403a6.171 6.171 0 010 12.342h-8.104a1.669 1.669 0 010-3.338h8.104a2.833 2.833 0 000-5.667h-5.402a6.171 6.171 0 110-12.341h8.103a1.669 1.669 0 010 3.337h-8.104z"
                fill="currentColor"
            />
        </svg>
    );
}
