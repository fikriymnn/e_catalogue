"use client"
import Image from 'next/image'

import { Navbar } from 'flowbite-react'





export default function Navbarr() {
  return (


    <Navbar
      fluid
      rounded
      className="border-black bg-200"
    >
      <Navbar.Brand

        href="/e-catalogue"
      >
        <Image src="/assets/SldLogo.png" width={50} height={50} className="mr-3" alt="Logo" />

      </Navbar.Brand>


    </Navbar>

  )
}