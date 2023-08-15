import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className="m-auto">
        <Image

          src="/assets/SldLogo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

      </div>

      <div>

        <p className="m-auto md:text-3xl sm:text-2xl text-xl font-semibold leading-relaxed text-gray-900 dark:text-black">Our website is under maintenance</p>

      </div>


    </main>
  )
}
