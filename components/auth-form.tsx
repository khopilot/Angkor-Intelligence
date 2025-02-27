import Form from 'next/form';

import { Input } from './ui/input';
import { Label } from './ui/label';

export function AuthForm({
  action,
  children,
  defaultEmail = '',
}: {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  children: React.ReactNode;
  defaultEmail?: string;
}) {
  return (
    <Form action={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="email"
          className="text-green-300 font-normal"
        >
          Email Address
        </Label>

        <Input
          id="email"
          name="email"
          className="bg-black/50 border-green-500/50 text-white focus:border-green-400 focus:ring-green-400/20 text-md md:text-sm"
          type="email"
          placeholder="user@aiangkor.com"
          autoComplete="email"
          required
          autoFocus
          defaultValue={defaultEmail}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className="text-green-300 font-normal"
        >
          Password
        </Label>

        <Input
          id="password"
          name="password"
          className="bg-black/50 border-green-500/50 text-white focus:border-green-400 focus:ring-green-400/20 text-md md:text-sm"
          type="password"
          required
        />
      </div>

      {children}
    </Form>
  );
}
