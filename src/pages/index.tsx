import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Homesections from './components/Homesections'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
       <Header />
       <Homesections/>
    </>
  )
}
