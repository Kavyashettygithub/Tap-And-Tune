import React, { useState } from 'react'
import FLOWER from './Flower.json'

const Flower = () => {
    let[data,setData]=useState(FLOWER)
    let[pageIndex,setPageIndex]=useState(1)
    let itemsofpage=6

    const handleClick=(text)=>{
        window.speechSynthesis.cancel()
        let speech=new SpeechSynthesisUtterance()
        speech.text=text
        speech.volume=1
        speech.pitch=1
        window.speechSynthesis.speak(speech)
    }

    const lastPageIndex=pageIndex * itemsofpage
    const firstPageIndex=lastPageIndex - itemsofpage
    const currentPage=data.slice(firstPageIndex,lastPageIndex)

    const Totalpages=Math.ceil(data.length/itemsofpage)
    let pages=[]
    for(let i=1;i<=Totalpages;i++){
        pages.push(i)
    }
  return (
    <div>
     <div>
        <ul className='p-6 flex flex-wrap justify-evenly gap-4 '>
            {currentPage.map((flower,idx)=>{
                return(
                    <li key={idx} className='border-b-black border-4 w-100 h-140'>
                    <img src={flower.img} alt="" className='w-100 h-80' />
                    <h1 className='text-center text-2xl font-bold cursor-pointer ' onClick={()=>handleClick(flower.name)}>{flower.name}</h1>
                    <p className='text-justify p-1 cursor-pointer' onClick={()=>handleClick(flower.description)}>{flower.description}</p>
                </li>
                )
            })}
        </ul>
     </div>
     <nav className='flex justify-center flex-wrap gap-2 p-4'>
        {pages.map((page)=>(
                <button key={page} onClick={()=>setPageIndex(page)} className={`px-3 border rounded ${page === pageIndex ? 'bg-blue-500 text-white':'bg-white text-black'} cursor-pointer`}>{page}</button>
        ))
    }
     </nav>
    </div>
  )
}

export default Flower
