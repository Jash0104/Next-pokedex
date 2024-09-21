import { Sidebar } from "@/components";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-slate-100 w-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex h-full w-full">

        <Sidebar />

        <div className="w-11/12 text-slate-900">
          { children }  
        </div>

      </div>
    </div>
  );
}