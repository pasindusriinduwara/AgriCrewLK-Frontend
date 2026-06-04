// components/WorkerCard.tsx
import React from 'react';
import { Phone, MapPin, Calendar, SquarePen, Trash2 } from 'lucide-react';
import { WorkerUI } from '@/types/worker';

interface WorkerCardProps {
  worker: WorkerUI;
}

export default function WorkerCard({ worker }: WorkerCardProps) {
  const initials = worker.name 
    ? worker.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'WK';

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow font-sans w-full max-w-sm">
      
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <div className="w-14 h-14 bg-[#00B87C] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
              {initials}
            </div>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full ${worker.status === 'ACTIVE' ? 'bg-[#00B87C]' : 'bg-red-400'}`}></div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 leading-tight">
              {worker.name}
            </h3>
            <span className="text-xs text-slate-400 font-medium mt-0.5">
              EMP-{worker.displayId}
            </span>
          </div>
        </div>

        <div className={`px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wider ${worker.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
          {worker.status}
        </div>
      </div>

      <div className="mt-4 inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl">
        {worker.estate} • {worker.crop}
      </div>

      <div className="mt-4 p-4 bg-slate-50 rounded-2xl flex flex-col gap-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-slate-500 font-medium">Role</span>
          <span className="text-sm text-slate-800 font-bold">{worker.role}</span>
        </div>
        
        <div className="flex items-center gap-3 text-slate-600">
          <Phone size={16} className="text-slate-400" />
          <span className="text-sm font-medium">{worker.phone}</span>
        </div>
        
        <div className="flex items-center gap-3 text-slate-600">
          <MapPin size={16} className="text-slate-400" />
          <span className="text-sm font-medium">{worker.location}</span>
        </div>
        
        <div className="flex items-center gap-3 text-slate-600">
          <Calendar size={16} className="text-slate-400" />
          <span className="text-sm font-medium">{worker.joinedDate}</span>
        </div>
      </div>

      <div className="w-full h-px bg-gray-50 my-4"></div>

      <div className="flex justify-between items-center">
        <div className="bg-emerald-50 px-4 py-2 rounded-xl flex flex-col">
          <span className="text-[11px] text-emerald-700 font-semibold mb-0.5">Daily Rate</span>
          <span className="text-base text-emerald-800 font-bold">Rs {worker.dailyRate}</span>
        </div>

        <div className="flex gap-3 pr-2">
          <button className="text-slate-400 hover:text-blue-600 transition-colors p-1" aria-label="Edit">
            <SquarePen size={20} />
          </button>
          <button className="text-slate-400 hover:text-red-500 transition-colors p-1" aria-label="Delete">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}