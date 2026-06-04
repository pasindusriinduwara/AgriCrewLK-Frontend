// app/workers/page.tsx
"use client";

import React, { useState } from 'react';
import useSWR from 'swr';
import WorkerCard from '@/components/WorkerCard';
import { WorkerUI, WorkerDB } from '@/types/worker';
import { Search, Plus, Filter } from 'lucide-react';

// 1. Define the SWR Fetcher
// This function tells SWR how to get the data and parse the JSON
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch workers');
  const json = await res.json();
  return json.data; // Your Express controller sends the array inside 'data'
};

export default function WorkersPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 2. Fetch data using SWR
  // SWR automatically handles the isLoading and error states for us!
  const { data: rawWorkers, error, isLoading } = useSWR<WorkerDB[]>(
    'http://localhost:5001/api/v1/workers', 
    fetcher
  );

  // 3. Map Database Data to UI Data safely
  const workers: WorkerUI[] = rawWorkers ? rawWorkers.map((dbWorker) => ({
    id: dbWorker.id,
    displayId: dbWorker.id.substring(0, 6).toUpperCase(),
    name: dbWorker.full_name,
    status: dbWorker.status || 'ACTIVE',
    estate: "Main Estate", // Placeholder until you join the estates table
    crop: "MIXED", 
    role: dbWorker.worker_type === 'CASUAL' ? 'Tapper' : 'Supervisor',
    phone: dbWorker.contact || "No Contact",
    location: dbWorker.address || "No Address",
    joinedDate: dbWorker.joined_date 
      ? new Date(dbWorker.joined_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : "Unknown",
    dailyRate: "2,500" // Placeholder until wage logic is added
  })) : [];

  // 4. Filter the mapped data
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

        {/* Error State */}
        {error && (
          <div className="w-full p-4 mb-6 bg-red-50 border border-red-100 rounded-xl text-red-600 font-medium">
            Failed to load workers. Make sure your Express server is running on port 5001.
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="w-full h-64 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-4 border-emerald-100 border-t-[#00B87C] rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium text-sm">Loading workforce data...</p>
          </div>
        ) : !error && (
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