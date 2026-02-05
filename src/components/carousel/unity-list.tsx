import { cx } from "cva";
import { Pin } from "@/icons";
import { Button } from "@/components";
import Link from "next/link";
import { StaticImageData } from "next/image";

type UnityListProps = {
  title: string;
  link: string;
  background_img: StaticImageData;
  className?: string;
};

export const UnityList = ({
  title,
  link,
  background_img,
  className,
}: UnityListProps) => (
  <li
    className={cx(
      "w-full max-w-[18.563rem] p-8 flex-none h-[23.25rem]",
      "rounded-3xl",
      "flex flex-col justify-end",
      "select-none relative overflow-hidden",
      "duration-300 ease-in",

      "before:absolute before:top-0 before:left-0",
      "before:w-full before:h-full",
      "before:bg-[linear-gradient(180deg,rgba(42,43,44,0.00)_0%,rgba(42,43,44,0.86)_71.9%,rgba(42,43,44,0.90)_100%)]",
      "before:-z-[1] z-0",
      "lg:max-w-[20.25rem] lg:h-[28.75rem]",

      className,
    )}
  >
    <img
      src={background_img.src}
      alt={`imagem da fachada do prédio ${title}`}
      className="absolute left-0 object-cover top-0 w-full h-full -z-10"
    />
    <h5 className="text-white font-semibold text-[2rem]/[2.4rem] uppercase lg:text-[2.5rem]/[3rem]">
      {title}
    </h5>
    <span
      className={cx(
        "flex items-center gap-2",
        "py-1 px-3 w-fit mt-2 mb-7",
        "border border-gray-400 rounded-full",
        "text-white text-sm",
      )}
    >
      <Pin />
      Endereço
    </span>
    <Button
      appearance={"ghost"}
      className="text-white border-white w-full hover:text-blue-900"
      asChild
    >
      <Link href={link}>Saiba mais</Link>
    </Button>
  </li>
);
