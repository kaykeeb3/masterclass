import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User
} from 'phosphor-react';

import { NavLink } from 'react-router-dom';
import twitterLogo from '../assets/logo-twitter.svg';

export function Sidebar() {
  return (
    <aside className='p-6 px-5 flex flex-col gap-8 md:p-6 md:px-2 md:items-center'>
        <img src={twitterLogo} alt="Lodo do Twitter" className='w-8 h-8' />

        <nav className='flex flex-col gap-8'>
          <NavLink to='/'  className='flex items-center gap-5 text-sm font-bold no-underline text-twitter active:text-zinc-900'>
            <House weight='fill' className='w-8 h-8 opacity-95' />
            <span className='hidden'>Home</span>
          </NavLink>
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
            <Hash  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>Explore</span>
          </a>
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
          <Bell  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>Notifications</span>
          </a>
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
            <Envelope  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>Messagens</span>
            </a>
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
            <BookmarkSimple  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>Bookmaarks</span>
            </a> 
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
            <FileText  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>Lists</span>
            </a>
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
            <User  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>Profile</span>
            </a>
          <a href='' className='flex items-center gap-5 text-sm font-bold no-underline'>
            <DotsThreeCircle  className=' w-8 h-8 opacity-95' />
            <span className='hidden'>More</span>
            </a>
        </nav>

        <button className='bg-twitter rounded-full p-4 flex justify-center w-full text-color text-sm font-black hover:opacity-90'>
          <Pencil className='w-6 h-6 hidden sm:block' />
          <span className='sm:flex-none'>Tweet</span>
        </button>
      </aside>
  )
}