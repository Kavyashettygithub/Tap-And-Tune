import React, { useState } from 'react'
import FRUIT from './Fruit.json'

const Fruit = () => {
    let[data,setData]=useState(FRUIT)
    let[pageIndex,setPageindex]=useState(1)
    let itemsperpage=6

    let lastIndex=pageIndex * itemsperpage
    let firstIndex=lastIndex - itemsperpage
    let currentIndex=data.slice(firstIndex,lastIndex)
    let totatPages=Math.ceil(data.length/itemsperpage)
    let pages=[]
    for(let i=1;i<=totatPages;i++){
      pages.push(i)
    }

    let handleClick=(text)=>{
      window.speechSynthesis.cancel()
      let speech=new SpeechSynthesisUtterance()
      speech.text=text;
      speech.volume=1;
      speech.pitch=1
      window.speechSynthesis.speak(speech)
    }
  return (
    <div>
      <div>
        <ul className='p-6 flex flex-wrap justify-evenly gap-4'>
            {currentIndex.map((fruit,idx)=>{
                return(
                    <li key={idx} className='border-b-black border-4 w-100 h-140'>
                    <img src={fruit.img} alt="" className='w-100 h-80' />
                    <h1 className='text-center text-2xl font-bold cursor-pointer' onClick={()=>handleClick(fruit.name)}>{fruit.name}</h1>
                    <p className='text-justify p-1 cursor-pointer' onClick={()=>handleClick(fruit.description)}>{fruit.description}</p>
                </li>
                )
            })}
        </ul>
      </div>
      <nav className='flex flex-wrap justify-center gap-2 p-4'>
        {pages.map((page)=>(
          <button key={page} onClick={()=>setPageindex(page)} className={` px-3 border rounded ${page==pageIndex ? 'bg-blue-500 text-white':'bg-white text-black'} cursor-pointer`}>{page}</button>
        ))}
      </nav>
    </div>
  )
}

export default Fruit
