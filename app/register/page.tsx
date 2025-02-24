import Link from 'next/link';
import { Form } from 'app/form';
import { redirect } from 'next/navigation';
import { createUser, getUser } from 'app/db';
import { SubmitButton } from 'app/submit-button';

export default function Login() {
  async function register(formData: FormData) {
    'use server';
    let email = formData.get('email') as string;
    let password = formData.get('password') as string;
    let user = await getUser(email);

    if (user.length > 0) {
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await createUser(email, password);
      redirect('/login');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-green-200">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-stone-400 bg-stone-800 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-stone-400 bg-stone-900 px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Registro</h3>
          <p className="text-sm text-gray-300">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
        </Form>
      </div>
    </div>
  );
}
