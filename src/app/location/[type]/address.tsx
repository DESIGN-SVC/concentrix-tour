import { Button, Dropdown } from "@/components";
import { Chevron } from "@/icons";
import { cx } from "cva";
import Image, { StaticImageData } from "next/image";
import { AddressButtonRouter } from "./address-button-router";

type HeaderProps = {
    title: string;
    city: string;
    address: string;
    background: StaticImageData;
};

export const Address = ({ title, city, address, background }: HeaderProps) => (
    <header
        className={cx(
            "relative z-0",
            "duration-300 ease-in",

            "after:absolute after:top-0 after:left-0 after:-z-10",
            "after:h-full after:w-full",
            "after:duration-300 after:ease-in",
            "after:bg-[linear-gradient(0deg,rgba(0,61,91,0.70)_0%,rgba(0,61,91,0.70)_100%),linear-gradient(180deg,rgba(31,33,35,0.00)_-3.32%,#1F2123_88.36%)]"
        )}
    >
        <Image
            priority
            src={background}
            alt={`imagem da fachada do prédio ${title}`}
            className="absolute left-0 object-cover top-0 w-full h-full -z-10"
        />
        <div className={cx("container pt-11 pb-24", "lg:py-[4.5rem]")}>
            <div className="w-full flex items-center justify-between">
                <AddressButtonRouter />
                <Dropdown />
            </div>
            <div
                className={cx(
                    "flex flex-col gap-4",
                    "mt-11",
                    "lg:pb-24 lg:mt-[4.5rem] lg:flex-row lg:flex-wrap"
                )}
            >
                <h1
                    className={cx(
                        "capitalize text-white font-semibold text-[2.5rem]/[3rem]",
                        "lg:font-bold lg:text-[3.5rem]/[4.2rem]"
                    )}
                >
                    {title} -
                </h1>
                <h4
                    className={cx(
                        "text-white text-2xl",
                        "lg:text-[3.5rem]/[4.2rem] lg:font-light"
                    )}
                >
                    ({city})
                </h4>
                <p className="text-white lg:flex-none lg:w-full">{address}</p>
            </div>
        </div>
    </header>
);
