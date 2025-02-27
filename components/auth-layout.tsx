'use client';

import { KhmerMatrixBackground } from './khmer-matrix-background';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center">
      <KhmerMatrixBackground />
      
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12 bg-black/50 backdrop-blur-md p-8 border border-green-500/30 shadow-lg">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h1 className="text-3xl font-bold text-green-400 mb-2">AI Angkor Intelligence</h1>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-green-300">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
} 