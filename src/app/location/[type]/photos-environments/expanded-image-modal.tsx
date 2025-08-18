"use client";
import { useRouter, useSearchParams } from "next/navigation";
import * as Modal from "@radix-ui/react-dialog";
import { cx } from "cva";
import { X } from "@/icons/x";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ExpandedImageModalProps = {
    photos_environments: StaticImageData[];
};

export const ExpandedImageModal = ({
    photos_environments,
}: ExpandedImageModalProps) => {
    const params = useSearchParams();
    const isModalOpen = params.get("modal") === "photos-environments";
    const imageIndex = Number(params.get("index"));

    const router = useRouter();

    const handleClosedModal = () => {
        router.back();
    };

    return (
        <Modal.Root open={isModalOpen} onOpenChange={handleClosedModal}>
            <Modal.Portal>
                <Modal.Overlay
                    className={cx("fixed inset-0 z-50", "bg-black/50")}
                />
                <Modal.Content
                    className={cx(
                        "container p-2.5",
                        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]",
                        "bg-transparent"
                    )}
                    aria-describedby={undefined}
                >
                    <Modal.Title hidden>Imagem</Modal.Title>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <Modal.Close
                            className={cx(
                                "text-white",
                                "absolute right-0 -top-10",
                                "cursor-pointer",
                                "duration-300 ease-in",
                                "hover:text-white/50"
                            )}
                        >
                            <X />
                        </Modal.Close>
                        <Image
                            priority
                            src={photos_environments[imageIndex]}
                            alt=""
                            className={cx(
                                "rounded-4xl",
                                "border border-blue-300"
                            )}
                        />
                    </motion.div>
                </Modal.Content>
            </Modal.Portal>
        </Modal.Root>
    );
};
