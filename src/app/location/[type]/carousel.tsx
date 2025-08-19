import { findBuildings } from "@/app/hooks/findBuildings";
import { CarouselStructures } from "@/components";
import { Carousel as CarouselComponent } from "@/components";


export const Carousel = async () => {
    const location = await findBuildings({});
    return (
        <section className="bg-white w-full">
            <div className="container py-14">
                <CarouselStructures>
                    {location.map(
                        (
                            {
                                names: { short },
                                img: { building_facade },
                                city,
                            },
                            index
                        ) => (
                            <CarouselComponent.UnityList
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
    );
};
