import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { GiAbstract059 } from 'react-icons/gi'
import NavLink from './NavLink'


export default function TopNav() {
  return (
    <Navbar 
    maxWidth='xl'
    className='bg-gradient-to-r from-blue-400 to-green-300'
    classNames={{
        item: [
            'text-xl',
            'text-white',
            'uppercase',
            'data-[active=true]:text-pink-500'
        ]
    }}>
        <NavbarBrand as={Link} href='/'>
            <GiAbstract059 size={40} className='text-pink-500' /> 
                <div className='font-bold text-3xl flex'>
                    <span className='text-gray-800'>Next</span>
                    <span className='text-white'>Talent</span>
                </div>
        </NavbarBrand>
        <NavbarContent justify='center'>
            <NavLink href='/members' label='Artists'/>
            <NavLink  href='/galleries' label='Galleries'/>
            <NavLink href='/messages' label='Messages'/>
        </NavbarContent>
        <NavbarContent justify='end'>
            <Button as={Link} href='/auth/login' variant='shadow' className='text-white' color='danger'>Login</Button>
            <Button as={Link} href='/auth/register' variant='shadow' className='text-white' color='danger'>Register</Button>
        </NavbarContent>
    </Navbar>
  )
}
