import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Defina um array de usuários com suas credenciais
const users = [
  {
    id: '1',
    name: 'Raphael Teixeira',
    user: 'rfateixeira',
    password: '3dit0rP1kauty!',
  },
  {
    id: '2',
    name: 'Ana Clara Okamoto',
    user: 'ac.okamoto',
    password: 'ravi2745',
  },
  { id: '3', name: 'Usuario teste', user: 'teste', password: 'teste' },
];

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        user: {
          label: 'User',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const user = users.find(
          u =>
            u.user === credentials.user && u.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            name: user.name,
            user: user.user,
          } as User;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
