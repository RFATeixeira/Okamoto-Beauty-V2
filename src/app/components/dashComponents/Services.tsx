'use client';

import React, { useState } from 'react';
import AdminCard from '../AdminCard';
import Button from '../Button';

interface Service {
  id: number;
  linkImage: string;
  title: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
}

interface Services {
  hand: Service[];
  foot: Service[];
  pack: Service[];
  promo: Service[];
}

const serviceNames: { [key in keyof Services]: string } = {
  hand: 'Mão',
  foot: 'Pé',
  pack: 'Pacote',
  promo: 'Promoção',
};

const ServicesContainer: React.FC<{ services: Services }> = ({ services }) => {
  const [activeService, setActiveService] = useState<keyof Services>('hand');

  const handleDelete = (id: number) => {};

  return (
    <div className="space-y-4">
      <Button text={'Novo Serviço'} variant="secondary" />

      <div className="flex space-x-4 mb-4">
        {Object.keys(services).map(key => (
          <button
            key={key}
            className={`text-lg font-semibold bg-brand-pink w-40 font-buttons px-4 py-2 rounded-full border-2 border-brand-pink transition duration-300 ${activeService === key ? 'text-brand-pink bg-white ' : 'text-white'}`}
            onClick={() => setActiveService(key as keyof Services)}
          >
            {serviceNames[key as keyof Services]}{' '}
          </button>
        ))}
      </div>

      {services[activeService].map((treatment: Service) => (
        <AdminCard
          key={treatment.id}
          id={treatment.id}
          linkImage={treatment.linkImage}
          title={treatment.title}
          desc1={treatment.desc1}
          desc2={treatment.desc2}
          desc3={treatment.desc3}
          desc4={treatment.desc4}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ServicesContainer;
