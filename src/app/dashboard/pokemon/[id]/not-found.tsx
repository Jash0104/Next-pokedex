
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <main className="flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
          <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
              Pokemon Not Found
          </div>
          <button className="mt-5">
              <span className="relative block px-8 py-3 border-current border-[#1A2238] border-2 rounded-md">
              <Link href="/dashboard/pokemons" className='font-semibold'>Go to pokemon List</Link>
              </span>
          </button>
      </main> 
    </div>
  )
}