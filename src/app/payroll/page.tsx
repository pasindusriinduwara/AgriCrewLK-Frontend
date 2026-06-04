// app/payroll/page.tsx
"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import { 
  Download, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Filter, 
  Eye 
} from 'lucide-react';

// --- Types ---
type PaymentStatus = 'PAID' | 'PENDING';

interface PayrollRecord {
  id: string;
  employeeId: string;
  name: string;
  initials: string;
  estate: string;
  daysWorked: number;
  basicPay: string;
  netPay: string;
  status: PaymentStatus;
}

export default function PayrollPage() {
  // In a real app, these would be fetched via useEffect from your Supabase backend
  const [payrollData] = useState<PayrollRecord[]>(MOCK_PAYROLL);

  return (
    <div className="min-h-screen bg-[#F8FAFB] font-sans pb-12">
      
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Page Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Payroll Management</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Manage worker salaries and payment distribution
            </p>
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-[#00B87C] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-sm">
            <Download size={18} strokeWidth={2.5} />
            Export Payroll
          </button>
        </div>

        {/* Top Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Total Payroll Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <DollarSign size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1 text-sm">Total Payroll</p>
            <h3 className="text-3xl font-bold text-[#8B5CF6] mb-2">Rs 330,600</h3>
            <p className="text-xs text-purple-600 font-medium">This month</p>
          </div>

          {/* Paid Amount Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#00B87C]"></div>
            <div className="w-12 h-12 bg-emerald-50 text-[#00B87C] rounded-xl flex items-center justify-center mb-4">
              <TrendingUp size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1 text-sm">Paid Amount</p>
            <h3 className="text-3xl font-bold text-[#00B87C] mb-2">Rs 123,500</h3>
            <p className="text-xs text-emerald-600 font-medium">Processed payments</p>
          </div>

          {/* Pending Amount Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-4">
              <Calendar size={24} strokeWidth={2} />
            </div>
            <p className="text-slate-500 font-semibold mb-1 text-sm">Pending Amount</p>
            <h3 className="text-3xl font-bold text-[#F97316] mb-2">Rs 56,600</h3>
            <p className="text-xs text-orange-500 font-medium">Awaiting payment</p>
          </div>

        </div>

        {/* Filters Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Calendar size={20} className="text-slate-400" />
            <select className="bg-white border border-gray-200 text-slate-700 text-sm rounded-lg focus:ring-[#00B87C] focus:border-[#00B87C] block w-full md:w-48 p-2.5 outline-none font-medium appearance-none">
              <option>May</option>
              <option>April</option>
              <option>March</option>
            </select>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select className="bg-white border border-gray-200 text-slate-700 text-sm rounded-lg focus:ring-[#00B87C] focus:border-[#00B87C] block w-full md:w-32 p-2.5 outline-none font-medium appearance-none">
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto ml-auto">
            <Filter size={20} className="text-slate-400" />
            <select className="bg-white border border-gray-200 text-slate-700 text-sm rounded-lg focus:ring-[#00B87C] focus:border-[#00B87C] block w-full md:w-48 p-2.5 outline-none font-medium appearance-none">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-gray-100 font-bold tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4 rounded-tl-2xl">Employee</th>
                  <th scope="col" className="px-6 py-4">Estate</th>
                  <th scope="col" className="px-6 py-4">Days Worked</th>
                  <th scope="col" className="px-6 py-4">Basic Pay</th>
                  <th scope="col" className="px-6 py-4">Net Pay</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4 rounded-tr-2xl">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {payrollData.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50/50 transition-colors bg-white">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#00B87C] text-white flex items-center justify-center font-bold shadow-sm">
                          {record.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800">{record.name}</span>
                          <span className="text-xs text-slate-500 font-medium">EMP{record.employeeId}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-600">
                      {record.estate}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-600">
                      {record.daysWorked} days
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-800">
                      Rs {record.basicPay}
                    </td>
                    <td className="px-6 py-4 font-bold text-[#00B87C]">
                      Rs {record.netPay}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wider ${
                        record.status === 'PAID' 
                          ? 'bg-emerald-50 text-emerald-700' 
                          : 'bg-orange-50 text-orange-600'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 text-[#00B87C] font-semibold hover:text-emerald-700 transition-colors">
                        <Eye size={16} strokeWidth={2.5} />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

// ==========================================
// MOCK DATA BASED ON SCREENSHOT
// ==========================================
const MOCK_PAYROLL: PayrollRecord[] = [
  {
    id: "pay-1",
    employeeId: "001",
    name: "Rajesh Kumar",
    initials: "RK",
    estate: "Green Valley Estate",
    daysWorked: 26,
    basicPay: "65,000",
    netPay: "67,000",
    status: "PAID"
  },
  // Added a couple more realistic rows to populate the table
  {
    id: "pay-2",
    employeeId: "002",
    name: "Priya Fernando",
    initials: "PF",
    estate: "Highland Tea Estate",
    daysWorked: 24,
    basicPay: "52,800",
    netPay: "54,000",
    status: "PAID"
  },
  {
    id: "pay-3",
    employeeId: "003",
    name: "Sunil Perera",
    initials: "SP",
    estate: "Green Valley Estate",
    daysWorked: 22,
    basicPay: "77,000",
    netPay: "75,500",
    status: "PENDING"
  }
];