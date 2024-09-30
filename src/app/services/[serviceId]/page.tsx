'use client';

import { useParams } from 'next/navigation';
import servicesData from '../../../../data/services.json';
import CardSecondary from '../../components/CardSecondary';

interface Treatment {
  linkImage: string;
  title: string;
  title2: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  refPage: string;
  cost: number;
  time: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  treatments: Treatment[];
}

interface ServicesData {
  hand: ServiceCategory;
  foot: ServiceCategory;
  pack: ServiceCategory;
}

const ServicePage: React.FC = () => {
  const { serviceId } = useParams();

  const validServiceIds: Array<keyof ServicesData> = ['hand', 'foot', 'pack'];

  if (!validServiceIds.includes(serviceId as keyof ServicesData)) {
    return <div>Serviço não encontrado</div>;
  }

  const serviceCategory = servicesData[serviceId as keyof ServicesData];

  if (!serviceCategory) return <div>Serviço não encontrado</div>;

  const getGridClasses = (numCards: number): string => {
    if (numCards === 1) return 'grid-cols-1';
    if (numCards === 2) return 'grid-cols-1 md:grid-cols-2';
    if (numCards === 3) return 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1';
    return '2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1';
  };
  return (
    <div>
      <div className="w-full bg-brand-pink">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-hero-image2 bg-center bg-contain bg-no-repeat translate-y-16 mb-10"></div>
        <div className="rounded-t-[55px] bg-light-10 w-full h-10"></div>
      </div>
      <div id="treatments" className="w-full font-body bg-light-10 pb-24">
        <div className="pt-5">
          <div className="flex flex-col justify-center items-center mx-5 text-dark-10">
            <h1 className="text-4xl font-medium text-center leading-8 mb-2">
              Tratamentos para{' '}
              {serviceId === 'hand'
                ? 'as mãos'
                : serviceId === 'foot'
                  ? 'os pés'
                  : 'pacotes'}
            </h1>
            <p className="text-center text-xl leading-5 px-4">
              Confira todos os serviços para
              {serviceId === 'hand'
                ? 'suas mãos'
                : serviceId === 'foot'
                  ? 'seus pés'
                  : 'pacotes disponíveis'}
              .
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className={`grid ${getGridClasses(serviceCategory.services.length)} mt-4 gap-y-14 gap-6 mx-5`}
            >
              {serviceCategory.services.map((services, index) => (
                <CardSecondary
                  key={index}
                  linkImage={services.linkImage}
                  title={services.title}
                  title2={services.title2}
                  desc1={services.desc1}
                  desc2={services.desc2}
                  desc3={services.desc3}
                  desc4={services.desc4}
                  refPage={services.refPage}
                  cost={services.cost}
                  time={services.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
