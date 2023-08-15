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
        <Image src="/assets/group2.png" width={480} height={84} className="mr-3" alt="Logo" />
        

      </Navbar.Brand>
      
      

    </Navbar>

  )
}