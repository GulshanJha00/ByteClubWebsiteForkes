'use client'
import { useEffect } from 'react';
import gsap from 'gsap';
import Loading from '../Loading/loading';

const FrontLogo = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    
    tl.fromTo(
      ".image",
      { y: -300,
        opacity:0,

       },
      {
        y: 0,
        opacity:1,
        duration: 2.5,
        onComplete: () => {
          gsap.to(".chakri1", {
            rotate: 360,
            duration: 15,
            ease: "linear",
            repeat: -1
          });
        }
      }
    );

    tl.to(".chakri2", {
      rotate: -360,
      duration: 15,
      ease: "linear",
      repeat: -1
    }, "+=0.5"); 


    const boxTl = gsap.timeline({ delay: 4 });

    boxTl.to(".box",{
      x: -400,
      duration: 2.5,
      scale:0.7,

    })

  }, []);

  return (
    <div className="box relative h-[85vh] w-full flex flex-col justify-center items-center">
      <img className='image h-1/2' src="/byte.png" alt="Byte Logo" />
      <img className='chakri1 absolute z-10' src="/whitepng.png" alt="White Chakra" />
      <img className='chakri2 absolute z-10 h-3/4' src="/blue.png" alt="Blue Chakra" />
    </div>
  );
}

export default FrontLogo;
