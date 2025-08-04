import { Link } from "@/components";
import { Chevron, DeviceFrameIcon, User } from "@/icons";
import { cx } from "cva";
import glassdoorAssessment from "@/assets/images/glassdoor-assessment.png";
import Image from "next/image";
import { ComponentProps } from "react";

export const AboutUs = () => (
    <section
        className={cx(
            "w-full bg-white",
            "ease-in duration-300",
            "dark:bg-gray-900"
        )}
    >
        <nav className="container pt-8 pb-[4.5rem] space-y-8 lg:space-y-12">
            <h2
                className={cx(
                    "font-semibold text-2xl text-blue-900",
                    " duration-300 ease-in",
                    "dark:text-white"
                )}
            >
                Saiba mais sobre nós
            </h2>
            <ul className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
                {list.map(({ title, description, icon, href }, index) => (
                    <li
                        key={title}
                        className={cx(
                            "w-full p-6",
                            "border rounded-3xl border-seafoam-teal-30",
                            "flex flex-col gap-3",
                            "ease-in duration-300",
                            "lg:gap-6 lg:p-8",

                            {
                                "bg-jade gap-8 lg:order-1 lg:flex-row-reverse lg:gap-14 lg:px-14 lg:justify-between":
                                    index === 0,
                                "bg-blue-100 lg:max-w-[506px] dark:border-gray-700 dark:bg-gray-800":
                                    index !== 0,
                                "lg:order-2": index === 1,
                                "lg:order-4": index === 2,
                                "lg:order-3": index === 3,
                                "lg:order-5": index === 4,
                            }
                        )}
                    >
                        {index === 0 && (
                            <>
                                <div className="flex-1">
                                    <span
                                        className={cx(
                                            "flex items-center justify-center",
                                            "size-12",
                                            "border rounded-full border-blue-400",
                                            "text-blue-400",
                                            "lg:size-14"
                                        )}
                                    >
                                        <DeviceFrameIcon />
                                    </span>
                                    <h6
                                        className={cx(
                                            "mt-4",
                                            "font-semibold text-2xl text-blue-400",
                                            "lg:text-[2rem]"
                                        )}
                                    >
                                        {title}
                                    </h6>
                                    <p
                                        className={cx(
                                            "ease-in duration-300",
                                            "text-base text-white",
                                            "mt-3",
                                            "max-w-[470px]"
                                        )}
                                    >
                                        {description}
                                    </p>
                                    <Link href={href} className="mt-6">
                                        Saiba mais
                                        <Chevron className="size-3.5" />
                                    </Link>
                                </div>
                                <div
                                    className={cx(
                                        "relative z-0",
                                        'flex items-center justify-center',
                                        "w-full max-w-[17.5rem] mx-auto",
                                        'lg:mx-0 lg:max-w-[22.625rem]'
                                    )}
                                >
                                    <SVGRectangle
                                        className={cx(
                                            "w-full max-w-[17.5rem]",
                                            "absolute -z-10",
                                            'lg:max-w-[22.625rem]'
                                        )}
                                    />
                                    <Image
                                        src={glassdoorAssessment}
                                        alt="Glassdoor"
                                        className="w-full max-w-[10.75rem] mx-auto lg:mx-0 lg:max-w-[14.25rem] z-10"
                                    />
                                </div>
                            </>
                        )}
                        {index !== 0 && (
                            <>
                                <header className="flex justify-between items-center gap-4">
                                    <span
                                        className={cx(
                                            "size-12",
                                            "flex items-center justify-center",
                                            "rounded-full bg-blue-300",
                                            "text-jade",
                                            "dark:bg-gray-700 dark:text-seafoam-teal-30"
                                        )}
                                    >
                                        {icon}
                                    </span>
                                    <h6
                                        className={cx(
                                            "ease-in duration-300",
                                            "text-lg font-semibold text-blue-900",
                                            "flex-1",
                                            "dark:text-white"
                                        )}
                                    >
                                        {title}
                                    </h6>
                                    <Chevron className="dark:text-white" />
                                </header>
                                <p
                                    className={cx(
                                        "ease-in duration-300",
                                        "text-sm text-gray-700",
                                        "lg:max-w-72",
                                        "dark:text-gray-200"
                                    )}
                                >
                                    {description}
                                </p>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    </section>
);

const SVGRectangle = ({ ...props }: ComponentProps<"svg">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={361}
        height={256}
        viewBox="0 0 361 256"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.445 204.922V.242C22.945.243 0 23.066 0 51.442v153.481C0 233.178 23.067 256 51.445 256h211.583c.966 0 1.929-.843 1.929-1.81v-47.458c0-.967-.843-1.81-1.929-1.81H51.445zm309.16 0c0 28.256-23.067 51.078-51.568 51.078V51.321H97.457c-.966 0-1.932-.845-1.932-1.931V1.933C95.525.966 96.37 0 97.458 0h211.579c28.501 0 51.568 22.824 51.568 51.201v153.721z"
            fill="#F2F2F2"
            fillOpacity={0.08}
        />
    </svg>
);

const list = [
    {
        title: "Glassdoor",
        description:
            "Avalie nossa empresa e nos ajude a crescer! Sua opinião faz a diferença e contribui para a contratação de novos Game-Changers.",
        href: "#",
        icon: "",
    },
    {
        title: "Benefícios",
        description:
            "Confira tudo que oferecemos para o seu desenvolvimento e bem-estar.",
        href: "#",
        icon: <User />,
    },
    {
        title: "Buzzhub",
        description:
            "Acesse informações gerais, links e novidades da Concentrix",
        href: "#",
        icon: <User />,
    },
    {
        title: "HSE",
        description:
            "Avalie nossa empresa e ajude a contratar novos Game-Changers",
        href: "#",
        icon: <User />,
    },
    {
        title: "ESG",
        description:
            "Acesse informações gerais, links e novidades da Concentrix",
        href: "#",
        icon: <User />,
    },
] as const;
