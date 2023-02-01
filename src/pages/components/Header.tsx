
import { Flex, Spacer, Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Exo } from '@next/font/google'
import Link from 'next/link'
export  default function Header(){
 return (
 
  <Flex pl={67.43} pr={67.43} flex='2'>
   <Center>
  <Image 
  boxSize={160}
  h = '24'
  src='logo_q.png' alt='logo' />
</Center>

  <Center>
   
  
  
  <nav> <ul className='menu'>
        <li> <Link className='Home' href='/'> Home </Link> </li>
        <li><Link
         className='About' href='/Homesections'> About </Link
        > </li>
        <li> <Link
         className='Projects' href='#'>Projects</Link
        ></li>
        <li> <Link
        className='Blog' href='#'>Blog </Link
        ></li>
        <li><Link
         className='Contact' href='#'> Contact</Link
        > </li>
        </ul>
        </nav>
         
    
  </Center>

   
   </Flex>
 )
}

