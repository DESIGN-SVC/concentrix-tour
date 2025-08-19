
import { Counter } from "@/utils";
import { cx } from "cva";

type BuildingAboutProps = {
    title: string;
    description: string;
    values: {
        value: number;
        description: string;
    }[];
};
export const BuildingAbout = ({
    title,
    description,
    values,
}: BuildingAboutProps) => (
    <section
    id={`about-${title}`}
        className={cx(
            "w-full py-20 pb-14",
            "bg-white",
            "lg:pt-[9.25rem] lg:pb-[6.25rem]"
        )}
    >
        <div
            className={cx(
                "container",
                "flex flex-col gap-12",
                "lg:flex-row lg:justify-between"
            )}
        >
            <header className={cx("flex flex-col gap-4", "lg:gap-8")}>
                <h2
                    className={cx(
                        "font-semibold text-[2rem]/[2.4rem] text-blue-900",
                        "w-full max-w-80",
                        "lg:text-[2.5rem]/[3rem]"
                    )}
                >
                    {title}
                </h2>
                <p className={cx("text-gray-700", "lg:max-w-96")}>
                    {description}
                </p>
            </header>
            <ul
                className={cx("grid grid-cols-2 gap-4", "lg:max-w-lg lg:gap-8")}
            >
                {values?.map(({ value, description }, index) => (
                    <li
                        key={description}
                        className={cx(
                            "p-6",
                            "rounded-3xl",
                            "flex flex-col gap-2",
                            "lg:gap-3 lg:p-8 lg:justify-between",
                            {
                                "bg-pink-700 text-white col-span-2":
                                    index === 0,
                                "bg-seafoam-teal-30 text-blue-900 row-start-2":
                                    index === 1,
                                "bg-jade text-blue-50 row-start-2":
                                    index === 2,
                            }
                        )}
                    >
                        <h5
                            className={cx(
                                "font-semibold text-[2rem]/[2.4rem]",
                                "lg:text-5xl"
                            )}
                        >
                            <Counter endValue={value} duration={2000} />
                            {value >= 1000 && "K"}
                        </h5>
                        <p
                            className={cx(
                                "font-semibold text-sm",
                                "lg:text-base"
                            )}
                        >
                            {description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);
