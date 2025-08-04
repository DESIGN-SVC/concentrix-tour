import { AboutUs } from "./about-we";
import { Presentation } from "./presentation";

export default async function Home() {
    return (
        <div className="flex-1">
            <Presentation />
            <AboutUs/>
        </div>
    );
}
