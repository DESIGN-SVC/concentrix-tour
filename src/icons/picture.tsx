import { ComponentProps } from "react";

export function Picture({ ...props }: ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={21}
            viewBox="0 0 24 21"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.65 2.614a.068.068 0 00-.067.067v15.844c0 .038.03.068.068.068h19.364c.038 0 .068-.03.068-.068V2.681a.068.068 0 00-.068-.067H2.651zM.959 2.68c0-.934.758-1.692 1.693-1.692h19.364c.935 0 1.693.758 1.693 1.692v15.844c0 .935-.758 1.693-1.693 1.693H2.651a1.693 1.693 0 01-1.693-1.693V2.681z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.932 10.02a.068.068 0 00-.048.02l-.574-.575.574.574-5.539 5.54a.813.813 0 01-1.149-1.15L6.735 8.89a1.693 1.693 0 012.394 0l4.917 4.917a.068.068 0 00.095 0l2.276-2.276a1.695 1.695 0 012.394 0l4.659 4.659a.812.812 0 11-1.149 1.149l-4.659-4.659a.068.068 0 00-.096 0l-2.276 2.276a1.693 1.693 0 01-2.393 0L7.98 10.039a.068.068 0 00-.048-.02z"
                fill="currentColor"
            />
            <path
                d="M15.415 8.622a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z"
                fill="currentColor"
            />
        </svg>
    );
}
