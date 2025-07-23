import { Concentrix } from "@/icons";
import { cx } from "cva";
import concentrix from "@/assets/images/brand-tour.png";
import Image from "next/image";
export const Footer = () => (
    <footer className={cx(["container py-12", "bg-gray-60"])}>
        <div className={cx(["grid grid-cols-2 grid-rows-2 gap-4"])}>
            <Concentrix className="text-white" />
            <Image
                src={concentrix}
                alt="Concentrix tour"
                className="w-full max-w-20"
            />
            <p className="text-white">
                &reg; Todos os direitos reservados a Concentrix
            </p>
        </div>
    </footer>
);
