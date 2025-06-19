import type { ReactNode } from 'react';
import AppHeader from '@/components/AppHeader';
import TabBar from '@/components/TabBar';

export default function MainAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-20 pb-24"> {/* Added padding top/bottom for fixed header/nav */}
        {children}
      </main>
      <TabBar />
    </div>
  );
}
