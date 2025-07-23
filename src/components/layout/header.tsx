import { Concentrix, House } from "@/icons";
import Link from "next/link";
import { ToggleSwitch } from "../toggleSwitch";
import { cx } from "cva";

export const Header = () => (
    <header className={cx(["py-6 bg-white", "dark:bg-gray-900"])}>
        <div className="container flex items-center justify-between">
            <Concentrix
                className={cx([
                    "text-blue-900 flex-none",
                    "duration-300 ease-in",
                    "dark:text-white",
                ])}
            />
            <div className="flex gap-6 items-center w-full justify-end">
                <div
                    className={cx([
                        "border-r pr-6 border-gray-400",
                        "duration-300 ease-in",
                        "dark:border-gray-700",
                    ])}
                >
                    <Link
                        href={"/"}
                        className={cx([
                            "flex gap-1 items-center text-blue-900",
                            "duration-300 ease-in",
                            "dark:text-white",
                        ])}
                    >
                        <House />
                        <span className="text-sm font-semibold max-md:hidden">
                            Home
                        </span>
                    </Link>
                </div>
                <div className="flex gap-2 items-center font-semibold">
                    <span
                        className={cx([
                            "text-sm text-gray-700 max-md:hidden",
                            "duration-300 ease-in",
                            "dark:text-gray-400",
                        ])}
                    >
                        Tema:
                    </span>
                    <ToggleSwitch />
                </div>
            </div>
        </div>
    </header>
);
