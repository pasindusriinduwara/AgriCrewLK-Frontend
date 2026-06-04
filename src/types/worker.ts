// types/worker.ts

/**
 * Core specific types using String Unions. 
 * Better than Enums because they have zero runtime overhead and serialize perfectly.
 */
export type WorkerStatus = 'ACTIVE' | 'INACTIVE';
export type WorkerType = 'PERMANENT' | 'CASUAL';
export type CropType = 'TEA' | 'RUBBER' | 'MIXED';

/**
 * ==========================================
 * DATABASE MODELS (Supabase / PostgreSQL)
 * ==========================================
 * Exactly matches your database schema.
 * Uses snake_case.
 */
export interface WorkerDB {
  readonly id: string;         // UUID (Should never be changed by the frontend)
  full_name: string;
  status: WorkerStatus | null; // Databases often return null, be prepared for it
  worker_type: WorkerType;
  contact: string | null;
  address: string | null;
  estate_id?: string | null;   // Optional/Nullable depending on the query
  joined_date: string | null;  // Usually an ISO string from Postgres
  created_at?: string;
}

/**
 * ==========================================
 * UI MODELS (Frontend Components)
 * ==========================================
 * Clean, safe data ready to be rendered.
 * Mapped to camelCase, with no null values.
 */
export interface WorkerUI {
  readonly id: string;
  readonly displayId: string;  // e.g., 'EMP-A1B2'
  name: string;
  status: WorkerStatus;        // Fallbacks applied during mapping, never null here
  estate: string;
  crop: CropType;
  role: string;
  phone: string;
  location: string;
  joinedDate: string;          // Formatted for display: 'Jan 15, 2024'
  dailyRate: string;
}

/**
 * ==========================================
 * API PAYLOADS (Mutations)
 * ==========================================
 * Types for when you are sending data BACK to the database.
 */

// When creating a worker, we don't send the 'id' or 'created_at' 
// because Supabase generates those automatically.
export type CreateWorkerDTO = Omit<WorkerDB, 'id' | 'created_at'>;

// When updating a worker, every field is optional. 
// (e.g., You might only want to update their 'status' or 'address')
export type UpdateWorkerDTO = Partial<CreateWorkerDTO>;