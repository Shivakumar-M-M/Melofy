import React from 'react'
import assets from '../assets/assets'
import { songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex  items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        {/* {songsData.map((song)=>
        (
          <div id={song.id}>
            <img src={song.image}></img>
          </div>  
        ))} */}
        <img  className='w-12' src={songsData[0].image} alt=""></img>
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)} </p>
        </div>
        
      </div>
      <div className='flex flex-col items-center gap-2 m-auto'>
        <div className='flex gap-4 '>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon}></img>
            <img className='w-4 cursor-pointer' src={assets.prev_icon}></img>
            <img className='w-4 cursor-pointer' src={assets.play_icon}></img>
            <img className='w-4 cursor-pointer' src={assets.next_icon}></img>
            <img className='w-4 cursor-pointer' src={assets.loop_icon}></img>
        </div>
        <div className='flex items-center gap-5'>
            <p> 1:6</p>
            <div className='w-[60vw] max-w-[500px] bg-gray-300  rounded-full cursor-pointer'>
                <hr className='h-1 border-none w-20 bg-green-800 rounded-full '></hr>
            </div>
            <p>3:20</p>
        </div>
   
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className="w-4 " src={assets.plays_icon}></img>
        <img className="w-4 " src={assets.mic_icon}></img>
        <img className="w-4 " src={assets.queue_icon}></img>
        <img className="w-4 " src={assets.speaker_icon}></img>
        <img className="w-4 " src={assets.volume_icon}></img>
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className="w-4 " src={assets.mini_player_icon}></img>
        <img className="w-4 " src={assets.zoom_icon}></img>
      

      </div>
      
    </div>
  )
}

export default Player
