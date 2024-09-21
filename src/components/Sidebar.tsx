import Image from 'next/image'
import React from 'react'
import { IoIosFastforward } from 'react-icons/io'
import { SidebarItem } from './SidebarItem'
import { IoCalculator, IoFileTrayFull } from 'react-icons/io5'
import { TbPokeball } from 'react-icons/tb'
import { MdSpaceDashboard } from 'react-icons/md'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <MdSpaceDashboard size={35} />,
        title: 'Dashboard',
        subTitle: 'Manage'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={35} />,
        title: 'Counter',
        subTitle: 'Start counting'
    },
    {
        path: '/dashboard/pokemons',
        icon: <TbPokeball size={35} />,
        title: 'Pokemons',
        subTitle: 'I choose you'
    },
    {
        path: '/dashboard/form',
        icon: <IoFileTrayFull size={35} />,
        title: 'Form',
        subTitle: 'Important data'
    }
]

export const Sidebar = () => {
  return (
    <div id="menu" 
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0">

        <div id="logo" className="my-4 px-6">
            <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                <IoIosFastforward className='mr-2'/>
                <span>Jash</span>
                <span className="text-blue-500">18</span></h1>
            <p className="text-slate-500 text-sm">Manage your aplications</p>
        </div>

        <div id="profile" className="px-6 py-10">
            <p className="text-slate-500 mb-2">Welcome back</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image className="rounded-full w-8 h-8" 
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" 
                        width={50}
                        height={50}
                        alt="User avatar" />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Juan Acosta
                </span>
                </a>
        </div>
        <div id="nav" className="w-full px-6">
            
            {
                menuItems.map( item => (
                    <SidebarItem key={item.path} {...item}
                    />
                ))
            }
        </div>
    </div>
  )
}
