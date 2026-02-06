import { AddressButtonRouter } from "../location/[type]/address/address-button-router";
import openFieldBg from "@/assets/images/open-field-bg.png";
import { ConcentrixCarbonChallenge } from "@/app/esg/concentrix-carbon-challenge";
import { ResourceGroups } from "@/app/esg/resource-groups";
import { GRG } from "./grg";
import { SocialActions } from "./social-actions";
import { AnimationObserver } from "@/components/animation-observer";

export default async function ESG() {
  return (
    <>
      <header className="relative z-20">
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
      <SocialActions />
      <ConcentrixCarbonChallenge />
      <ResourceGroups />
      <GRG />
      <AnimationObserver />
    </>
  );
}
