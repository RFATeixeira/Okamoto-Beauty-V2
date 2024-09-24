import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';
import Button from '../components/Button';

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="mt-[70px] flex flex-row">
      <div className="bg-brand-pink w-72 h-[93vh] flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center w-full gap-6 p-4">
          <Button text="Categorias" className="w-full" />
          <Button text="Serviços" className="w-full" />
          <Button text="Contatos" className="w-full" />
          <Button text="Banco de Imagens" className="w-full" />
        </div>
        <div className="p-4 gap-6 flex flex-col">
          <Button text="Controle de Acesso" className="w-full" />
          <Button text="Configurações" className="w-full" />
          <LogoutButton />
        </div>
      </div>
      <div className="bg-light-10 w-full">
        <div className="bg-light-10 w-full"></div>
        <div>Olá, {session?.user?.name}</div>
      </div>
    </div>
  );
}
