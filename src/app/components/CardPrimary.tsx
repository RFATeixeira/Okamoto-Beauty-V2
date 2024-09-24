import Link from 'next/link';
import React from 'react';

interface CardPrimary {
  linkImage: string;
  title: string;
  desc: string;
  refPage: string;
}

const CardPrimary: React.FC<CardPrimary> = ({
  linkImage,
  title,
  desc,
  refPage,
}) => {
  return (
    <div className="h-[320px] w-full max-w-[340px] drop-shadow-xl group">
      <Link href={refPage} className="w-full items-center justify-center flex">
        <div className="p-2 bg-white rounded-3xl overflow-hidden h-[262px] w-full group-hover:bg-brand-pink/80 transition duration-500">
          <img
            src={linkImage}
            alt={title}
            className="rounded-2xl object-cover overflow-hidden h-full w-full"
          />
        </div>
        <div className="flex flex-col w-full max-w-[280px] p-2 absolute bottom-0">
          <div className="bg-white flex flex-col items-center justify-center rounded-t-2xl p-2 text-center mx-4">
            <span className="text-lg text-brand-pink">{title}</span>
            <p className="text-dark-20 text-[14px]">{desc}</p>
          </div>
          <p className="h-[40px] bg-brand-pink rounded-b-2xl text-white mx-4 font-buttons flex items-center justify-center">
            Confira
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardPrimary;
