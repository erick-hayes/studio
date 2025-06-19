
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Radio, CalendarDays, InfoIcon, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Reproductor', icon: Radio },
  { href: '/schedule', label: 'Horario', icon: CalendarDays },
  { href: '/info', label: 'Información', icon: InfoIcon },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-full h-full p-2 rounded-lg transition-all duration-200 ease-in-out',
                isActive ? 'text-primary scale-110' : 'text-muted-foreground hover:text-accent hover:scale-105',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <item.icon className="w-6 h-6 mb-1" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
