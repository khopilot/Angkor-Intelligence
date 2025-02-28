'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/images/XtefoH71irGOB6ad-generated_image.jpg"
          alt="AI Angkor Intelligence Logo"
          width={size}
          height={size}
          className="rounded-md object-cover"
          priority
        />
      </div>
    </Link>
  );
} 