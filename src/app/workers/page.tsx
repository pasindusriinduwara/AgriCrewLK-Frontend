// app/workers/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import WorkerCard from '@/components/WorkerCard';
import { WorkerUI } from '@/types/worker';
import { Search, Plus, Filter } from 'lucide-react';

export default function WorkersPage() {
  const [workers, setWorkers] = useState<WorkerUI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      try {
        // When ready, replace the setTimeout block with your real backend fetch:
        // const res = await fetch('http://localhost:5001/api/v1/workers');
        // const result = await res.json();
        
        setTimeout(() => {
          setWorkers(MOCK_WORKERS);
          setIsLoading(false);
        }, 600); 

      } catch (error) {
        console.error("Failed to fetch workers", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredWorkers = workers.filter(worker => 
    worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    worker.displayId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFB] font-sans pb-12">
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Page Title Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Workers Directory</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Manage your estate workforce, roles, and daily rates.
            </p>
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-[#00B87C] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-sm">
            <Plus size={18} strokeWidth={2.5} />
            Add Worker
          </button>
        </div>

        {/* Search and Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-slate-600 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="w-full h-64 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-4 border-emerald-100 border-t-[#00B87C] rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium text-sm">Loading workforce data...</p>
          </div>
        ) : (
          /* The Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredWorkers.length > 0 ? (
              filteredWorkers.map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-slate-500 font-medium">No workers found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

const MOCK_WORKERS: WorkerUI[] = [
  {
    id: "uuid-1", displayId: "EMP001", name: "Rajesh Kumar", status: "ACTIVE",
    estate: "Green Valley Estate", crop: "RUBBER", role: "Tapper",
    phone: "+94 77 123 4567", location: "Kandy", joinedDate: "Jan 15, 2024", dailyRate: "2,500"
  },
  {
    id: "uuid-2", displayId: "EMP002", name: "Priya Fernando", status: "ACTIVE",
    estate: "Highland Tea Estate", crop: "TEA", role: "Plucker",
    phone: "+94 77 234 5678", location: "Nuwara Eliya", joinedDate: "Feb 1, 2024", dailyRate: "2,200"
  },
  {
    id: "uuid-3", displayId: "EMP003", name: "Sunil Perera", status: "ACTIVE",
    estate: "Green Valley Estate", crop: "RUBBER", role: "Supervisor",
    phone: "+94 77 345 6789", location: "Kandy", joinedDate: "Nov 20, 2023", dailyRate: "3,500"
  },
  {
    id: "uuid-4", displayId: "EMP004", name: "Kamala Silva", status: "ACTIVE",
    estate: "Mountain View Tea", crop: "TEA", role: "Plucker",
    phone: "+94 71 456 7890", location: "Badulla", joinedDate: "Mar 10, 2024", dailyRate: "2,200"
  },
  {
    id: "uuid-5", displayId: "EMP005", name: "Nimal Jayawardena", status: "ACTIVE",
    estate: "Riverside Rubber", crop: "RUBBER", role: "Tapper",
    phone: "+94 72 567 8901", location: "Kegalle", joinedDate: "Dec 05, 2023", dailyRate: "2,500"
  },
  {
    id: "uuid-6", displayId: "EMP006", name: "Sandya Wickramasinghe", status: "INACTIVE",
    estate: "Highland Tea Estate", crop: "TEA", role: "Plucker",
    phone: "+94 78 678 9012", location: "Nuwara Eliya", joinedDate: "Aug 12, 2023", dailyRate: "2,200"
  }
];