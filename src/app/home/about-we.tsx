import { Link } from "@/components";
import { Chevron, DeviceFrameIcon, User } from "@/icons";
import { cx } from "cva";
import { ComponentProps } from "react";
import glassdor from "@/assets/images/glassdoor-assessment.png";

export const AboutUs = () => (
  <section
    className={cx(
      "w-full bg-white",
      "ease-in duration-300",
      "dark:bg-gray-900",
    )}
  >
    <nav className="container pt-8 pb-[4.5rem] space-y-8 lg:space-y-12">
      <h2
        data-animation="up-2"
        className={cx(
          "font-semibold text-2xl text-blue-900",
          " duration-300 ease-in",
          "dark:text-white",
        )}
      >
        Saiba mais sobre nós
      </h2>
      <ul
        data-animation="up-2"
        className="flex flex-col gap-4 lg:flex-row lg:flex-wrap"
      >
        {list.map(({ title, description, icon, href, internLink }, index) => (
          <li
            key={title}
            className={cx(
              "w-full p-6",
              "border rounded-3xl border-seafoam-teal-30",
              "flex flex-col gap-3",
              "ease-in duration-300",
              "lg:gap-6 lg:p-8",

              {
                "bg-jade gap-8 lg:order-1 lg:flex-row-reverse lg:gap-14 lg:px-14 lg:justify-between":
                  index === 0,
                "bg-blue-100 lg:max-w-[335px] dark:border-gray-700 dark:bg-gray-800":
                  index !== 0,
                "lg:order-3": index === 1,
                "lg:order-2": index === 4,
                "lg:order-4": index === 2,
                "lg:order-5": index === 3,
              },
            )}
          >
            {index === 0 && (
              <>
                <div className="flex-1">
                  <span
                    className={cx(
                      "flex items-center justify-center",
                      "size-12",
                      "border rounded-full border-blue-400",
                      "text-blue-400",
                      "lg:size-14",
                    )}
                  >
                    <DeviceFrameIcon />
                  </span>
                  <h6
                    className={cx(
                      "mt-4",
                      "font-semibold text-2xl text-blue-400",
                      "lg:text-[2rem]",
                    )}
                  >
                    {title}
                  </h6>
                  <p
                    className={cx(
                      "ease-in duration-300",
                      "text-base text-white",
                      "mt-3",
                      "max-w-[470px]",
                    )}
                  >
                    {description}
                  </p>
                  <Link href={href} className="mt-6">
                    Saiba mais
                    <Chevron className="size-3.5" />
                  </Link>
                </div>
                <div
                  className={cx(
                    "relative z-0",
                    "flex items-center justify-center",
                    "w-full max-w-[17.5rem] mx-auto",
                    "lg:mx-0 lg:max-w-[22.625rem]",
                  )}
                >
                  <SVGRectangle
                    className={cx(
                      "w-full max-w-[17.5rem]",
                      "absolute -z-10",
                      "lg:max-w-[22.625rem]",
                    )}
                  />
                  <img
                    src={glassdor.src}
                    alt="Glassdoor"
                    className="w-full max-w-[10.75rem] mx-auto lg:mx-0 lg:max-w-[14.25rem] z-10"
                  />
                </div>
              </>
            )}
            {index !== 0 && (
              <a
                href={href}
                target={internLink ? "_self" : "_blank"}
                rel={internLink ? undefined : "noopener noreferrer"}
              >
                <header className="flex justify-between items-center gap-4">
                  <span
                    className={cx(
                      "size-14",
                      "flex items-center justify-center",
                      "rounded-full bg-blue-300",
                      "text-jade",
                      "dark:bg-gray-700 dark:text-seafoam-teal-30",
                    )}
                  >
                    {icon}
                  </span>
                  <h6
                    className={cx(
                      "ease-in duration-300",
                      "text-lg lg:text-2xl font-semibold text-blue-900",
                      "flex-1",
                      "dark:text-white",
                    )}
                  >
                    {title}
                  </h6>
                  <Chevron className="dark:text-white" />
                </header>
                <p
                  className={cx(
                    "ease-in duration-300 mt-3",
                    "text-sm lg:text-base text-gray-700",
                    "lg:max-w-72",
                    "dark:text-gray-200",
                  )}
                >
                  {description}
                </p>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

const SVGRectangle = ({ ...props }: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={361}
    height={256}
    viewBox="0 0 361 256"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.445 204.922V.242C22.945.243 0 23.066 0 51.442v153.481C0 233.178 23.067 256 51.445 256h211.583c.966 0 1.929-.843 1.929-1.81v-47.458c0-.967-.843-1.81-1.929-1.81H51.445zm309.16 0c0 28.256-23.067 51.078-51.568 51.078V51.321H97.457c-.966 0-1.932-.845-1.932-1.931V1.933C95.525.966 96.37 0 97.458 0h211.579c28.501 0 51.568 22.824 51.568 51.201v153.721z"
      fill="#F2F2F2"
      fillOpacity={0.08}
    />
  </svg>
);

const list = [
  {
    title: "Glassdoor",
    description:
      "Avalie nossa empresa e nos ajude a crescer! Sua opinião faz a diferença e contribui para a contratação de novos Game-Changers.",
    href: "https://www.glassdoor.com.br/slink.htm?key=vOhV1",
    icon: "",
    internLink: false,
  },
  {
    title: "Benefícios",
    description: "Confira tudo que oferecemos para o seu bem-estar.",
    href: "https://concentrixbrasil.benefithub.com/welcome/register/I4NDP5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2071_12641)">
          <path
            d="M16 27C16 27 3 20 3 11.75C3 9.95979 3.71116 8.2429 4.97703 6.97703C6.2429 5.71116 7.95979 5 9.75 5C12.5738 5 14.9925 6.53875 16 9C17.0075 6.53875 19.4262 5 22.25 5C24.0402 5 25.7571 5.71116 27.023 6.97703C28.2888 8.2429 29 9.95979 29 11.75C29 20 16 27 16 27Z"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2071_12641">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    internLink: false,
  },
  {
    title: "Buzzhub",
    description: "Acesse informações gerais, links e novidades da Concentrix.",
    href: "https://mycnx.concentrix.com/sites/brazil/SitePages/Home.aspx",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2071_12657)">
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 16.0002C11 20.6827 12.6662 24.8652 15.285 27.6864C15.376 27.7854 15.4865 27.8643 15.6096 27.9184C15.7326 27.9724 15.8656 28.0003 16 28.0003C16.1344 28.0003 16.2674 27.9724 16.3904 27.9184C16.5135 27.8643 16.624 27.7854 16.715 27.6864C19.3338 24.8652 21 20.6827 21 16.0002C21 11.3177 19.3338 7.13516 16.715 4.31391C16.624 4.21496 16.5135 4.13597 16.3904 4.08193C16.2674 4.0279 16.1344 4 16 4C15.8656 4 15.7326 4.0279 15.6096 4.08193C15.4865 4.13597 15.376 4.21496 15.285 4.31391C12.6662 7.13516 11 11.3177 11 16.0002Z"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.6825 12H27.3175"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.6825 20H27.3175"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2071_12657">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    internLink: false,
  },
  {
    title: "ESG",
    description: "Junte-se a nós e seja um multiplicador do bem.",
    href: "/esg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2071_12669)">
          <path
            d="M7.97626 24.0236C1.99001 14.0473 9.97626 4.07108 26.9313 5.06858C27.9288 22.0286 17.9525 30.0098 7.97626 24.0236Z"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12L5 27"
            stroke="#007380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2071_12669">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    internLink: true,
  },
] as const;
