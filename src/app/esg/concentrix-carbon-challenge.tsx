import carbonChallengeImg from "@/assets/images/cx-carbon-logo.png";
import handPlant from "@/assets/images/social-actions/hand-plant.png";
import { ReactNode } from "react";
import { actionItens } from "./actionItens";
import { Button } from "@/components/button";

export function ConcentrixCarbonChallenge() {
  return (
    <section className="bg-blue-900 overflow-hidden relative w-full py-14 md:py-25 -mt-90 min-[864px]:-mt-82 rounded-t-[48px]">
      <div className="container flex z-20 flex-col gap-10">
        <div
          className="flex flex-col z-20 gap-10 max-w-110 xl:max-w-148"
          data-animation="up"
        >
          <img
            className="w-87"
            src={carbonChallengeImg.src}
            alt="Logotipo concentrix com foco no combate ao carbono"
          />
          <article className="flex flex-col gap-5">
            <h2 className="font-semibold max-w-98 text-white text-[2rem]/[2.375rem] lg:text-[2.5rem]/[3rem] dark:text-white">
              Conheça o novo e aprimorado portal.
            </h2>
            <p className="text-white font-normal">
              Game-Changer, apresentamos a você o novo portal do Carbon
              Challenge, uma iniciativa que tem como objetivo nos ajudar a
              conhecer as ações cotidianas podendo adotar para ter um estilo de
              vida com baixo de teor de emissão de carbono por meio de um site.
            </p>
          </article>
          <div className="bg-seafoam-teal-30 rounded-[40px] p-7.5">
            <span className="text-blue-900 font-bold text-lg leading-[140%]">
              Motive-se e participe do premio que temos para você: <br />{" "}
              <span className="text-xl leading-[130%] font-medium">
                Lojas americas giftcards
              </span>
            </span>
          </div>
        </div>
        <div
          className="w-full pt-10 z-20 border-t border-t-seafoam-teal-30 flex flex-col gap-12"
          data-animation="up-3"
        >
          <h4 className="text-white leading-[120%] font-semibold text-[2rem]">
            Veja as categorias e ações que você pode realizar:
          </h4>
          <ul className="grid grid-cols-2 md:flex justify-between gap-5">
            {actionItens.map((item, index) => (
              <ActionItem {...item} key={index} />
            ))}
          </ul>
        </div>
        <div className="flex items-center z-20 justify-center mt-8">
          <Button
            className="w-full font-semibold max-w-72 px-6 py-4"
            appearance={"secondary"}
          >
            <a href="#carousel-structures">Acesse o Carbon Challange</a>
          </Button>
        </div>
      </div>
      <img
        className="absolute hidden md:flex top-16 z-10 w-[600px] h-[653px] xl:w-[656px] xl:h-[723px] -right-14"
        src={handPlant.src}
        alt=""
      />
    </section>
  );
}

interface ActionItemProps {
  icon: ReactNode;
  title: string;
}

function ActionItem({ icon, title }: ActionItemProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-6.5">
      {icon}
      <span className="text-white text-lg font-bold">{title}</span>
    </li>
  );
}
