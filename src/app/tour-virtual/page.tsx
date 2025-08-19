import { Carousel, CarouselStructures } from "@/components";
import { findBuildings } from "../hooks/findBuildings";

import { TalentAttraction } from "./talent-attraction";

import { cx } from "cva";

export default async function TourVirtual() {
    const listStructures = await findBuildings({});

    return (
        <div className="flex-1">
            <TalentAttraction />
            <section
                id="carousel-structures"
                className={cx(
                    "w-full pb-[4.5rem]",
                    "bg-white",
                    "duration-300 ease-in",
                    "dark:bg-gray-900"
                )}
            >
                <div className="container">
                    <aside
                        className={cx(
                            "py-6",
                            "bg-blue-900 rounded-3xl",
                            "flex flex-col gap-12",
                            "lg:py-12",
                            "dark:bg-gray-800"
                        )}
                    >
                        <header className="space-y-2 px-6 lg:px-14">
                            <h2
                                className={cx(
                                    "text-white font-semibold text-[2rem]/[2.4rem]",
                                    "lg:text-[2.5rem]/[3rem]"
                                )}
                            >
                                Nossas estruturas
                            </h2>
                            <p
                                className={cx(
                                    "text-white text-sm",
                                    "lg:max-w-[29rem]"
                                )}
                            >
                                Passeie por nossas estruturas e descubra como
                                cada espaço foi pensado para conectar pessoas,
                                valorizar nossos colaboradores e transformar o
                                presente.
                            </p>
                        </header>
                        <CarouselStructures>
                            {listStructures.map(
                                (
                                    {
                                        names: { short },
                                        img: { building_facade },
                                        city,
                                    },
                                    index
                                ) => (
                                    <Carousel.UnityList
                                        key={index}
                                        link={`/location/${city}?building=${short}`}
                                        title={short}
                                        background_img={building_facade}
                                        className={cx({
                                            "ml-8 lg:ml-14": index === 0,
                                            "mr-8 lg:mr-14":
                                                index ===
                                                listStructures.length - 1,
                                        })}
                                    />
                                )
                            )}
                        </CarouselStructures>
                    </aside>
                </div>
            </section>
        </div>
    );
}
