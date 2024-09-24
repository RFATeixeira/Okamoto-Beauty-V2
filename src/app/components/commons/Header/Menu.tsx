import Link from 'next/link';
import Image from 'next/image';
import { MenuCloseIcon } from '../../icons/CloseMenuIcon';
import NavLink from '../../NavLink';

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div
      className={`${isVisible ? 'flex' : 'hidden'} fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
      onClick={onClose}
    >
      <div
        className="w-full bg-white h-fit shadow-md py-[18px] px-5"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between mb-5">
          <Link href="/" className="flex flex-col justify-center">
            <span className="text-xl sm:text-2xl font-emphasis text-dark-10">
              OKAMOTO BEAUTY
            </span>
            <span className="text-black -mt-2 text-[10px] sm:text-[12px] font-semibold">
              O cuidado que você merece!
            </span>
          </Link>
          <div className="flex flex-row gap-5">
            <button onClick={onClose}>
              <MenuCloseIcon className="fill-black w-8 h-8" />
            </button>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={28}
              height={28}
              unoptimized
            />
          </div>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center">
          <NavLink
            text="Inicio"
            className="hover:text-brand-pink transition duration-300"
            onClick={onClose}
            href="/"
          />
          <NavLink
            text="Tratamentos"
            className="hover:text-brand-pink transition duration-300"
            onClick={onClose}
            href="/#treatments"
          />
          <NavLink
            text="Agendamento"
            className="hover:text-brand-pink transition duration-300"
            onClick={onClose}
            href="/#book"
          />
          <NavLink
            text="Horário"
            className="hover:text-brand-pink transition duration-300"
            onClick={onClose}
            href="/#time"
          />
          <NavLink
            text="Contatos"
            className="hover:text-brand-pink transition duration-300"
            onClick={onClose}
            href="/#contact"
          />
        </nav>
      </div>
    </div>
  );
};
