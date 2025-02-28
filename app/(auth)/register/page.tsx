'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';

import { AuthForm } from '@/components/auth-form';
import { AuthLayout } from '@/components/auth-layout';
import { SubmitButton } from '@/components/submit-button';

import { register, type RegisterActionState } from '../actions';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: 'idle',
    },
  );

  useEffect(() => {
    // Check if state exists and has a status property
    if (!state || typeof state.status === 'undefined') return;
    
    if (state.status === 'user_exists') {
      toast.error('Account already exists');
    } else if (state.status === 'failed') {
      toast.error('Failed to create account');
    } else if (state.status === 'invalid_data') {
      toast.error('Failed validating your submission!');
    } else if (state.status === 'success') {
      toast.success('Account created successfully');
      setIsSuccessful(true);
      router.refresh();
    }
  }, [state, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get('email') as string);
    formAction(formData);
  };

  return (
    <AuthLayout 
      title="Sign Up" 
      subtitle="Create an account with your email and password"
    >
      <AuthForm action={handleSubmit} defaultEmail={email}>
        <SubmitButton isSuccessful={isSuccessful}>Sign Up</SubmitButton>
        <p className="text-center text-sm text-green-300 mt-4">
          {'Already have an account? '}
          <Link
            href="/login"
            className="font-semibold text-white hover:underline hover:text-green-400"
          >
            Sign in
          </Link>
          {' instead.'}
        </p>
      </AuthForm>
    </AuthLayout>
  );
}
