import React from 'react';
import {v1,v2,v3} from "../imagesvideos";
const videos=[v1,v2,v3];

function Header({title,image,type}) {
  return (
    <div className='w-full h-[100vh]'>
        <div className='relative w-full h-full'>
        {
           image ? (<img src={image ?? videos[Math.floor(Math.random() * videos.length)]}
           alt='Hero Image'
           className='w-full h-full object-cover'
         /> ):  <video src={videos[Math.floor(Math.random()* videos.length)]}  autoPlay="true" loop muted alt="receipe videos" className='w-full h-full object-cover'/>

        }
        

        </div>
        <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4'>
            <h1 className='text-pinkwhite text-4xl md:text-5xl text-center font-bold'>{title}</h1>
            {
                type && (
                    <p className='text-sm mt-4 text-center text-pinksha1 bg-peapink px-6 py-4 rounded-full'>
                        Welcome to DelishDishDive, your passport to culinary adventures!
                        <br className='hidden md:block'/>
                        Discover a treasure trove of delectable receipes from around the globe.
                    </p>
                )
            }

        </div>
    </div>
  )
}

export default Header