import { AnimationObserver } from "@/components/animation-observer";
import { AboutUs } from "./about-we";
import { Presentation } from "./presentation";
import { ScrollToTopButton } from "@/components/scroll-to-top";

export default async function Home() {
  return (
    <div className="flex-1 relative">
      <Presentation />
      <AboutUs />
      <AnimationObserver />
      <ScrollToTopButton />
    </div>
  );
}
