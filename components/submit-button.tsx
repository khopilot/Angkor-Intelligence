'use client';

import { useFormStatus } from 'react-dom';
import { MatrixLoading } from './matrix-loading';
import { Button } from './ui/button';

export function SubmitButton({
  children,
  isSuccessful,
}: {
  children: React.ReactNode;
  isSuccessful: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending || isSuccessful}
      disabled={pending || isSuccessful}
      className="relative bg-green-600 hover:bg-green-700 text-black font-bold mt-2"
    >
      {children}

      {(pending || isSuccessful) && (
        <span className="absolute right-4">
          <MatrixLoading />
        </span>
      )}

      <output aria-live="polite" className="sr-only">
        {pending || isSuccessful ? 'Loading' : 'Submit form'}
      </output>
    </Button>
  );
}
