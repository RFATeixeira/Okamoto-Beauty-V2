'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import LogoutButton from '../components/LogoutButton';
import Button from '../components/Button';
import ServicesContainer from '../components/dashComponents/Services';
import TreatmentsContainer from '../components/dashComponents/Treatments';
import treatmentsData from '../../../data/services.json';
import ContactsContainer from '../components/dashComponents/Contacts';

export default function Page() {
  const { data: session, status } = useSession();
  const [activeComponent, setActiveComponent] = useState<
    'treatments' | 'services' | 'contacts'
  >('treatments');

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.href = '/';
    }
  }, [status]);

  const allServices = {
    hand: treatmentsData.hand.services,
    foot: treatmentsData.foot.services,
    pack: treatmentsData.pack.services,
    promo: treatmentsData.promo.services,
  };

  if (status === 'loading') {
    return (
      <div className="w-full h-screen flex items-center justify-center text-4xl text-brand-pink">
        Carregando...
      </div>
    );
  }

  return (
    <div className="mt-[70px] flex flex-row">
      <div className="bg-brand-pink w-72 h-[93vh] flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center w-full gap-6 p-4">
          <Button
            text="Categorias"
            className="w-full"
            onClick={() => setActiveComponent('treatments')}
          />
          <Button
            text="Serviços"
            className="w-full"
            onClick={() => setActiveComponent('services')}
          />
          <Button
            text="Contatos"
            className="w-full"
            onClick={() => setActiveComponent('contacts')}
          />
          <Button text="Banco de Imagens" className="w-full" />
        </div>
        <div className="p-4 gap-6 flex flex-col">
          <Button text="Controle de Acesso" className="w-full" />
          <Button text="Configurações" className="w-full" />
          <LogoutButton />
        </div>
      </div>
      <div className="bg-light-10 w-full px-10 py-6 space-y-4">
        <p className="w-full flex justify-center text-lg font-semibold text-dark-10 gap-1">
          Olá {session?.user?.name}, Agora você pode
          <span className="text-brand-pink">Criar</span>,
          <span className="text-brand-pink">Editar</span> ou
          <span className="text-brand-pink">Apagar</span> qualquer Card.
        </p>
        <div className="space-y-8">
          {activeComponent === 'services' && (
            <ServicesContainer services={allServices} />
          )}
          {activeComponent === 'treatments' && <TreatmentsContainer />}
          {activeComponent === 'contacts' && <ContactsContainer />}
        </div>
      </div>
    </div>
  );
}
