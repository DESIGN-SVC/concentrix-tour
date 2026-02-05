// src/app/location/[type]/location-client.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Navigation } from "./navigation";
import { BuildingAbout } from "./building-about";
import { Images360 } from "./images-360";
import { PhotosEnvironments } from "./photos-environments";
import { Operations } from "./operations";
import { Address } from "./address";
import { cx } from "cva";
import { Maps } from "./maps";
import { Carousel, CarouselStructures } from "@/components";
import { AnimationObserver } from "@/components/animation-observer";
import { useEffect, useState } from "react";
import { Building } from "@/lib/data";

interface LocationClientProps {
  city: string;
  allBuildings: Building[];
}

export function LocationClient({ city, allBuildings }: LocationClientProps) {
  const searchParams = useSearchParams();
  const building = searchParams.get("building");

  const [locationFindOne, setLocationFindOne] = useState<Building | null>(null);

  useEffect(() => {
    const found = allBuildings.find(
      (b) => b.names.short === building && b.city === city,
    );

    if (!found && building) {
      window.location.href = "/home";
      return;
    }

    setLocationFindOne(
      found || allBuildings.find((b) => b.city === city) || null,
    );
  }, [building, city, allBuildings]);

  if (!locationFindOne) {
    return <div>Loading...</div>;
  }

  const addresses = allBuildings.map((el) => ({
    pin_name: el.names.short,
    coordinates: el.address.coordinates,
    city: el.city,
    active: building === el.names.short,
  }));

  const listBuildings = allBuildings.map((el) => el.names.short);

  return (
    <main
      className="flex-1 w-full dark:bg-gray-900 duration-300 ease-in"
      key={locationFindOne.names.short}
    >
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

      <section
        className="bg-white w-full dark:bg-gray-900 duration-300 ease-in"
        data-animation="up-2"
      >
        <div className="container py-14 space-y-8">
          <h2
            className={cx(
              "text-blue-900 font-semibold text-[2rem]/[2.4rem]",
              "duration-300 ease-in",
              "lg:text-[2.5rem]/[3rem]",
              "dark:text-white",
            )}
          >
            Localização
          </h2>
          <Maps addresses={addresses} />
        </div>
      </section>

      <section
        className="bg-white w-full dark:bg-gray-900 duration-300 ease-in"
        data-animation="up-3"
      >
        <div className="container py-14 space-y-8">
          <h2
            className={cx(
              "text-blue-900 font-semibold text-[2rem]/[2.4rem]",
              "duration-300 ease-in",
              "lg:text-[2.5rem]/[3rem]",
              "dark:text-white",
            )}
          >
            Continue explorando
          </h2>
          <CarouselStructures>
            {allBuildings.map(
              (
                { names: { short }, img: { building_facade }, city }: Building,
                index: number,
              ) => (
                <Carousel.UnityList
                  key={index}
                  link={`/location/${city}?building=${short}`}
                  title={short}
                  background_img={building_facade}
                />
              ),
            )}
          </CarouselStructures>
        </div>
      </section>
      <AnimationObserver />
    </main>
  );
}
