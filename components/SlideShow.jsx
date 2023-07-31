"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const SlideShow = () => {
  return (
	<Carousel className='xs:max-w-[900px] xxs:max-w-[359px] m-auto mt-10'>
                <div>
                    <img
					src="../assets/projects/webcse/homepage-cse.jpg" 
					alt='homepage' />
                    
                </div>
                <div>
                    <img src="../assets/projects/webcse/panel.png" alt='panel' />
                    
                </div>
                <div>
                    <img src="../assets/projects/webcse/editadd.jpg" alt='edit-object' />
                    
                </div>
				<div>
                    <img src="../assets/projects/webcse/database.jpg" alt='database'/>
                    
                </div>
    </Carousel>
  )
}
