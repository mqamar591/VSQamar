import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { chakra } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { Header } from './components/Header'
import Homesections from './components/Homesections'
import supabaseone from '../config/SupabaseClient'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
 console.log(supabaseone)
  return (
    <>
       <Header />
       <Homesections/>
    </>
  )
}
