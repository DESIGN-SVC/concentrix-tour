import { SocialActionsPhotos } from "@/app/esg/social-actions-photos";
import { Button } from "@/components/button";
import { cx } from "cva";

export function SocialActions() {
  return (
    <main className={cx("dark:bg-gray-900 duration-300 ease-in")}>
      <div
        className="grid grid-cols-1 min-[864px]:grid-cols-[auto_auto] gap-18 xl:gap-10 container"
        data-animation="up"
      >
        <div className="py-10 md:py-25 h-fit grid flex-col gap-7">
          <h2 className="font-semibold text-blue-900 text-[2rem]/[2.375rem] lg:text-[2.5rem]/[3rem] dark:text-gray-200">
            Voluntariado
          </h2>
          <article className="max-w-[663px] duration-300 ease-in flex flex-col gap-7 text-gray-700 dark:text-white">
            <h5 className="text-blue-900 dark:text-white font-semibold text-xl lg:text-2xl">
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
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=1lGeWYwvR0OOWR95WlGpjBzwDVF1AsNNsvDJQ1bRaSpUOFVTVlVXWjZTSkdXT0JSWDlJM1ZVSU1PVi4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero participar
            </a>
          </Button>
        </div>
        <SocialActionsPhotos />
      </div>
    </main>
  );
}
