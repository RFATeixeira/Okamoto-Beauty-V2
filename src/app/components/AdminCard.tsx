import Image from 'next/image';
import React from 'react';
import EditButton from './AdminButtons/Edit';
import DeleteButton from './AdminButtons/Delete';
import DownArrowButton from './AdminButtons/DownArrow';
import UpArrowButton from './AdminButtons/UpArrow';

interface AdminCard {
  id: number;
  linkImage: string;
  title: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  onDelete: (id: number) => void;
}

const AdminCard: React.FC<AdminCard> = ({
  linkImage,
  title,
  desc1,
  desc2,
  desc3,
  desc4,
  id,
  onDelete,
}) => {
  return (
    <div className="w-full justify-between bg-white rounded-3xl flex flex-row drop-shadow-2xl p-4 h-28 space-x-6">
      <div className="w-full justify-between flex flex-row h-full">
        <div className="items-center justify-center flex w-[100px]">
          <p className="text-dark-10 text-2xl font-semibold">{id}</p>
        </div>
        <div className="items-center justify-center flex w-[200px]">
          <h1 className="text-brand-pink text-3xl font-semibold text-center">
            {title}
          </h1>
        </div>
        <div className="flex w-[300px] overflow-hidden flex-col">
          <h2 className="text-dark-10 text-xl ">{desc1}</h2>
          <h2 className="text-dark-10 text-xl ">{desc2}</h2>
          <h2 className="text-dark-10 text-xl ">{desc3}</h2>
          <h2 className="text-dark-10 text-xl ">{desc4}</h2>
        </div>
        <div className="overflow-hidden rounded-lg w-[120px]">
          <Image
            src={linkImage}
            alt={title}
            width={300}
            height={300}
            className="justify-center items-center object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-[240px] justify-between flex flex-row gap-2 h-full items-center">
        <EditButton />
        <DeleteButton onClick={() => onDelete(id)} />
        <DownArrowButton />
        <UpArrowButton />
      </div>
    </div>
  );
};

export default AdminCard;
