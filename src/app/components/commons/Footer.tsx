import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white w-full bottom-0 p-4">
      <div className="text-center gap-1 flex flex-col">
        <Link href="/" className="text-dark-10 text-4xl font-medium">
          Okamoto Beauty
        </Link>
        <p className="text-dark-20 text-lg">Raphael Teixeira © 2024</p>
        <Link
          href="./privacidade-termos.html"
          target="_blank"
          className="text-brand-pink text-lg"
        >
          Privacidade - Termos
        </Link>
      </div>
    </footer>
  );
}
