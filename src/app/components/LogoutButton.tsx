'use client';

import { signOut } from 'next-auth/react';
import Button from './Button';

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };

  return (
    <Button
      text="Sair"
      onClick={handleLogout}
      className="w-full"
      variant="quartenary"
    />
  );
}
