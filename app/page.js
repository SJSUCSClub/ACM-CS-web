"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '@/components/Hero'
import Officers from '@/components/Officers'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center md:px-16 2xl:px-24 gap-16">      
      <Hero />
      <Officers />
    </main>
  )
}
