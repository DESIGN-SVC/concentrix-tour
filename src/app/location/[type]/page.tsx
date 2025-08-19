import { findBuildings } from "@/app/hooks/findBuildings";

import { redirect } from "next/navigation";
import { Navigation } from "./navigation";
import { BuildingAbout } from "./building-about";
import { Images360 } from "./images-360";
import { PhotosEnvironments } from "./photos-environments";
import { Operations } from "./operations";

import { Address } from "./address";
import { cx } from "cva";
import { Maps } from "./maps";
import { Carousel, CarouselStructures } from "@/components";

interface locationFindOnePageProps {
    params: Promise<{ type: string }>;
    searchParams: Promise<{ building: string }>;
}

export default async function locationFindOnePage({
    params,
    searchParams,
}: locationFindOnePageProps) {
    const { type } = await params;
    const { building } = await searchParams;

    const locationFindOne = (await findBuildings({ building, city: type })).at(
        0
    );
    const locationFindAll = await findBuildings({});

    if (!locationFindOne) {
        redirect("home");
    }

    const addresses = locationFindAll.flatMap((el) => {
        return {
            pin_name: el.names.short,
            coordinates: el.address.coordinates,
            city: el.city,
            active: building === el.names.short,
        };
    });
    const listBuildings = locationFindAll.flatMap((el) => el.names.short);

    return (
        <main className="flex-1 w-full dark:bg-gray-900 duration-300 ease-in" key={locationFindOne.names.short}>
            <Address
                background={locationFindOne.img.building_facade}
                address={locationFindOne?.address.full_address}
                city={locationFindOne.city}
                title={locationFindOne.names.long}
                listBuildings={listBuildings}
            />
            <Navigation
                link_info={`#about-${locationFindOne.text.title}`}
                link_image="#photos_environments"
                link_operation="#operations"
                link_360="#images-360"
            />

            <BuildingAbout
                title={locationFindOne.text.title}
                description={locationFindOne.text.description}
                values={locationFindOne.values}
            />
            <PhotosEnvironments
                photos_environments={locationFindOne.img.environments}
            />
            <Operations model_operations={locationFindOne.model_operations} />
            <Images360 pictures_360={locationFindOne.img.pictures_360} />
            <section className="bg-white w-full dark:bg-gray-900 duration-300 ease-in">
                <div className="container py-14 space-y-8">
                    <h2
                        className={cx(
                            "text-blue-900 font-semibold text-[2rem]/[2.4rem]",
                            'duration-300 ease-in',
                            "lg:text-[2.5rem]/[3rem]",
                            'dark:text-white'
                        )}
                    >
                        Localização
                    </h2>
                    <Maps addresses={addresses} />
                </div>
            </section>
            <section className="bg-white w-full dark:bg-gray-900 duration-300 ease-in">
                <div className="container py-14 space-y-8">
                    <h2
                        className={cx(
                            "text-blue-900 font-semibold text-[2rem]/[2.4rem]",
                            'duration-300 ease-in',
                            "lg:text-[2.5rem]/[3rem]",
                            'dark:text-white'
                        )}
                    >
                        Continue explorando
                    </h2>
                    <CarouselStructures>
                        {locationFindAll.map(
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
                                />
                            )
                        )}
                    </CarouselStructures>
                </div>
            </section>
        </main>
    );
}
