
import { Flex, Spacer, Text } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Exo } from '@next/font/google'


export function Header(){
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
        <li><a className='Home' href='/'>Home</a></li>
        <li><a className='About' href='/Homesections'> About </a> </li>
        <li> <a className='Projects' href='#'>Projects</a></li>
        <li> <a className='Blog' href='#'>Blog </a></li>
        <li><a className='Contact' href='#'> Contact</a> </li>
        </ul>
        </nav>
         
    
  </Center>

   
   </Flex>
 )
}

