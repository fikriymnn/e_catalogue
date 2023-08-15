"use client";
import CardPromo from "@/components/CardPromo";

import Navbar from "@/components/Navbar";

export default function Promosi({ searchParams }) {
  return (
    <>
      <Navbar />
      <div className="flex items-center">
        <div className="bg-[#B8ECF8] rounded md:w-64 sm:w-40 w-36 mb-10 mt-10 flex items-center mx-auto hover:bg-[#ffc36fa4]">
          <a
            href="/e-catalogue"
            className="font-bold block py-2 pl-3 pr-4 text-[#243B82] rounded bg-transparent md:border-0 md:hover:text-black md:p-0  dark:hover:text-black m-auto"
          >
            Computer
          </a>
        </div>
        <div className="bg-[#B8ECF8] rounded md:w-64 sm:w-40 w-36 mb-10 mt-10 flex items-center mx-auto hover:bg-[#ffc36fa4]">
          <a
            href="/e-catalogue/printer"
            className="font-bold block py-2 pl-3 pr-4 text-[#243B82] rounded bg-transparent md:border-0 md:hover:text-black md:p-0  dark:hover:text-black m-auto"
          >
            Printer
          </a>
        </div>
      </div>

      <blockquote className="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#243B82] ">
        <p>Computer</p>
        <hr className="h-1 w-2/5 md:mb-24 sm:mb-20 mb-16 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white" />
      </blockquote>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-items-center">
        <CardPromo
          src={"/assets/cat1.jpeg"}
          text={"Asus PC All in one V222GAK-BA142W"}
          harga="RP. 6.862.700,00"
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Celeron J4025 Processor 2 GHz (4M Cache, up to 2.9 GHz, 2 Cores)"
          }
          detail3={"VGA: Intel UHD Graphics 600"}
          detail4={"SSD: 256GB M.2 NVMe PCle 3.0"}
          detail5={"RAM: 4GB DDR4 SO-DIMM"}
          detail6={"Resolution: 21.5 Inch FHD (1920 x 1080)"}
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: Wired Keyboard + Mouse"}
        />
        <CardPromo
          src={"/assets/cat2.jpeg"}
          text={"Asus PC AIO A5401WRAK-BA581WS"}
          harga="RP. 12.868.700,00"
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i5-10500T 2.3 GHz (12M Cache, up to 3.8GHz, 6 Cores)"
          }
          detail3={"VGA: Intel UHD Graphics 600"}
          detail4={"Storage: 1TB SATA 5400RPM 2.5 Inch HDD + 512GB SSD"}
          detail5={"RAM: 8GB DDR4 SO-DIMM"}
          detail6={
            "Resolution: 23.8-inch IPS FHD (1920 x 1080) 16:9 250nits anti glare panel"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: Wired golden keyboard/Wired optical mouse"}
        />

        <CardPromo
          src={"/assets/cat1.jpeg"}
          text={"Asus PC AIO V222FAK-BA542W"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i5-10210U 1.6 GHz (6M Cache, up to 4.2 GHz, 4 cores)"
          }
          detail3={"VGA: Intel UHD Graphics 600"}
          detail4={"Storage: 256GB M.2 NVMe PCle 3.0 SSD"}
          detail5={"RAM: 4GB DDR4 SO-DIMM"}
          detail6={
            "Resolution:21.5-inch, FHD (1920 x 1080) 16:9 Wide view, Anti-glare display, LED Backlit 250nits, sRGB: 100%"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: Wired golden keyboard/Wired optical mouse"}
        />

        <CardPromo
          src={"/assets/cat1.jpeg"}
          text={"Asus PC AIO M241DAK-B4341W"}
          harga={"Rp 9.098.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: AMD Ryzen 3 3250U Mobile (2C/4T, 5MB Cache, 3.5 GHz Max Boost"
          }
          detail3={"VGA: AMD Radeon Graphics"}
          detail4={"Storage: 1TB SATA 5400RPM 2.5-inch HDD"}
          detail5={"RAM: 8GB DDR4 SO-DiMM"}
          detail6={
            "Resolution: 23.8-inch FHD (1920 x 1080) 16:9 LCD 250nits sRGB: 100% Screen-to-body ratio 88% Anti-glare display"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: Wired golden keyboard/Wired optical mouse"}
        />
        <CardPromo
          src={"/assets/cat7.jpeg"}
          text={"Lenovo AIO V30A-22IIL-24ID"}
          harga={"Rp 11.048.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i5-1035G1 (4C / 8T, 1.0 / 3.6GHz, 6MB)"
          }
          detail3={"VGA: Integrated Intel UHD Graphics"}
          detail4={"Storage: 512GB SSD M.2 2242 PCle NVMe"}
          detail5={"RAM: 1x 8GB SO-DIMM DDR4-3200"}
          detail6={
            "Resolution: 21.5-inch FHD (1920 x 1080) IPS Anti-glare 250nits, 72% Gamut"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Calliope Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat3.jpeg"}
          text={"PC Lenovo AIO 5 24IOB6 CLID"}
          harga={"Rp 24.700.00,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i7-11700T (*C / 16T, 1.4 / 4.6GHz Max Boost"
          }
          detail3={"VGA: NVidia GeForce MX450 2GB GDDR6"}
          detail4={
            "Storage: 512GB SSD M.2 2280 PCle NVMe + 2TB HDD 5400rpm 2.5-inch"
          }
          detail5={"RAM: 2x 8GB SO-DIMM DDR4-3200"}
          detail6={
            "Resolution: 23.8-inch FHD (1920 x 1080) IPS 250nits, Touchscreen 10-point Multi-touch"
          }
          detail7={"Camera: Camera IR"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Calliope Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat8.jpeg"}
          text={"PC Lenovo AIO 3 24IMB05 RXID"}
          harga={"Rp 14.558.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i5-10400T (6C / 12T, 2.0 / 3.6GHz, 12MB"
          }
          detail3={"VGA: Integrated Intel UHD Graphics"}
          detail4={"Storage: 512GB SSD M.2 2280 PCle 3.0 NVMe"}
          detail5={"RAM: 2x 4GB SO-DiMM DDR4-2666"}
          detail6={"Resolution: 23.8-inch FHD (1920 x 1080) IPS 250nits"}
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Calliope Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat8.jpeg"}
          text={"Lenovo AIO A340 24IWL XEID"}
          harga={"Rp 10.268.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i3-10110U (2C / 4T, 2.1 / 4.1GHz, 4MB)"
          }
          detail3={"VGA: Integrated Intel UHD Graphics"}
          detail4={"Storage: 1TB HDD 5400rpm 2.5-inch"}
          detail5={"RAM: 1x 4GB SO-DiMM DDR4-2666"}
          detail6={"Resolution: 23.8-inch FHD (1920 x 1080) IPS 250nits"}
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Calliope Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat7.jpeg"}
          text={"PC Lenovo AIO 5 24IMB05 9PID"}
          harga={"Rp 25.218.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i7-10700T (8C / 16T, 2.0 / 4.5GHz, 16MB"
          }
          detail3={"VGA: NVidia GeForce MX330 2GB GDDR5"}
          detail4={
            "Storage: 512GB SSD M.2 2280 PCle 3.0 NVMe + 2TB HDD 5400rpm 2.5-inch"
          }
          detail5={"RAM: 2x 8GB SO-DiMM DDR4-2933"}
          detail6={
            "Resolution: Display 23.8-inch FHD (1920 x 1080) IPS 250nits, Touchscreen 10-point-Multi-touch"
          }
          detail7={"Camera: Camera IR"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Calliope Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat5.jpeg"}
          text={"Acer AIO ASPIRE C22-1700"}
          harga={"Rp 11.048.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Processor: Intel Core i3-1215U (10MB Cache, up to 4.40GHz)"}
          detail3={"VGA: Intel UHD Graphics"}
          detail4={"Storage: 512GB M.2 2280 PCI-E SSD"}
          detail5={"RAM: 4GB DDR4 2666 MHz SO-DIMM"}
          detail6={
            "Resolution: 21.5-inch FHD (1920 x 1080) IPS 250nits, LED Backlight"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat6.jpeg"}
          text={"Acer PC AIO C22-1650"}
          harga={"Rp 10.593.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Processor: Intel Core i3-1115G4 (6MB Cache, up to 4.10GHz)"}
          detail3={"VGA: Intel UHD Graphics"}
          detail4={"Storage: 512GB M.2 2280 PCI-E SSD"}
          detail5={"RAM: 4GB DDR4 2666 MHz SO-DiMM"}
          detail6={
            "Resolution: Display 21.5-inch FHD (1920 x 1080) IPS 350nits, LED Backlight"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat6.jpeg"}
          text={"Acer PC AIO C24-1650"}
          harga={"Rp 13.713.700,00"}
          detail={"Spesifikasi:"}
          detail2={"Processor: Intel Core i5-1135G7 (8MB Cache, up to 4.20GHz)"}
          detail3={"VGA: Intel UHD Graphics"}
          detail4={"Storage: 1TB HDD 2.5-inch 5400 RPM"}
          detail5={"RAM: 8GB DDR4 2666 MHz soDIMM"}
          detail6={
            "Resolution: 23.8-inch FHD (1920 x 1080) IPS 350nits, LED Backlight"
          }
          detail7={"Camera: 720p HD Camera"}
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: USB Keyboard & Mouse"}
        />
        <CardPromo
          src={"/assets/cat10.jpeg"}
          text={"HP PC 24-DF1047D"}
          harga={"Rp 11.048.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i3-1125G4 (up to 3.7GHz with Intel Turbo Boost Technology, 8MB Cache, 4 Cores"
          }
          detail3={"VGA: Intel Iris Xe Graphics"}
          detail4={"Storage: 512GB PCle NVMe M.2 SSD"}
          detail5={
            "RAM: 8GB DDR4-3200 MHz RAM (1x8GB) Transfer Rates up to 3200 MT/s"
          }
          detail6={
            "Resolution: 60.5cm (23.8-inch) diagonal, FHD (1920 x 1080) IPS, three-sided micro-edge, anti-glare, 250nits, 72% NTSC"
          }
          detail7={
            "Camera: HP True Vision 720p HD Privacy camera with integrated dual array digital microphones"
          }
          detail8={"OS: Windows 11 Home"}
          detail9={
            "Accessories: HP 710 White Wireless Keyboard and mouse combo"
          }
        />
        <CardPromo
          src={"/assets/cat11.jpeg"}
          text={"HP PC 24-DF1049D"}
          harga={"Rp 12.998.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i5-1135G7 (up to 4.2GHz with Intel Turbo Boost Technology, 8MB L3 Cache, 4 Cores)"
          }
          detail3={"VGA: Intel Iris Xe Graphics"}
          detail4={"Storage: 512GB PCle NVMe M.2 SSD"}
          detail5={"RAM: 8GB DDR4-3200 MHz RAM (2x4GB)"}
          detail6={
            "Resolution: 23.8-inch diagonal, FHD (1920 x 1080), IPS, three-sided micro-edge, anti-glare, 250nits, 72%NTSC"
          }
          detail7={
            "Camera: HP True Vision 720HD privacy camera with integrated dual array digital microphones"
          }
          detail8={"OS: Windows 11 Home"}
          detail9={
            "Accessories: HP 710 White Wireless Keyboard and mouse combo"
          }
        />
        <CardPromo
          src={"/assets/cat10.jpeg"}
          text={"HP PC 24-CB1023D"}
          harga={"Rp 11.048.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i7-1255U (up to 4.2GHz with Intel Turbo Boost Technology, 8MB L3 Cache, 4 Cores)"
          }
          detail3={"VGA: NVidia GeForce MX450 (2GB DDR5 dedicated"}
          detail4={"Storage: 512GB PCle NVMe M.2 SSD"}
          detail5={"RAM: 8GB DDR4-3200 MHz RAM (1x8GB)"}
          detail6={
            "Resolution: 60.5Cm 23.8-inch diagonal, FHD (1920 x 1080), IPS, three-sided micro-edge, anti-glare, 250nits, 72%NTSC"
          }
          detail7={
            "Camera: HP Wide Vision 1080p FHD IR privacy camera with integrated dual array digital microphones"
          }
          detail8={"OS: Windows 11 Home"}
          detail9={"Accessories: HP 710 White Wireless Keyboard and mouse"}
        />
        <CardPromo
          src={"/assets/cat11.jpeg"}
          text={"HP PC 24-CB1017D"}
          harga={"Rp 12.998.700,00"}
          detail={"Spesifikasi:"}
          detail2={
            "Processor: Intel Core i5-1235U (up to 4.2GHz with Intel Turbo Boost Technology, 12MB L3 Cache, 10 Cores, 12 Threads)"
          }
          detail3={"VGA: Intel Iris Xe Graphics"}
          detail4={"Storage: 512GB PCle NVMe M.2 SSD"}
          detail5={"RAM: 8GB DDR4-3200 MHz RAM (1x8GB)"}
          detail6={
            "Resolution: 23.8-inch diagonal, FHD (1920 x 1080), IPS, three-sided micro-edge, anti-glare, 250nits, 72%NTSC"
          }
          detail7={
            "Camera: HP True Vision 720HD privacy camera with integrated dual array digital microphones"
          }
          detail8={"OS: Windows 11 Home"}
          detail9={
            "Accessories: HP 710 White Wireless Keyboard and mouse combo"
          }
        />
      </div>

      <div className="mb-56"></div>
    </>
  );
}
