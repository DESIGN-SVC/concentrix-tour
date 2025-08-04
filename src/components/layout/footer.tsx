import { Concentrix } from "@/icons";
import { cx } from "cva";
import concentrix from "@/assets/images/brand-tour.png";
import Image from "next/image";

export const Footer = () => (
    <footer
        className={cx([
            " py-12",
            "bg-gray-600",
            "border-t border-gray-700",
            "duration-300 ease-in",
            "dark:bg-gray-900",
        ])}
    >
        <div
            className={cx([
                "flex flex-col gap-4 justify-center items-center container",
                "lg:flex-row lg:gap-12 lg:justify-between",
            ])}
        >
            <div
                className={cx([
                    "flex items-center justify-center gap-6",
                    "relative",
                    "after:w-0.5 after:h-8 after:bg-gray-200 after:order-2",
                    "after:ease-in after:duration-300",
                    "dark:after:bg-gray-600",
                ])}
            >
                <Concentrix className="text-white order-1" />

                <Image
                    src={concentrix}
                    alt="Concentrix tour"
                    className="w-full max-w-20 order-3"
                />
            </div>

            <p
                className={cx([
                    "text-white text-center",
                    "w-full max-w-80",
                    "duration-300 ease-in",
                    "lg:max-w-fit",
                    "dark:text-gray-400",
                ])}
            >
                &reg; Todos os direitos reservados a Concentrix
            </p>
        </div>
    </footer>
);
