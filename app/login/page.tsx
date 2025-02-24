import Link from 'next/link';
import { Form } from 'app/form';
import { signIn } from 'app/auth';
import { SubmitButton } from 'app/submit-button';

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Iniciar Sesión</h3>
          <p className="text-sm text-gray-500">
            Utilice su correo Institucional para iniciar sesión
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
            'use server';
            await signIn('credentials', {
              redirectTo: '/protected',
              email: formData.get('email') as string,
              password: formData.get('password') as string,
            });
          }}
        >
          <SubmitButton>Iniciar</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Registro "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
         
          </p>
        </Form>
      </div>
    </div>
  );
}
