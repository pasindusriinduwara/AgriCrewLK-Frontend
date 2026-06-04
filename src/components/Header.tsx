// components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Leaf, LayoutDashboard, Users, Clock, 
  CircleDollarSign, Bell, Settings, ChevronDown, LucideIcon
} from 'lucide-react';

// Define the type for our navigation links
interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Workers', href: '/workers', icon: Users },
  { name: 'Attendance', href: '/attendance', icon: Clock },
  { name: 'Payroll', href: '/payroll', icon: CircleDollarSign },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 w-full font-sans sticky top-0 z-50">
      
      <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-xl shadow-sm">
          <Leaf size={22} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-800 leading-tight">
            Estate Manager Pro
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Rubber & Tea Estate Management
          </p>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-2 lg:gap-4">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link 
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                isActive 
                  ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Icon size={18} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-5 lg:gap-6">
        <div className="flex items-center gap-4 text-slate-500">
          <button className="relative hover:text-slate-800 transition-colors" aria-label="Notifications">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <button className="hover:text-slate-800 transition-colors" aria-label="Settings">
            <Settings size={20} />
          </button>
        </div>

        <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

        <button className="flex items-center gap-3 hover:bg-slate-50 p-1 pr-2 rounded-lg transition-colors text-left">
          <div className="flex items-center justify-center w-9 h-9 bg-purple-600 text-white font-bold text-sm rounded-full">
            JD
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-slate-800 leading-tight">
              John Doe
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Estate Owner
            </span>
          </div>
          <ChevronDown size={16} className="text-slate-400 ml-1" />
        </button>
      </div>
    </header>
  );
}