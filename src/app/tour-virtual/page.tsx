
import { findBuildings } from "../hooks/findBuildings";
import { CarouselStructures } from "./carousel/carousel-structures";
import { TalentAttraction } from "./talent-attraction";

export default async function TourVirtual() {
    const listStructures = await  findBuildings({})
    return (
        <div className="flex-1">
            <TalentAttraction />
            <CarouselStructures listStructures={listStructures}/>
        </div>
    );
}
