"use client";

import { Button } from "@/components";
import { Play } from "@/icons";
import { useState } from "react";

export function GRG() {
  return (
    <section className="dark:bg-gray-900">
      <div className="container flex flex-col gap-5.5">
        <div className="pl-3 flex flex-col md:gap-2 gap-3 border-l-[#00E6CC] border-l-2">
          <h3 className="font-semibold text-[40px] text-[#011E38] dark:text-gray-200">
            Faça parte de um GRG
          </h3>
          <p className="text-blue-900 leading-[120% font-semibold text-[2rem] dark:text-white">
            Atualize suas afiliações profissionais
          </p>
        </div>
        <span className="text-blue-900 max-w-[629px] dark:text-white">
          Assista ao vídeo abaixo com o passo a passo de como atualizar suas
          afiliações profissionais de forma simples e rápida.
        </span>
        <div className="pb-12">
          <VideoPlayer src="/video/ESG-tutorial-trilha.mp4" />
        </div>
      </div>
    </section>
  );
}

function VideoPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video">
      <video
        muted
        className="w-full h-full object-cover rounded-lg"
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        controlsList="nodownload"
      >
        Your browser does not support the video tag.
        <source src={src} type="video/mp4" />
      </video>

      {!isPlaying && (
        <button
          onClick={(e) => {
            const video = e.currentTarget
              .previousElementSibling as HTMLVideoElement;
            video.play();
            setIsPlaying(true);
          }}
          className="absolute rounded-lg cursor-pointer inset-0 flex items-center justify-center bg-black/10 hover:bg-black/15 transition-colors group"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gray-800/60 rounded-full shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  );
}
