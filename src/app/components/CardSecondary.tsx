import React from 'react';

interface CardSecondary {
  linkImage: string;
  title: string;
  title2: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  refPage: string;
  cost: number;
  time: string;
}

const CardSecondary: React.FC<CardSecondary> = ({
  linkImage,
  title,
  title2,
  desc1,
  desc2,
  desc3,
  refPage,
  cost,
  time,
}) => {
  return (
    <div className="w-full min-w-[340px] max-w-[340px] bg-white rounded-3xl flex flex-col drop-shadow-2xl p-4 gap-3 h-full">
      <div className="h-[170px] overflow-hidden rounded-2xl drop-shadow-2xl">
        <img
          src={linkImage}
          alt="woman"
          className="object-cover h-full w-full"
        />
      </div>
      <div
        className="mx-2 flex-grow flex flex-col justify-between"
        style={{ minHeight: '200px' }}
      >
        <div className="flex-grow">
          <span className="text-brand-pink text-2xl font-medium">{title}</span>
          <p className="font-medium pb-1">{title2}</p>
          <p className="leading-5 tracking-tight text-dark-20 pb-3">
            {desc1}
            <br />
            {desc2}
            <br />
            {desc3}
          </p>
          <p className="text-black tracking-tight font-medium font-buttons">
            Tempo Estimado:
            <span className="text-brand-pink"> {time}</span>
          </p>
          <p className="text-black tracking-tight font-medium font-buttons">
            Valor:{' '}
            <span className="text-brand-pink">
              R$ <span>{cost}</span>
            </span>
          </p>
        </div>
        <div className="w-full flex justify-center mt-4">
          <a
            href={refPage}
            target="_blank"
            className="text-white md:text-base text-xs bg-brand-pink p-2 rounded-full font-semibold font-buttons drop-shadow-2xl border-2 border-transparent hover:border-dark-20 transition duration-300 px-10"
            rel="noreferrer"
          >
            Agendar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSecondary;
