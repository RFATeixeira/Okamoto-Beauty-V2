'use client';

import { signIn } from 'next-auth/react';

import Button from './Button';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();

  const error = searchParams.get('error');

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      user: formData.get('user'),
      password: formData.get('password'),
    };

    signIn('credentials', {
      ...data,
      callbackUrl: '/dashboard',
    });
  }

  return (
    <form
      onSubmit={login}
      className="flex flex-col gap-4 px-8 py-12 bg-light-20 border-2 border-brand-pink w-full max-w-96 h-fit rounded-3xl justify-center items-center drop-shadow-2xl "
    >
      <p className="text-3xl font-semibold text-brand-pink">Login</p>

      <div className="flex flex-col gap-8 w-full">
        <div className="gap-3 h-[81px] flex flex-col w-full">
          <label
            htmlFor="user"
            className="text-lg text-brand-pink font-semibold"
          >
            Usuário
          </label>
          <input
            name="user"
            required
            type="text"
            placeholder="usuario.exemplo"
            className="h-[49px] w-full bg-white border-2 border-brand-pink/40 p-4 rounded-full text-base placeholder-dark-20 transition duration-500 focus:placeholder-transparent focus:border-[2px] focus:border-brand-pink outline-none"
          />
        </div>
        <div className="gap-3 h-[81px] flex flex-col">
          <label
            htmlFor="password"
            className="text-lg text-brand-pink font-semibold"
          >
            Senha
          </label>
          <input
            name="password"
            required
            type="password"
            placeholder="0123456789"
            className="h-[49px] bg-white border-2 border-brand-pink/40 p-4 rounded-full text-base placeholder-dark-20 transition duration-500 focus:placeholder-transparent focus:border-[2px] focus:border-brand-pink outline-none"
          />
        </div>
        <div className="flex flex-col mt-4">
          <Button
            text="Entrar"
            type="submit"
            className="w-full btn"
            variant="tertiary"
          />
        </div>
      </div>
      {error === 'CredentialsSignin' && (
        <div className="text-red-600 font-semibold text-xl">Erro no login.</div>
      )}
    </form>
  );
}
