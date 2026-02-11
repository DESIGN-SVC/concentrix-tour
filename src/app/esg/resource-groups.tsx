import union from "@/assets/images/resource-groups/union.png";
import ability from "@/assets/images/resource-groups/ability.png";
import heritage from "@/assets/images/resource-groups/heritage.png";
import pride from "@/assets/images/resource-groups/pride.png";
import dynamic from "@/assets/images/resource-groups/dynamic.png";
import now from "@/assets/images/resource-groups/now.png";
import women from "@/assets/images/resource-groups/women.png";

export function ResourceGroups() {
  const resourceGroupItems = [
    {
      imageSrc: ability.src,
      title: "ABILITY - Para PCDs",
      text: "Orientado a promover a conscientização e a inclusão de pessoas com deficiência na Concentrix, criando oportunidades iguais de contratação e desenvolvimento, bem como a participação plena em todos os aspectos de nossa empresa.",
    },
    {
      imageSrc: heritage.src,
      title: "Heritage -  Minorias étnico-raciais",
      text: "Focado em promover a criação de redes, o desenvolvimento profissional e as oportunidades de crescimento para as nossas pessoas que fazem parte de minorias étnico-raciais, bem como combater a discriminação.",
    },
    {
      imageSrc: pride.src,
      title: "PRIDE - Para LGBTQ+",
      text: "Dedicado a aumentar a conscientização para criar uma cultura de respeito, pertencimento e celebrar os game-changers que fazem parte da comunidade LGBTQ+. Compromisso de apoiar seu crescimento e desenvolvimento por meio de educação, comunicação e orientação.",
    },
    {
      imageSrc: now.src,
      title: "NOW - Para Mulheres",
      text: "Concentrado em cultivar um ambiente inclusivo que apoie e incentive as mulheres a aprimorar suas habilidades e potencial de liderança por meio de conexão, desenvolvimento, colaboração e discussão.",
    },
  ];

  return (
    <section className="dark:bg-gray-900">
      <div className="py-25 container">
        <div
          className="flex md:flex-row flex-col md:items-center gap-5 md:gap-15"
          data-animation="up"
        >
          <img
            loading="lazy"
            className="w-[105px] md:w-[127px]"
            src={union.src}
            alt=""
          />
          <div className="flex flex-col gap-5 md:gap-3">
            <h2 className="text-[40px] font-semibold text-gray-800 dark:text-gray-200">
              Game-changers Resource Groups - GRG
            </h2>
            <p className="text-blue-900 dark:text-white leading-[120%] font-semibold text-[2rem]">
              Inclusão e pertencimento
            </p>
          </div>
        </div>
        <div className="bg-blue-900 dark:bg-gray-200 w-full h-px my-7.5 md:my-15" />
        <div className="flex flex-col gap-12" data-animation="up-2">
          <h4 className="text-blue-900 leading-[120%] font-semibold text-[2rem] dark:text-white">
            Conheça e participe de nossos grupos de afinidade
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-7.5">
            {resourceGroupItems.map((item, index) => (
              <ResourceGroupItem {...item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

interface ResourceGroupItemProps {
  imageSrc: string;
  title: string;
  text: string;
}

function ResourceGroupItem({ imageSrc, title, text }: ResourceGroupItemProps) {
  return (
    <li className="flex flex-col gap-2.5">
      <img loading="lazy" className="size-22.5" src={imageSrc} alt="" />
      <h5 className="text-2xl text-blue-900 dark:text-white font-semibold">
        {title}
      </h5>
      <p className="text-base text-gray-700 dark:text-gray-200">{text}</p>
    </li>
  );
}
