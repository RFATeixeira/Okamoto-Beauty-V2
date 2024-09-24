'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from './Menu';
import { useCallback, useState } from 'react';
import { MenuIcon } from '../../icons/MenuIcon';
import NavLink from '../../NavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="h-[70px] flex bg-white">
        <div className="w-full flex items-center justify-between lg:justify-around mx-5">
          <Link href="/" className="flex flex-col justify-center">
            <span className="text-xl font-emphasis text-dark-10 sm:text-2xl">
              OKAMOTO BEAUTY
            </span>
            <span className="text-black -mt-2 text-[10px] sm:text-[12px] font-semibold">
              O cuidado que você merece!
            </span>
          </Link>
          <div className="flex items-center">
            <div className="max-md:hidden">
              <ul className="flex gap-4 font-medium text-dark-10">
                <li className="hover:text-brand-pink transition duration-300">
                  <NavLink
                    text="INICIO"
                    href="/"
                    className="hover:text-brand-pink transition duration-300"
                  />
                </li>
                <li className="hover:text-brand-pink transition duration-300">
                  <NavLink
                    text="TRATAMENTOS"
                    className="hover:text-brand-pink transition duration-300"
                    href="/#treatments"
                  />
                </li>
                <li className="hover:text-brand-pink transition duration-300">
                  <NavLink
                    text="AGENDAMENTO"
                    className="hover:text-brand-pink transition duration-300"
                    href="/#book"
                  />
                </li>
                <li className="hover:text-brand-pink transition duration-300">
                  <NavLink
                    text="HORÁRIO"
                    className="hover:text-brand-pink transition duration-300"
                    href="/#time"
                  />
                </li>
                <li className="hover:text-brand-pink transition duration-300">
                  <NavLink
                    text="CONTATOS"
                    className="hover:text-brand-pink transition duration-300"
                    href="/#contact"
                  />
                </li>
              </ul>
            </div>
            <div className="flex gap-4 md:ml-4">
              <Menu isVisible={isMenuOpen} onClose={closeMenu} />
              <button className="p-1 md:hidden" onClick={openMenu}>
                <MenuIcon className="fill-black w-8 h-8" />
              </button>
              <a href="/login">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={28}
                  height={28}
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
