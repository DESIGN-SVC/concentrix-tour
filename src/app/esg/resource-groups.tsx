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
      text: "PROMOVER A CONSCIENTIZAÇÃO E A INCLUSÃO DE PESSOAS COM DEFICIÊNCIA na Concentrix, criando igualdade nas oportunidades de recrutamento e contratação, de progredir e crescer, e de participar plenamente em todos os aspectos de nosso negócio.",
    },
    {
      imageSrc: now.src,
      title: "NOW - Para Mulheres",
      text: "CULTIVAR UM AMBIENTE INCLUSIVO que apoie e incentive as mulheres a aprimorar suas habilidades e seu potencial de liderança por meio de conexão, desenvolvimento, colaboração e troca.",
    },
    {
      imageSrc: pride.src,
      title: "PRIDE - Para LGBTQ+",
      text: "CELEBRAR NOSSA COMUNIDADE LGBTQ+ e fornecer os recursos necessários para o crescimento e o desenvolvimento por meio de educação, comunicação e orientação.",
    },
    {
      imageSrc: dynamic.src,
      title: "DYNAMIC - Para Neurodiversos",
      text: "FOMENTAR UMA COMUNIDADE DE APOIO EM QUE OS GAME-CHANGERS NEURODIVERSOS E ALIADOS possam se conectar, compartilhar ideias e orientar uns aos outros.",
    },
    {
      imageSrc: heritage.src,
      title: "Heritage -  Minorias étnico-raciais",
      text: "FOMENTAR REDES DE RELACIONAMENTO, DESENVOLVIMENTO PROFISSIONAL, orientação e oportunidades de liderança na Concentrix para profissionais negros e indígenas ao redor do mundo e, ao mesmo tempo, criar uma consciência corporativa sobre a causa no local de trabalho.",
    },
    {
      imageSrc: women.src,
      title: "DYNAMIC - Para Neurodiversos",
      text: "CULTIVAR UM AMBIENTE INCLUSIVO que apoie e incentive a equipe de tecnologia a aprimorar suas habilidades e seu potencial de liderança.",
    },
  ];

  const pillars = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clipPath="url(#clip0_1905_13024)">
            <path
              d="M28 26H4V6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 9L16 18L12 14L4 22"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 14V9H20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1905_13024">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Empregar",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M22.0002 29C22.0002 29.2652 21.8948 29.5196 21.7073 29.7071C21.5197 29.8947 21.2654 30 21.0002 30H11.0002C10.7349 30 10.4806 29.8947 10.2931 29.7071C10.1055 29.5196 10.0002 29.2652 10.0002 29C10.0002 28.7348 10.1055 28.4804 10.2931 28.2929C10.4806 28.1054 10.7349 28 11.0002 28H21.0002C21.2654 28 21.5197 28.1054 21.7073 28.2929C21.8948 28.4804 22.0002 28.7348 22.0002 29ZM27.0002 13C27.0045 14.6671 26.6279 16.3131 25.8991 17.8124C25.1704 19.3117 24.1087 20.6248 22.7952 21.6513C22.5496 21.8395 22.3502 22.0815 22.2125 22.3585C22.0747 22.6356 22.0021 22.9406 22.0002 23.25V24C22.0002 24.5305 21.7894 25.0392 21.4144 25.4142C21.0393 25.7893 20.5306 26 20.0002 26H12.0002C11.4697 26 10.961 25.7893 10.586 25.4142C10.2109 25.0392 10.0002 24.5305 10.0002 24V23.25C9.99996 22.9443 9.92965 22.6426 9.79465 22.3683C9.65965 22.094 9.46355 21.8542 9.22141 21.6675C7.91133 20.6472 6.85049 19.3423 6.11916 17.8515C5.38783 16.3607 5.00518 14.723 5.00016 13.0625C4.96766 7.10377 9.78266 2.14377 15.7352 2.00002C17.2019 1.96467 18.6608 2.22309 20.0261 2.76004C21.3914 3.297 22.6355 4.10165 23.6852 5.12663C24.7349 6.15162 25.5689 7.37623 26.1382 8.72838C26.7075 10.0805 27.0006 11.5329 27.0002 13ZM25.0002 13C25.0005 11.7996 24.7607 10.6112 24.2949 9.50488C23.8291 8.39853 23.1466 7.39654 22.2877 6.55791C21.4288 5.71927 20.4108 5.06094 19.2936 4.62165C18.1765 4.18237 16.9827 3.97101 15.7827 4.00002C10.9077 4.11502 6.97391 8.17377 7.00016 13.0488C7.00464 14.407 7.31802 15.7465 7.9166 16.9657C8.51518 18.1849 9.38327 19.2521 10.4552 20.0863C10.937 20.4608 11.3267 20.9406 11.5945 21.489C11.8623 22.0374 12.001 22.6398 12.0002 23.25V24H15.0002V18.4138L11.2927 14.7075C11.105 14.5199 10.9996 14.2654 10.9996 14C10.9996 13.7347 11.105 13.4802 11.2927 13.2925C11.4803 13.1049 11.7348 12.9995 12.0002 12.9995C12.2655 12.9995 12.52 13.1049 12.7077 13.2925L16.0002 16.5863L19.2927 13.2925C19.3856 13.1996 19.4959 13.1259 19.6173 13.0756C19.7387 13.0253 19.8688 12.9995 20.0002 12.9995C20.1316 12.9995 20.2617 13.0253 20.3831 13.0756C20.5045 13.1259 20.6148 13.1996 20.7077 13.2925C20.8006 13.3854 20.8743 13.4957 20.9246 13.6171C20.9748 13.7385 21.0007 13.8686 21.0007 14C21.0007 14.1314 20.9748 14.2615 20.9246 14.3829C20.8743 14.5043 20.8006 14.6146 20.7077 14.7075L17.0002 18.4138V24H20.0002V23.25C20.0013 22.638 20.1423 22.0343 20.4125 21.4851C20.6826 20.9359 21.0748 20.4557 21.5589 20.0813C22.634 19.2411 23.503 18.1663 24.0994 16.9391C24.6958 15.7118 25.0039 14.3645 25.0002 13Z"
            fill="black"
          />
        </svg>
      ),
      title: "Viabilizar",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M9 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H8.465L10.1675 13.445C10.2588 13.3078 10.3825 13.1953 10.5278 13.1175C10.673 13.0397 10.8352 12.999 11 12.999C11.1648 12.999 11.327 13.0397 11.4722 13.1175C11.6175 13.1953 11.7412 13.3078 11.8325 13.445L15 18.195L16.1675 16.445C16.2589 16.308 16.3827 16.1957 16.5279 16.1181C16.6732 16.0405 16.8353 15.9999 17 16H20C20.2652 16 20.5196 16.1054 20.7071 16.2929C20.8946 16.4804 21 16.7348 21 17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17.535L15.8325 20.555C15.7412 20.6922 15.6175 20.8047 15.4722 20.8825C15.327 20.9603 15.1648 21.001 15 21.001C14.8352 21.001 14.673 20.9603 14.5278 20.8825C14.3825 20.8047 14.2588 20.6922 14.1675 20.555L11 15.8025L9.8325 17.5525C9.74139 17.6899 9.6177 17.8027 9.47246 17.8808C9.32721 17.9589 9.1649 17.9998 9 18ZM22.25 5C19.6688 5 17.4088 6.11 16 7.98625C14.5912 6.11 12.3313 5 9.75 5C7.69528 5.00232 5.72539 5.81958 4.27248 7.27248C2.81958 8.72539 2.00232 10.6953 2 12.75C2 12.8437 2 12.9375 2 13.0312C2.00829 13.2965 2.12159 13.5475 2.31499 13.7292C2.50839 13.9109 2.76603 14.0083 3.03125 14C3.29647 13.9917 3.54753 13.8784 3.7292 13.685C3.91088 13.4916 4.00829 13.234 4 12.9687C4 12.8962 4 12.8225 4 12.75C4.00198 11.2256 4.60842 9.76423 5.68633 8.68633C6.76423 7.60842 8.22561 7.00198 9.75 7C12.1812 7 14.2225 8.295 15.075 10.375C15.1503 10.5584 15.2785 10.7153 15.4432 10.8257C15.6079 10.9361 15.8017 10.995 16 10.995C16.1983 10.995 16.3921 10.9361 16.5568 10.8257C16.7215 10.7153 16.8497 10.5584 16.925 10.375C17.7775 8.29125 19.8188 7 22.25 7C23.7744 7.00198 25.2358 7.60842 26.3137 8.68633C27.3916 9.76423 27.998 11.2256 28 12.75C28 19.4512 18.28 25.5187 16 26.85C14.6462 26.0612 10.6712 23.6 7.665 20.3237C7.57619 20.2269 7.46918 20.1485 7.35007 20.093C7.23096 20.0375 7.10209 20.006 6.97081 20.0003C6.83953 19.9946 6.70842 20.0149 6.58496 20.0598C6.46149 20.1048 6.3481 20.1737 6.25125 20.2625C6.1544 20.3513 6.07599 20.4583 6.0205 20.5774C5.965 20.6965 5.93352 20.8254 5.92783 20.9567C5.92214 21.088 5.94237 21.2191 5.98735 21.3425C6.03233 21.466 6.10119 21.5794 6.19 21.6762C10.0863 25.9262 15.3062 28.7612 15.5262 28.88C15.6719 28.9583 15.8346 28.9993 16 28.9993C16.1654 28.9993 16.3281 28.9583 16.4737 28.88C17.0262 28.5825 30 21.5 30 12.75C29.9977 10.6953 29.1804 8.72539 27.7275 7.27248C26.2746 5.81958 24.3047 5.00232 22.25 5Z"
            fill="black"
          />
        </svg>
      ),
      title: "Engajar",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M25.7812 10.3125H23.7188V8.25C23.7178 7.41252 23.462 6.59517 22.9853 5.9066C22.5086 5.21804 21.8335 4.69089 21.05 4.39524C20.2664 4.09958 19.4114 4.04943 18.5987 4.25146C17.7859 4.45348 17.0539 4.8981 16.5 5.52621C15.9721 4.92785 15.2819 4.49546 14.5132 4.28144C13.7445 4.06741 12.9302 4.08095 12.169 4.32039C11.4078 4.55984 10.7324 5.01492 10.2247 5.63049C9.71693 6.24606 9.39862 6.99568 9.30832 7.78852C8.68182 7.42043 7.9692 7.22437 7.24258 7.22017C6.51597 7.21597 5.80113 7.40379 5.17042 7.76461C4.5397 8.12543 4.01549 8.64645 3.65083 9.27495C3.28616 9.90345 3.09399 10.6171 3.09375 11.3438V16.5C3.09375 20.0556 4.50619 23.4655 7.02035 25.9797C9.53451 28.4938 12.9444 29.9062 16.5 29.9062C20.0556 29.9062 23.4655 28.4938 25.9797 25.9797C28.4938 23.4655 29.9062 20.0556 29.9062 16.5V14.4375C29.9062 13.3435 29.4717 12.2943 28.6981 11.5207C27.9245 10.7471 26.8753 10.3125 25.7812 10.3125ZM19.5938 6.1875C20.1408 6.1875 20.6654 6.4048 21.0522 6.79159C21.439 7.17839 21.6562 7.70299 21.6562 8.25V10.3125H17.5312V8.25C17.5312 7.70299 17.7485 7.17839 18.1353 6.79159C18.5221 6.4048 19.0467 6.1875 19.5938 6.1875ZM11.3438 8.25C11.3438 7.70299 11.561 7.17839 11.9478 6.79159C12.3346 6.4048 12.8592 6.1875 13.4062 6.1875C13.9533 6.1875 14.4779 6.4048 14.8647 6.79159C15.2515 7.17839 15.4688 7.70299 15.4688 8.25V13.4063C15.4688 13.9533 15.2515 14.4779 14.8647 14.8647C14.4779 15.2515 13.9533 15.4688 13.4062 15.4688C12.8592 15.4688 12.3346 15.2515 11.9478 14.8647C11.561 14.4779 11.3438 13.9533 11.3438 13.4063V8.25ZM5.15625 11.3438C5.15625 10.7967 5.37355 10.2721 5.76034 9.88534C6.14714 9.49855 6.67174 9.28125 7.21875 9.28125C7.76576 9.28125 8.29036 9.49855 8.67716 9.88534C9.06395 10.2721 9.28125 10.7967 9.28125 11.3438V13.4063C9.28125 13.9533 9.06395 14.4779 8.67716 14.8647C8.29036 15.2515 7.76576 15.4688 7.21875 15.4688C6.67174 15.4688 6.14714 15.2515 5.76034 14.8647C5.37355 14.4779 5.15625 13.9533 5.15625 13.4063V11.3438ZM27.8438 16.5C27.8437 19.4666 26.6815 22.3152 24.6062 24.4352C22.5309 26.5551 19.7077 27.7778 16.7418 27.841C13.7758 27.9042 10.9031 26.803 8.73932 24.7734C6.57559 22.7438 5.29303 19.9474 5.16656 16.9834C5.99086 17.4575 6.95388 17.6315 7.89197 17.476C8.83006 17.3204 9.68535 16.8448 10.3125 16.13C11.0232 16.9399 12.0232 17.4387 13.0976 17.5195C14.1721 17.6002 15.2354 17.2564 16.0591 16.5619C16.4301 17.1767 16.9542 17.6848 17.5802 18.0366C16.9167 18.6162 16.385 19.3311 16.0208 20.1334C15.6566 20.9356 15.4684 21.8065 15.4688 22.6875C15.4688 22.961 15.5774 23.2233 15.7708 23.4167C15.9642 23.6101 16.2265 23.7188 16.5 23.7188C16.7735 23.7188 17.0358 23.6101 17.2292 23.4167C17.4226 23.2233 17.5312 22.961 17.5312 22.6875C17.5312 21.5935 17.9658 20.5443 18.7394 19.7707C19.513 18.9971 20.5622 18.5625 21.6562 18.5625C21.9298 18.5625 22.1921 18.4539 22.3855 18.2605C22.5789 18.0671 22.6875 17.8048 22.6875 17.5313C22.6875 17.2577 22.5789 16.9954 22.3855 16.802C22.1921 16.6086 21.9298 16.5 21.6562 16.5H19.5938C19.0467 16.5 18.5221 16.2827 18.1353 15.8959C17.7485 15.5091 17.5312 14.9845 17.5312 14.4375V12.375H25.7812C26.3283 12.375 26.8529 12.5923 27.2397 12.9791C27.6265 13.3659 27.8438 13.8905 27.8438 14.4375V16.5Z"
            fill="black"
          />
        </svg>
      ),
      title: "Empoderar",
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
            <h2 className="text-[48px] font-semibold text-gray-800 md:text-[56px] dark:text-gray-200">
              Resource groups
            </h2>
            <p className="text-blue-900 dark:text-white leading-[120%] font-semibold text-[2rem]">
              Inclusão e pertencimento
            </p>
          </div>
        </div>
        <div className="bg-blue-900 dark:bg-gray-200 w-full h-px my-7.5 md:my-15" />
        <div className="flex flex-col gap-7.5" data-animation="up-2">
          <h4 className="text-blue-900 leading-[120%] font-semibold text-[2rem] dark:text-white">
            Conheça e participe de nossos grupos de afinidade
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3! gap-7.5">
            {resourceGroupItems.map((item, index) => (
              <ResourceGroupItem {...item} key={index} />
            ))}
          </ul>
        </div>
        <div className="pt-12 flex flex-col gap-8" data-animation="up-2">
          <h4 className="text-blue-900 dark:text-white leading-[120%] font-semibold text-[2rem]">
            Nossos pilares de ação
          </h4>
          <ul className="sm:grid hidden grid-cols-2 lg:grid-cols-4 gap-2">
            {pillars.map((item, index) => (
              <li className="flex items-center gap-6" key={index}>
                <div className="p-5 rounded-full bg-[#00E6CC]">{item.icon}</div>
                <h4 className="text-blue-900 dark:text-gray-200 text-2xl font-semibold">
                  {item.title}
                </h4>
              </li>
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
    <li className="flex flex-col gap-7">
      <img loading="lazy" className="size-22.5" src={imageSrc} alt="" />
      <h5 className="text-2xl text-blue-900 dark:text-white font-semibold">
        {title}
      </h5>
      <p className="text-xs text-gray-700 dark:text-gray-200">{text}</p>
    </li>
  );
}
