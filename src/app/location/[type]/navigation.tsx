import { Picture, Info, Polygon, Globe, Chevron } from "@/icons";
import { Slot } from "@radix-ui/react-slot";
import { cx } from "cva";

type NavigationProps = {
    link_info: string;
    link_image: string;
    link_operation: string;
    link_360: string;
};

export const Navigation = ({
    link_360,
    link_image,
    link_info,
    link_operation,
}: NavigationProps) => {
    const listLinks = [
        {
            icon: <Info />,
            text: "Sobre",
            link: link_info,
        },
        {
            icon: <Picture />,
            text: "Fotos",
            link: link_image,
        },
        {
            icon: <Polygon />,
            text: "Operações",
            link: link_operation,
        },
        {
            icon: <Globe />,
            text: "360°",
            link: link_360,
        },
    ];
    return (
        <nav
        data-animation="up-2"
            className={cx(
                "container",
                "sticky top-14 z-40 left-4 -translate-y-10",
                "duration-300 ease-in"
            )}
        >
            <div
                className={cx(
                    "py-3 px-6 mx-auto w-full",
                    "border rounded-3xl border-gray-600 bg-white shadow-lg",
                    "flex items-center justify-between",
                    "duration-300 ease-in",
                    "dark:bg-gray-800"
                )}
            >
                {listLinks.map(({ text, icon, link }) => (
                    <a
                        href={link}
                        key={text}
                        className={cx(
                            "flex flex-col items-center gap-1",
                            "cursor-pointer",
                            "duration-300 ease-in",
                            "lg:flex-row lg:gap-3"
                        )}
                    >
                        <Slot
                            className={cx(
                                "text-jade",
                                "duration-300 ease-in",
                                "dark:text-white"
                            )}
                        >
                            {icon}
                        </Slot>
                        <p
                            className={cx(
                                "text-xs font-semibold text-blue-900",
                                "duration-300 ease-in",
                                "lg:text-lg",
                                "dark:text-white"
                            )}
                        >
                            {text}
                        </p>
                        <Chevron
                            className={cx(
                                "size-4 max-lg:hidden",
                                "duration-300 ease-in",
                                "dark:text-white"
                            )}
                        />
                    </a>
                ))}
            </div>
        </nav>
    );
};
