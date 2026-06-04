import React from 'react';
import Header from '@/components/Header'; // Adjust this import path if needed
import { Users, Clock, CircleDollarSign, TrendingUp, Calendar } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] font-sans">

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Page Title & Date Picker */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-1">Dashboard</h2>
            <p className="text-slate-500 font-medium">Complete overview of your estate operations</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-slate-700 px-4 py-2.5 rounded-lg shadow-sm font-medium hover:bg-slate-50 transition-colors">
            <Calendar size={18} className="text-slate-400" />
            June 2, 2026
          </button>
        </div>

        {/* Top Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Users size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1">Total Workers</p>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">248</h3>
            <p className="text-sm text-slate-400">+12 this month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <Clock size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1">Present Today</p>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">232</h3>
            <p className="text-sm text-slate-400">93.5% attendance</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <CircleDollarSign size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1">Monthly Payroll</p>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">Rs 495K</h3>
            <p className="text-sm text-slate-400">+2.1% from last month</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1">Active Estates</p>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">8</h3>
            <p className="text-sm text-slate-400">2 rubber, 6 tea</p>
          </div>

        </div>

        {/* Bottom Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bar Chart Section */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:col-span-2">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Weekly Attendance</h3>
                <p className="text-slate-500 font-medium text-sm">Last 6 days overview</p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-lg">
                This Week
              </span>
            </div>
            
            {/* CSS-Only Bar Chart Representation */}
            <div className="relative h-64 flex items-end justify-between px-2 gap-4 pb-6">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pb-6 text-xs text-slate-400">
                <div className="w-full border-b border-dashed border-gray-200 flex items-center"><span className="-translate-y-2 -translate-x-6 absolute">100</span></div>
                <div className="w-full border-b border-dashed border-gray-200 flex items-center"><span className="-translate-y-2 -translate-x-5 absolute">75</span></div>
                <div className="w-full border-b border-dashed border-gray-200 flex items-center"><span className="-translate-y-2 -translate-x-5 absolute">50</span></div>
                <div className="w-full border-b border-dashed border-gray-200 flex items-center"><span className="-translate-y-2 -translate-x-5 absolute">25</span></div>
              </div>
              
              {/* Bars */}
              <div className="w-full bg-emerald-500 rounded-t-lg relative z-10 hover:bg-emerald-600 transition-colors cursor-pointer" style={{ height: '85%' }}></div>
              <div className="w-full bg-emerald-500 rounded-t-lg relative z-10 hover:bg-emerald-600 transition-colors cursor-pointer" style={{ height: '90%' }}></div>
              <div className="w-full bg-emerald-500 rounded-t-lg relative z-10 hover:bg-emerald-600 transition-colors cursor-pointer" style={{ height: '82%' }}></div>
              <div className="w-full bg-emerald-500 rounded-t-lg relative z-10 hover:bg-emerald-600 transition-colors cursor-pointer" style={{ height: '92%' }}></div>
              <div className="w-full bg-emerald-500 rounded-t-lg relative z-10 hover:bg-emerald-600 transition-colors cursor-pointer" style={{ height: '88%' }}></div>
              <div className="w-full bg-emerald-500 rounded-t-lg relative z-10 hover:bg-emerald-600 transition-colors cursor-pointer" style={{ height: '75%' }}></div>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:col-span-1">
            <h3 className="text-xl font-bold text-slate-800 mb-1">Estate Distribution</h3>
            <p className="text-slate-500 font-medium text-sm mb-8">By property type</p>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-emerald-500 font-medium mb-4">60%</span>
              
              {/* CSS-Only Pie Chart Representation */}
              <div className="relative w-48 h-48 rounded-full shadow-inner" style={{ background: 'conic-gradient(#10b981 0% 60%, #1e293b 60% 100%)' }}>
                 {/* Inner circle to make it a donut if desired, or leave solid for pie */}
                 <div className="absolute inset-0 rounded-full border-4 border-white flex items-end justify-start">
                    {/* Visual styling lines for pie slice separation */}
                    <div className="w-1/2 h-px bg-white absolute top-1/2 left-0 origin-right -rotate-12"></div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}