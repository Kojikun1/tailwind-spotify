"use client";
import { useState } from "react";
import {
  SkipBack,
  SkipForward,
  Play,
  Shuffle,
  Repeat,
  Pause,
  Mic2,
  LayoutList,
  Laptop2,
  Volume1,
  Volume2,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
export default function Footer() {
  const [player, setPlayer] = useState(false);

  function rangeInputChange(e: any) {
    console.log(e.target.value);
  }

  return (
    <footer className="bg-zinc-800 broder-t border-zinc-700 p-2 sm:px-6 sm:py-4 flex items-center justify-center sm:justify-between fixed bottom-0 left-0 right-0">
      <div className="hidden sm:flex items-center gap-3 w-80">
        <Image
          src="/images/album-1.jpg"
          height={48}
          width={48}
          alt="algum image"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Fighters</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button>
            <Shuffle size={20} className="text-zinc-200 hover:text-zinc-400" />
          </button>
          <button>
            <SkipBack size={20} className="text-zinc-200 hover:text-zinc-400" />
          </button>
          <button
            onClick={() => setPlayer(!player)}
            className="rounded-full bg-white p-2 flex justify-center items-center text-black hover:bg-white/80"
          >
            {player ? <Play className="pl-1" size={28} /> : <Pause size={28} />}
          </button>
          <button>
            <SkipForward
              size={20}
              className="text-zinc-200 hover:text-zinc-400"
            />
          </button>
          <button>
            <Repeat size={20} className="text-zinc-200 hover:text-zinc-400" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">1:31</span>
          {/* <div
            className="h-1 w-72 sm:w-96 bg-zinc-600 rounded-full group hover:h-1.5 cursor-pointer">
            <div className="bg-zinc-200 h-1 w-48 rounded full group-hover:h-1.5"></div>
          </div> */}
          <input type="range" id="song" name="song" min="0" max="100" onChange={rangeInputChange} className="h-1 w-72 bg-zinc-600"></input>
          <span className="text-xs text-zinc-400">3:12</span>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-4 w-80">
        <button className="text-zinc-200 hover:text-zinc-400">
          <Mic2 size={20} />
        </button>
        <button className="text-zinc-200 hover:text-zinc-400">
          <LayoutList size={20} />
        </button>
        <button className="text-zinc-200 hover:text-zinc-400">
          <Laptop2 size={20} />
        </button>
        <div className="flex items-center gap-2">
          <button className="text-zinc-200 hover:text-zinc-400">
            <Volume1 size={20} />
          </button>
          {/* <div className="h-1 w-24  bg-zinc-600 rounded-full group hover:h-1.5 hover:cursor-pointer">
            <div className="bg-zinc-200 h-1 w-20 rounded full group-hover:h-1.5"></div>
          </div> */}
          <input type="range" id="song" name="song" min="0" max="100" className="h-1 w-24"></input>
          <button className="text-zinc-200 hover:text-zinc-400">
            <Volume2 size={20} />
          </button>
        </div>
        <button className="text-zinc-200 hover:text-zinc-400">
          <Maximize2 size={20} />
        </button>
      </div>
    </footer>
  );
}
