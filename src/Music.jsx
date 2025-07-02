import React, { useRef, useState } from 'react'
import MUSIC from './Music.json'

const Music = () => {
    let[data,setData]=useState(MUSIC)
    let audioRef=useRef(null)
    let[pageIndex,setPageindex]=useState(1)
    let itemsofPage=6

    let lastPageIndex= pageIndex * itemsofPage
    let firstPageIndex= lastPageIndex - itemsofPage
    let currentPage=data.slice(firstPageIndex,lastPageIndex)
    let Totalpages=Math.ceil(data.length/itemsofPage)
    let pages=[]
    for(let i=1;i<=Totalpages;i++){
        pages.push(i)
    }

    let handleClick=(text)=>{
        if(audioRef.current){
            audioRef.current.pause()
        }
        window.speechSynthesis.cancel()
        let speech=new SpeechSynthesisUtterance()
        speech.text=text;
        speech.volume=1;
        speech.pitch=1
        window.speechSynthesis.speak(speech)
    }

    let audioClick=(audio)=>{
        if(audioRef.current){
            audioRef.current.pause()
        }
            window.speechSynthesis.cancel()
            let audioData=new Audio(audio)
            audio.play()
        audioRef.current=audioData
    }
  return (
    <div>
      <div>
        <ul className='p-6 flex flex-wrap justify-evenly gap-4'>
            {currentPage.map((music,idx)=>{
                return(
                    <li key={idx} className='border-b-black border-4 w-100 h-140'>
                    <img src={music.img} alt="" className='w-100 h-80 cursor-pointer' onClick={()=>audioClick(music.sound)} />
                    <h1 className='text-center text-2xl font-bold cursor-pointer' onClick={()=>handleClick(music.name)}>{music.name}</h1>
                    <p className='text-justify p-1 cursor-pointer'onClick={()=>handleClick(music.description)}>{music.description}</p>
                </li>
                )
            })}
        </ul>
      </div>
      <nav className='flex justify-center flex-wrap gap-2 p-4'>
        {pages.map((page,idx)=>(
            <button key={idx} onClick={()=>setPageindex(page)}className={`px-3 border rounded ${page === pageIndex ? 'bg-blue-500 text-white':'bg-white text-black'} cursor-pointer`}>{page}</button>
        ))}
      </nav>
    </div>
  )
}

export default Music
