
import Image from 'next/image';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img
            alt="Logo radio avivamiento"
            src="/logo.jpg"
            width={120}
            height={40}
            className="rounded"
            data-ai-hint="radio wave logo"
          />
          <h1 className="text-2xl font-headline font-bold tracking-tight hidden sm:block">
            Avivamiento La Voz Del Espíritu Santo
          </h1>
        </Link>
        {/* Future: Add theme toggle or user profile icon here */}
      </div>
    </header>
  );
}
