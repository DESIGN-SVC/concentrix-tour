import { AnimationObserver } from "@/components/animation-observer";
import { AboutUs } from "./about-we";
import { Presentation } from "./presentation";

export default async function Home() {
    return (
        <div className="flex-1">
            <Presentation />
            <AboutUs/>
            <AnimationObserver/>
        </div>
    );
}
