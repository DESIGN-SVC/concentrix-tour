import { cx } from "cva";
import concentrix from "@/assets/images/brand-tour.png";
import { Button } from "@/components";
import { Play } from "@/icons";
import Link from "next/link";

export const PresentationVideo = () => {
  return (
    <section
      className={cx(
        "flex relative overflow-hidden",
        "w-full py-14 h-[29.063rem]",

        "rounded-b-4xl",
        "duration-300 ease-in",
        "lg:py-[4.5rem] lg:h-[44.375rem]",

        "after:absolute after:inset-0 ",
        "after:duration-300 after:ease-in",
        "after:bg-[linear-gradient(0deg,rgba(0,61,91,0.70)_0%,rgba(0,61,91,0.70)_100%),linear-gradient(180deg,rgba(0,61,91,0.00)_87.63%,#003D5B_98.96%),radial-gradient(64.55%_63.4%_at_50.13%_43.49%,rgba(0,61,91,0.00)_58.77%,#003D5B_100%)]",
        "dark:after:bg-[linear-gradient(0deg,rgba(31,35,37,0.80)_0%,rgba(31,35,37,0.80)_100%),linear-gradient(180deg,rgba(31,33,35,0.00)_87.63%,#1F2123_98.96%),radial-gradient(64.55%_63.4%_at_50.13%_43.49%,rgba(31,33,35,0.00)_58.77%,#1F2123_100%)]",
      )}
    >
      <video
        autoPlay
        loop
        playsInline
        muted
        className={cx([
          "w-full object-cover h-full",
          "absolute inset-0",
          "rounded-b-4xl",
        ])}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container flex-1 flex z-10" data-animation="up">
        <div
          className={cx(
            "container px-12 py-14 h-full flex-1",
            "border border-blue-500 rounded-4xl",
            "flex justify-between items-center flex-col",
            "lg:pt-[5.563rem]",
          )}
        >
          <img
            src={concentrix.src}
            alt="Concentrix tour"
            className="w-full max-w-3xs  lg:max-w-[35.625rem] mx-auto"
          />
          <Button size={"medium"} className="w-full max-w-52" asChild>
            <Link
              href={{
                query: {
                  modal: "video",
                },
              }}
              scroll={false}
            >
              Assista ao vídeo <Play />
            </Link>
          </Button>
          <Button
            appearance={"ghost"}
            className={cx(
              "text-white",
              "w-full max-w-52",
              "hover:text-blue-900",
              "border-white",
              "max-lg:hidden",
            )}
            asChild
          >
            <a href="#talent-attraction">Saiba mais</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
