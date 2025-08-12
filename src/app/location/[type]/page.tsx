import { findBuildings } from "@/app/hooks/findBuildings";
import { Address } from "./address";
import { redirect } from "next/navigation";
import { Navigation } from "./navigation";
import { BuildingDescription } from "./building-description";

interface LocationPageProps {
    params: Promise<{
        type: string;
    }>;
    searchParams: Promise<{
        building: string;
    }>;
}

export default async function LocationPage({
    params,
    searchParams,
}: LocationPageProps) {
    const { type } = await params;
    const { building } = await searchParams;

    const location = (await findBuildings({ building, city: type })).at(0);

    if (!location) {
        redirect("home");
    }
    console.log(location);

    return (
        <main className="flex-1 w-full">
            <div className="relative">
                <Address
                    background={location.img.building_facade}
                    address={location?.address}
                    city={location.city}
                    title={location.names.long}
                />
                <Navigation />
            </div>

            <BuildingDescription
                title={location.text.title}
                description={location.text.description}
                values={location.values}
            />
        </main>
    );
}
