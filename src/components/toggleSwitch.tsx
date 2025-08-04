'use client'

import { Moon, Sun } from "@/icons";
import { cx } from "cva";

export const ToggleSwitch = () => {
    const handleToggleDark = () => {
        const html = document.querySelector("html");
        if (html?.classList.contains("dark")) {
            return html?.classList.remove("dark");
        }
        return html?.classList.add("dark");
    };
    return (
        <button
            onClick={handleToggleDark}
            className={cx([
                "relative group cursor-pointer",
                "bg-seafoam-teal-30 rounded-full",
                "py-2 px-3 w-16",
                "flex justify-between",
                "duration-300 ease-in",

                "dark:bg-blue-900",

                "before:absolute before:left-0 before:top-0 before:size-8 before:z-10",
                "before:border-2 before:border-jade before:rounded-full before:bg-blue-900",
                "before:duration-500 before:ease-in-out",

                "dark:before:bg-gray-200 dark:before:border-white dark:before:left-1/2",
            ])}
        >
            <Moon className="flex-none text-white -rotate-45 dark:rotate-0 duration-300 ease-in" />
            <Sun className="text-blue-900 flex-none rotate-0 dark:rotate-90 duration-300 ease-in" />
        </button>
    );
};
