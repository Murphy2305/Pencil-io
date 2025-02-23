import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '@/components/global/mode-toggle'

function Header() {
  return (
    <header className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src='/Logo1.png' alt='logo' width={100} height={80} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="hover:text-blue-700 dark:hover:text-sky-400" href="#"> About </a></li>
              <li><a className="hover:text-blue-700 dark:hover:text-sky-400" href="#"> Careers </a></li>
              <li><a className="hover:text-blue-700 dark:hover:text-sky-400" href="#"> History </a></li>
              <li><a className="hover:text-blue-700 dark:hover:text-sky-400" href="#"> Services </a></li>
              <li><a className="hover:text-blue-700 dark:hover:text-sky-400" href="#"> Projects </a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="block rounded-md bg-blue-700 dark:bg-sky-400 px-5 py-2.5 text-sm font-medium text-white dark:text-black transition hover:bg-blue-600 dark:hover:bg-sky-300">
                <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink>
              </div>

              <div className="hidden rounded-md bg-gray-200 dark:bg-gray-800 px-5 py-2.5 text-sm font-medium text-black dark:text-white transition hover:bg-gray-300 dark:hover:bg-gray-700 sm:block">
                <RegisterLink>Register</RegisterLink>  
              </div>
            </div>

            <ModeToggle/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
