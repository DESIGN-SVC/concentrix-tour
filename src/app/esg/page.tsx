import { Button } from "@/components/button";
import { AddressButtonRouter } from "../location/[type]/address/address-button-router";
import openFieldBg from "@/assets/images/open-field-bg.png";
import { ConcentrixCarbonChallenge } from "@/app/esg/concentrix-carbon-challenge";
import { SocialActionsPhotos } from "@/app/esg/social-actions-photos";

export default async function ESG() {
  return (
    <>
      <header className="relative z-0">
        <img
          alt="Campo de grama aberto"
          className="absolute left-0 object-cover object-[55%_65%] top-0 w-full h-full z-10 opacity-70"
          src={openFieldBg.src}
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#1F2123]"></div>

        <div className="absolute inset-0 z-0 bg-blue-900/70 md:opacity-100 opacity-0"></div>

        <div className="container relative flex flex-col gap-7.5 z-10 py-25">
          <AddressButtonRouter />
          <h1 className="uppercase text-white font-semibold text-[2.5rem]/[3rem] lg:font-bold lg:text-[3.5rem]/[4.2rem]">
            Esg
          </h1>
        </div>
      </header>

      <main className="grid grid-cols-[auto_auto] gap-25 xl:gap-10 container">
        <div className="py-25 h-fit grid flex-col gap-7">
          <h2 className="font-semibold text-blue-900 text-[2rem]/[2.375rem] lg:text-[2.5rem]/[3rem] dark:text-white">
            Ações sociais
          </h2>
          <article className="max-w-[663px] flex flex-col gap-7 text-gray-700">
            <h5 className="text-blue-900 font-semibold text-xl lg:text-2xl">
              Sabia que na Concentrix temos ações sociais e ambientais abertas a
              todas as pessoas, inclusive sua família e amigos?
            </h5>
            <p>
              Criar uma{" "}
              <span className="font-bold">
                hortinha comunitária, dar carinho a cães e gatos resgatados,
                cozinhar refeições para quem precisa,
              </span>{" "}
              são só alguns exemplos de tudo que realizamos. <br />
              Quer saber tudo que rola, conferir as datas das próximas
              atividades e se inscrever?
            </p>
            <p>
              <span className="font-bold">Clique aqui</span> e preencha o
              formulário para participar da nossa rede de multiplicadores do
              bem!
            </p>
          </article>
          <Button
            className="w-full font-semibold max-w-72 px-6 py-4"
            appearance={"secondary"}
            asChild
          >
            <a href="#carousel-structures">Quero participar</a>
          </Button>
        </div>
        <SocialActionsPhotos />
      </main>
      <ConcentrixCarbonChallenge />
    </>
  );
}
