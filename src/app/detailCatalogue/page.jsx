"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function DetailPromo({ searchParams }) {
  const idDockumen = searchParams.id;
  const image = searchParams.src;
  const judul = searchParams.text;
  const harga = searchParams.harga;
  const detail = searchParams.detail;
  const detail2 = searchParams.detail2;
  const detail3 = searchParams.detail3;
  const detail4 = searchParams.detail4;
  const detail5 = searchParams.detail5;
  const detail6 = searchParams.detail6;
  const detail7 = searchParams.detail7;
  const detail8 = searchParams.detail8;
  const detail9 = searchParams.detail9;
  const detail10 = searchParams.detail10;
  const detail11 = searchParams.detail11;
  const detail12 = searchParams.detail12;

  return (
    <>
      <Navbar />
      <div className="h-screen">
        <blockquote className="md:text-[40px] sm:text-[25px] text-[15px] font-bold text-center text-[#243B82] ">
          <p>Detail </p>
          <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
        </blockquote>
        <div>
          <div className=" md:w-[800px] mx-auto sm:w-[450px] w-[300px] md:p-10 sm:p-8 p-4 bg-[#243B82] rounded-xl">
            <Image
              src={image}
              width={800}
              height={100}
              alt="promo image"
              className="mx-auto"
            />
            <p className="text-center text-white md:text-[30px] sm:text-lg text-xs md:my-10 my-6">
              {judul == "undefined" ? null : judul}
            </p>
            <p className="text-center text-white md:text-[30px] sm:text-lg text-xs md:my-10 my-6">
              {harga == "undefined" ? null : harga}
            </p>
            <p className="text-center text-white md:text-[30px] sm:text-lg text-xs md:my-10 my-6">
              {detail == "undefined" ? null : detail}
            </p>

            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail2 == "undefined" ? null : detail2}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail3 == "undefined" ? null : detail3}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail4 == "undefined" ? null : detail4}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail5 == "undefined" ? null : detail5}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail6 == "undefined" ? null : detail6}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail7 == "undefined" ? null : detail7}
            </p>

            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail8 == "undefined" ? null : detail8}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail9 == "undefined" ? null : detail9}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail10 == "undefined" ? null : detail10}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail11 == "undefined" ? null : detail11}
            </p>
            <p className=" text-white md:text-xl sm:text-lg text-xs md:my-10 my-6">
              {detail12 == "undefined" ? null : detail12}
            </p>
          </div>
        </div>

        <div className="mt-28 md:mt-0 sm:mt-0"></div>
      </div>
    </>
  );
}
