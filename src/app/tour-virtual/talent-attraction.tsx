import { Button } from "@/components";
import { cx } from "cva";

import peopleOne from "@/assets/images/people-1.png";
import peopleTwo from "@/assets/images/people-2.png";
import peopleThree from "@/assets/images/people-3.png";
import peopleFour from "@/assets/images/people-4.png";
import Image from "next/image";

export const TalentAttraction = () => {
  const listCareers = ["Games", "Telecomunicaçao", "Zeus", "Projetos"];
  const peoplesImg = [peopleOne, peopleTwo, peopleThree, peopleFour];

  return (
    <section
      id="talent-attraction"
      className={cx(
        "w-full py-14",
        "bg-white",
        "lg:py-[7.5rem]",
        "duration-300 ease-in",
        "dark:bg-gray-900",
      )}
    >
      <div className={cx("container", "grid", "lg:grid-cols-2 ")}>
        <header
          className="flex flex-col gap-8 lg:justify-center"
          data-animation="up"
        >
          <h2
            className={cx(
              "font-semibold text-blue-900 text-[2rem]/[2.375rem]",
              "duration-300 ease-in",
              "lg:text-[2.5rem]/[3rem]",
              "dark:text-white",
            )}
          >
            Um espaço para crescer e construir sua carreira
          </h2>
          <ul className={cx("flex flex-wrap gap-2")}>
            {listCareers.map((el) => (
              <li
                key={el}
                className={cx(
                  "px-3 py-1.5",
                  "text-gray-600 font-semibold text-xs",
                  "border rounded-full",
                  "duration-300 ease-in",
                  "dark:text-gray-400",
                )}
              >
                {el}
              </li>
            ))}
          </ul>
        </header>
        <article
          className="mt-12 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:mb-auto"
          data-animation="up-2"
        >
          <h5
            className={cx(
              "font-semibold text-gray-700 text-2xl",
              "duration-300 ease-in",
              "lg:text-[2rem]",

              "dark:text-white",
            )}
          >
            Conecte-se ao futuro
          </h5>
          <p
            className={cx(
              "mt-3 text-gray-700",
              "duration-300 ease-in",

              "dark:text-gray-200",
            )}
          >
            A Concentrix é uma empresa global de tecnologia e serviços
            totalmente integrados. No Brasil, contamos com mais de 22 mil
            colaboradores e oferecemos jornadas completas de ponta a ponta,
            impulsionando algumas das marcas mais reconhecidas do mundo. No
            Brasil atuamos em diversas regiões, com unidades em Barueri,
            Curitiba, Fortaleza, Londrina, Ponta Grossa e São Paulo.
          </p>
          <Button
            className="w-full mt-8 max-w-72"
            appearance={"secondary"}
            asChild
          >
            <a href="#carousel-structures">Conheça as estruturas</a>
          </Button>
        </article>
        <ul
          data-animation="up-3"
          className={cx(
            "h-[500px] w-full max-w-[21.25rem] mx-auto mt-6",
            "overflow-hidden relative",
            "grid grid-cols-2 grid-rows-3 justify-between gap-x-4",

            "after:absolute after:top-0 after:left-0 after:z-10",
            "after:w-full after:h-full",
            "after:bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_23.5%,rgba(255,255,255,0.00)_73.5%,#FFF_100%)]",
            "after:duration-300 after:ease-in",

            "lg:row-span-2 lg:col-start-2",
            "dark:after:bg-[linear-gradient(180deg,#1F2123_0%,rgba(31,33,35,0.00)_23.5%,rgba(31,33,35,0.00)_73.5%,#1F2123_100%)]",
          )}
        >
          {peoplesImg.map((el, index) => (
            <li
              key={index}
              className={cx("overflow-hidden relative", "w-full max-w-40", {
                "bg-blue-900 order-1 rounded-b-full": index === 0,
                "bg-orange-400 order-3 col-start-1 row-start-2": index === 1,
                "bg-pink-700 order-2 row-start-1": index === 2,
                "bg-jade order-4 rounded-t-full row-start-3": index === 3,
                "h-[19.5rem] rounded-full row-span-2": [1, 2].includes(index),
                "h-[9.75rem]": [0, 3].includes(index),
                "col-start-2": [2, 3].includes(index),
                "mt-auto": [1, 3].includes(index),
              })}
            >
              <img
                src={el.src}
                alt=""
                className={cx("absolute", "w-full h-full", {
                  "object-cover": [0, 1, 2].includes(index),
                  "bottom-[-50px]": [1, 2, 3].includes(index),
                  "scale-[170%] top-[-10px] -translate-x-10": index === 0,
                  "scale-110": index === 1,
                  "scale-150 object-contain": index === 3,
                })}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
