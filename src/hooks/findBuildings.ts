import { Building, buildings } from "@/lib/data";

export async function findBuildings(params: { city?: string; building?: string }): Promise<Building[]> {
    const { city, building } = params;

    if (!city && !building) {
        return buildings;
    }

    let filteredBuildings = buildings;

    if (city) {
        filteredBuildings = filteredBuildings.filter(
            (b) => b.city.toLowerCase() === city.toLowerCase()
        );
    }

    if (building) {
        filteredBuildings = filteredBuildings.filter(
            (b) => b.names.short.toLowerCase() === building.toLowerCase()
        );
    }

    return filteredBuildings;
}