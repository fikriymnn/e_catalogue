"use client";
import Image from "next/image";

export default function CardPromo({
  src,
  text,
  harga,
  detail,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  detail7,
  detail8,
  detail9,
  detail10,
  detail11,
  detail12,
  id,
}) {
  return (
    <a
      href={`/detailCatalogue?id=${id}&text=${text}&harga=${harga}&detail=${detail}&src=${src}&detail2=${detail2}&detail3=${detail3}&detail4=${detail4}&detail5=${detail5}&detail6=${detail6}&detail7=${detail7}&detail8=${detail8}&detail9=${detail9}&detail10=${detail10}&detail11=${detail11}&detail12=${detail12}`}
    >
      <div className="bg-[#243B82] md:h-[455px] sm:h-[260px] h-[155px] md:w-[360px] sm:w-[200px] w-[120px] rounded-lg mb-16">
        <Image
          className="md:w-[350px] m-auto rounded-lg pt-1"
          src={src}
          width={200}
          height={200}
        />
        <div className="flex justify-center">
          <h1 className="md:text-base sm:text-xs text-[6px] text-white font-bold md:p-5 sm:p-2 p-1 sm:mt-2 mt-1 text-center">
            {text}
          </h1>
        </div>
      </div>
    </a>
  );
}
