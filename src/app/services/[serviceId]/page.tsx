'use client';

import { useParams } from 'next/navigation';
import servicesData from '../../../../data/services.json';
import CardSecondary from '../../components/CardSecondary';

// Definindo as interfaces
interface Treatment {
  linkImage: string;
  title: string;
  title2: string;
  desc1: string;
  desc2: string;
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
  const { serviceId } = useParams(); // Acessando serviceId aqui

  // Define os IDs válidos
  const validServiceIds: Array<keyof ServicesData> = ['hand', 'foot', 'pack'];

  // Verifique se serviceId é uma string e se é um ID válido
  if (!validServiceIds.includes(serviceId as keyof ServicesData)) {
    return <div>Serviço não encontrado</div>;
  }

  // Acessando os dados do serviço de forma segura
  const serviceCategory = servicesData[serviceId as keyof ServicesData];

  // Verificando se a categoria de serviço existe
  if (!serviceCategory) return <div>Serviço não encontrado</div>;

  const cards = [
    {
      id: 1,
      title: 'Mãos',
      description: 'Confira todos os serviços para suas mãos.',
      linkImage: '/unha1.png',
      refPage: '/services/hand',
    },
    {
      id: 2,
      title: 'Pés',
      description: 'Confira todos os serviços para seus pés.',
      linkImage: '/unha4.png',
      refPage: '/services/foot',
    },
    {
      id: 3,
      title: 'Pacotes',
      description: 'Confira todos os pacotes disponíveis.',
      linkImage: '/unha5.png',
      refPage: '/services/pack',
    },
  ];

  const getGridClasses = (numCards: number): string => {
    if (numCards === 1) return 'grid-cols-1'; // 1 card
    if (numCards === 2) return 'grid-cols-1 md:grid-cols-2'; // 2 cards
    if (numCards === 3) return 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'; // 3 cards: 1 coluna em dispositivos móveis, 2 em tablets
    return '2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1'; // 4 ou mais cards: 1 coluna em dispositivos móveis, 2 em tablets
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
              Confira todos os serviços para{' '}
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
              className={`grid ${getGridClasses(serviceCategory.treatments.length)} mt-4 gap-y-14 gap-6 mx-5`}
            >
              {serviceCategory.treatments.map((treatment, index) => (
                <CardSecondary
                  key={index}
                  linkImage={treatment.linkImage}
                  title={treatment.title}
                  title2={treatment.title2}
                  desc1={treatment.desc1}
                  desc2={treatment.desc2}
                  refPage={treatment.refPage}
                  cost={treatment.cost}
                  time={treatment.time}
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
