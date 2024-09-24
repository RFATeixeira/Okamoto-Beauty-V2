import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  text: string;
  targetId?: string; // Torne opcional para permitir navegação de página
  href: string; // Adicione um href para navegação
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  text,
  targetId,
  href,
  className,
  onClick,
}) => {
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault();
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={targetId ? scrollToSection : undefined}
    >
      {text}
    </Link>
  );
};

export default NavLink;
