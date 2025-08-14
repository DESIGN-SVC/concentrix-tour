import { cx } from "cva";

import { StaticImageData } from "next/image";
import { Carousel } from "./carousel";
import { ExpandedImageModal } from "./expanded-image-modal";

type PhotosEnvironments = {
    photos_environments: StaticImageData[];
};

export const PhotosEnvironments = ({
    photos_environments,
}: PhotosEnvironments) => {
    return (
        <>
            <section className={cx("bg-white", "w-full py-14", "lg:py-24")}>
                <article
                    className={cx(
                        "container",
                        "flex flex-col gap-6",
                        "lg:gap-14"
                    )}
                >
                    <h2
                        className={cx(
                            "font-semibold text-[2rem]/[2.4rem] text-blue-900",
                            "lg:text-[2.5rem]/[3rem]"
                        )}
                    >
                        Ambientes
                    </h2>
                    <div className="space-y-8">
                        <Carousel photos_environments={photos_environments} />
                    </div>
                </article>
            </section>
            <ExpandedImageModal photos_environments={photos_environments} />
        </>
    );
};
