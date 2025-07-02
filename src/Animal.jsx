import React, { useEffect, useState, useRef } from 'react'
import Animals from './Animal.json'

const Animal = () => {
  let[data,setData]=useState(Animals)
  const audioRef=useRef(null)

  const[currentPage,setCurrentpage]=useState(1)
  const itemspage=6

  const lastPageIndex=currentPage*itemspage
  const firstPageIndex=lastPageIndex-itemspage
  const thisPage=data.slice(firstPageIndex,lastPageIndex)
  const totalPages=Math.ceil(data.length/itemspage)

  const pages=[]
  for(let i=1;i<=totalPages;i++){
    pages.push(i)
  }

  let handleClick=(text)=>{
    if(audioRef.current){
      audioRef.current.pause()
    }
    window.speechSynthesis.cancel()
      let speech= new SpeechSynthesisUtterance()
      speech.text=text
      speech.volume=1
      speech.pitch=1
      window.speechSynthesis.speak(speech)
  }

  let imghandleClick=(audio)=>{
    if(audioRef.current){
      audioRef.current.pause()
    }
    window.speechSynthesis.cancel()
    const audioData= new Audio(audio)
    audioData.play()
    audioRef.current=audioData
  }

  return (
      <div>
        <div>
        <ul className='p-6  flex justify-evenly flex-wrap gap-4'>
         {thisPage.map((ele,idx)=>{
          return(
            <li key={idx} className='border-b-black border-4 w-100 h-160'>
            <img src={ele.img} alt="" className='w-100 h-100 cursor-pointer' onClick={()=>imghandleClick(ele.sound)}  />
            <h1 className='text-center text-2xl font-bold cursor-pointer' onClick={()=>handleClick(ele.Name)}>{ele.Name} </h1>
            <p className='text-justify p-1 cursor-pointer' onClick={()=>handleClick(ele.description)}>{ele.description}</p>
          </li>
          )
         })}
        </ul> 
       </div>
      <nav className='flex flex-wrap justify-center gap-2 p-4'>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentpage(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'
            } cursor-pointer` }
          >
            {page}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Animal
