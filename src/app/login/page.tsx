import LoginForm from '../components/LoginForm';

export const dynamic = 'force-dynamic';

export default function Login() {
  return (
    <div className="bg-light-10 w-full h-[100vh] flex justify-center items-center p-4">
      <LoginForm />
    </div>
  );
}
