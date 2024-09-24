import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function WhatsBtn() {
  return (
    <Link
      href="https://wa.me/4484030462?text=Olá,%20tenho%20interesse%20em%20fazer%20um%20tratamento!"
      target="_blank"
      className="fixed bottom-[20px] md:bottom-[30px] right-[20px] md:right-[30px] text-[30px] bg-brand-pink text-white rounded-full p-[3px] w-[50px] h-[50px] flex z-50 drop-shadow-2xl hover:bg-white hover:text-brand-pink transition duration-300 border-2 border-brand-pink items-center justify-center"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </Link>
  );
}
