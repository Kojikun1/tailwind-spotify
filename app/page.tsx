"use client";
import {ChevronLeft , ChevronRight, Play, Menu}  from 'lucide-react';
import Image from 'next/image'
import SideBar from './components/Sidebar';
import Footer from './components/Footer';
import { useState } from 'react';
import albums from './data/albums.json';
export default function Home() {
  const [drawer,changeDrawer] = useState(false)
  return (
    <div className="h-screen flex  flex-col mb-20">
      <div className="flex flex-1">
        <div className={`sm:block ${drawer ? "absolute left-0 top-0 h-full" : "hidden"}`}>
           <SideBar/>
        </div>
        <button className='absolute right-4 top-4 sm:hidden' onClick={() => changeDrawer(!drawer)}>
                <Menu size={48} />
        </button>
        <main className="flex-1 p-6">
          <div className='flex item-center gap-4'>
            <button className='bg-black/40 p-1 rounded-full'>
                <ChevronLeft />
            </button>
            <button className='bg-black/40 p-1 rounded-full'>
                 <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>
            Good Afternoon
          </h1>
          <div className='max-h-80 grid grid-cols-1 gap-4 mt-4 overflow-y-scroll sm:overflow-y-auto sm:grid-cols-2 xl:grid-cols-3 sm:max-h-fit'>
              {
               albums.map( (item, idx )=> {
                  return (
                    <div key={idx} className='flex-shrink-0 bg-white/5 group rounded flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer'>
                    <Image src={item.cover}  height={104} width={104} alt='algum image' className='rounded-l'/>
                     <strong>{item.name}</strong>
                     <button className='rounded-full bg-green-400 p-2 flex justify-center items-center text-black ml-auto mr-8 invisible group-hover:visible transition-all'>
                         <Play className='pl-1' size={28}/>
                     </button>
                  </div>
                  )
                })
              }
          </div>
          <h2 className='font-semibold text-2xl mt-10'>
            Made For Bruno Chen D
          </h2>
          <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4 xl:grid-cols-6'>
            {
             albums.map((item,idx) => {
                return (
                  <div key={idx} className='bg-white/5 p-3 rounded hover:bg-white/10 hover:cursor-pointer flex flex-col gap-2'>
                       <Image src={item.cover} className='w-full' height={120} width={120} alt='algum image'/>
                       <strong className='font-semibold'>{item.name}</strong>
                       <span className='text-sm text-zinc-400'>{item.description}</span>
                  </div>
                )
              })
            }
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
