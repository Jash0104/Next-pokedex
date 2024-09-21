
import { Sidebar } from '@/components'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-slate-100 w-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex h-full w-full">

        <Sidebar />

        <div className="w-11/12 text-slate-900 flex items-center justify-center">
            <main className="flex flex-col justify-center items-center">
                <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <span className="relative block px-8 py-3 border-current border-[#1A2238] border-2 rounded-md">
                    <Link href="/dashboard/main" className=' font-semibold'>Go Back</Link>
                    </span>
                </button>
            </main> 
        </div>

      </div>
    </div>
  )
}