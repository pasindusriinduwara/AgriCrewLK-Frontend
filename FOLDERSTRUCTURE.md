agricrewlk-frontend/
├── .env.local                    # NEXT_PUBLIC_API_URL (Do not commit to GitHub)
├── .gitignore
├── package.json
└── src/
    ├── app/                      # Replaces the old /pages directory
    │   ├── (auth)/               # Route group for authentication
    │   │   └── login/
    │   │       └── page.tsx      # /login route
    │   ├── (dashboard)/          # Route group for the main application
    │   │   ├── workers/          
    │   │   │   └── page.tsx      # /workers route
    │   │   ├── attendance/       
    │   │   │   └── page.tsx      # /attendance route
    │   │   ├── payroll/          
    │   │   │   └── page.tsx      # /payroll route
    │   │   ├── layout.tsx        # Shared layout (Navbar/Sidebar) for dashboard
    │   │   └── page.tsx          # Main dashboard view (index)
    │   ├── layout.tsx            # Global root layout
    │   └── page.tsx              # Landing page / Root redirect
    │
    ├── components/               # UI Components
    │   ├── layout/               
    │   │   └── Navbar.tsx        # Adapted from Navbar.jsx
    │   ├── workers/              
    │   │   └── WorkerCard.tsx    # Adapted from WorkerCard.jsx
    │   ├── attendance/           
    │   │   └── AttendanceRow.tsx # Adapted from AttendanceRow.jsx
    │   └── payroll/              
    │       └── PayslipModal.tsx  # Adapted from PayslipModal.jsx
    │
    ├── services/                 # Axios API calls to your Node.js backend
    │   ├── api.ts                # Axios base configuration
    │   ├── workerService.ts      
    │   ├── attendanceService.ts  
    │   └── payrollService.ts     
    │
    ├── hooks/                    # Custom React hooks for data fetching/state
    │   ├── useWorkers.ts         
    │   ├── useAttendance.ts      
    │   └── useAuth.ts            
    │
    ├── types/                    # TypeScript interfaces
    │   └── index.ts              # Define shapes for Worker, Attendance, etc.
    │
    └── lib/                      # Utility functions
        └── utils.ts              # Tailwind class mergers, date formatters