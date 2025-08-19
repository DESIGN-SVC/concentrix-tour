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
        <nav className={cx("w-full max-w-[65rem] mx-auto relative")}>
            <div
                className={cx(
                    "py-3 px-6 w-[calc(100%_-2rem)]",
                    "border rounded-3xl border-gray-600 bg-white",
                    "flex items-center justify-between",
                    "duration-300 ease-in",
                    "absolute -top-[50px] z-50 left-4",
                    "lg:left-0 lg:w-full lg:-top-6"
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
                        <Slot className="text-jade">{icon}</Slot>
                        <p className="text-xs font-semibold text-blue-900 lg:text-lg">
                            {text}
                        </p>
                        <Chevron className="size-4 max-lg:hidden" />
                    </a>
                ))}
            </div>
        </nav>
    );
};
