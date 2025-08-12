import { Building, Chevron } from "@/icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cx } from "cva";
import { Button } from "./button";

export const Dropdown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button
                    size={"small"}
                    appearance={"ghost"}
                    className={cx(
                        "flex items-center gap-2",
                        "text-white",
                        " border-gray-600 hover:text-blue-900"
                    )}
                    aria-label="Customise options"
                >
                    <Building />
                    <span className="text-xs font-semibold lg:hidden">Prédio</span>
                    <span className="text-xs font-semibold max-lg:hidden">Escolha o prédio</span>
                    <Chevron className="size-4.5 rotate-90" />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    sideOffset={10}
                    className={cx("bg-white rounded-3xl", "px-6 py-4")}
                >
                    <DropdownMenu.Item>New Tab</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
