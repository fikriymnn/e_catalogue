"use client";
import CardPromo from "@/components/CardPromo";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Promosi({ searchParams }) {
  return (
    <>
      <Navbar />
      <div className="flex items-center">
        <div className="bg-[#B8ECF8] rounded md:w-64 sm:w-40 w-36 mb-10  flex items-center mx-auto hover:bg-[#ffc36fa4]">
          <a
            href="/e-catalogue"
            className="font-bold block py-2 pl-3 pr-4 text-[#243B82] rounded bg-transparent md:border-0 md:hover:text-black md:p-0  dark:hover:text-black m-auto"
          >
            Computer
          </a>
        </div>
        <div className="bg-[#B8ECF8] rounded md:w-64 sm:w-40 w-36 mb-10  flex items-center mx-auto hover:bg-[#ffc36fa4]">
          <a
            href="/e-catalogue/printer"
            className="font-bold block py-2 pl-3 pr-4 text-[#243B82] rounded bg-transparent md:border-0 md:hover:text-black md:p-0  dark:hover:text-black m-auto"
          >
            Printer
          </a>
        </div>
      </div>
      <blockquote className="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#243B82] ">
        <p>Printer</p>
        <hr className="h-1 w-2/5 md:mb-24 sm:mb-20 mb-16 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white" />
      </blockquote>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-items-center">
        <CardPromo
          src={"/assets/p1.jpeg"}
          text={"HP OFFICEJET 7110 WIDE FORMAT EPRINTER (CR768A)"}
          harga="RP 2.936.700,00"
          detail={"Maks. Besaran kertas:3A"}
          detail2={"Kecepatan cetak: up to 33 ppm"}
          detail3={"Kecepatan cetak warna(ISO): Up to 29"}
          detail4={"Lebar: 419 mm"}
          detail5={"Panjang: 585 mm"}
          detail6={"Tinggi:189 mm"}
          detail7={"Berat: 9 kg"}
        />
        <CardPromo
          src={"/assets/p2.jpeg"}
          text={"HP OFFICEJET 7612 WIDE FORMAT ALL IN ONE"}
          harga="RP 4.808.700,00"
          detail={"Maks. Besaran kertas:3A"}
          detail2={"Maks. Resolusi: up to 4800 dpi"}
          detail3={"Effective Print Resolution: 4800 x 1200"}
          detail4={"Kecepatan Cetak: Up to 33 ppm"}
          detail5={"Monthly Duty Cycle Volume: Up to 12.000 pages"}
          detail6={"kecepatan cetak warna (ISO): Up to 29 ppm"}
          detail7={
            "Konektivitas: 1 ethernet, 1x Host US, 1x USB 2.0, RJ-11Fax, 802,11 b/g/n"
          }
          detail8={"Lebar: 625.2 mm"}
          detail9={"Panjang: 689.6 mm"}
          detail10={"Tinggi: 297 mm"}
          detail11={"Berat: 20 kg"}
        />
        <CardPromo
          src={"/assets/p3.jpeg"}
          text={"HP OFFICEJET PRO 7720 WIDE FORMAT ALL-IN-ONE PRINTER"}
          harga={"Rp 4.106.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Maks. Besaran Kertas: A3"}
          detail3={"Kecepatan Cetak: Up to 22 ppm"}
          detail4={"Kecepatan Cetak Warna (ISO): Up to 18 ppm"}
          detail5={
            "Konektivitas: 1 USB 2.0 with compability with USB 3.0 devices 1 Ethernet"
          }
          detail6={"Monthly Duty Cycle Volume: Up to 33.000 pages"}
          detail7={"Berat: 21kg"}
          detail8={""}
          detail9={""}
        />
        <CardPromo
          src={"/assets/p4.jpeg"}
          text={"HP OFFICEJET 250 MOBILE ALL-IN-ONE [CZ992A]"}
          harga={"Rp 6.628.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Effective Print Resolution: 4800 x 1200"}
          detail3={"Kecepatan Cetak: Up to  ppm"}
          detail4={"Monthly Duty Cycle Volume: Up to 500 pages"}
          detail5={"Kecepatan Cetak Warna (ISO): Up to 18 ppm"}
          detail6={
            "Konektivitas: 1 USB 2.0 device, 1 USB 2.0 host, 1 Wireless, 1 WiFi direct, 1 BLE"
          }
          detail7={"Berat: 3kg"}
          detail8={""}
          detail9={""}
        />
        <CardPromo
          src={"/assets/p5.jpeg"}
          text={"EPSON L3150"}
          harga={"Rp 3.770.000,00"}
          detail={"Spesifikasi:"}
          detail2={"Maks. Besaran Kertas: A4"}
          detail3={"Effective Print Resolution: Up to 5760 x 1440 dpi"}
          detail4={"Kecepatan Cetak: 33ppm"}
          detail5={"Kecepatan Cetak Warna (ISO): 15 ppm"}
          detail6={"Berat: 8Kg"}
          detail7={""}
          detail8={""}
          detail9={""}
        />
        <CardPromo
          src={"/assets/p6.jpeg"}
          text={"HP OFFICEJET PRO 7740"}
          harga={"Rp 5.094.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Effective Print Resolution: 4800 x 1200"}
          detail3={"Kecepatan Cetak: Up to 22 ppm"}
          detail4={"Monthly Duty Cycle Volume: Up to 30,000 pages"}
          detail5={"Kecepatan Cetak Warna (ISO): up to 18 ppm"}
          detail6={
            "Konektivitas: 1 USB 2.0 Devices, 1 USB 2.0 host, 1 Wireless, 1 WiFi direct, 1 BLE"
          }
          detail7={"Berat: 25Kg"}
          detail8={""}
          detail9={""}
        />
        <CardPromo
          src={"/assets/p7.jpeg"}
          text={"EPSON L3110"}
          harga={"Rp 2.860.000,00"}
          detail={"Spesifikasi:"}
          detail2={"Maks. Besaran Kertas: A4"}
          detail3={"Effective Print Resolution: Up to 5760 x 1440 dpi"}
          detail4={"Kecepatan Cetak: 10ppm"}
          detail5={"Berat: 8Kg"}
          detail6={""}
          detail7={""}
          detail8={""}
          detail9={""}
        />
        <CardPromo
          src={"/assets/p8.jpeg"}
          text={"EPSON PRINTER LQ 310"}
          harga={"Rp 5.094.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Maks. Besaran Kertas: A4"}
          detail3={"Effective Print Resolution: Up to 5760 x 1440 dpi"}
          detail4={"Kecepatan Cetak: 10ppm"}
          detail5={"Berat: 4Kg"}
          detail6={""}
          detail7={""}
          detail8={""}
          detail9={""}
        />
      </div>
      <div className="mb-56"></div>
    </>
  );
}
