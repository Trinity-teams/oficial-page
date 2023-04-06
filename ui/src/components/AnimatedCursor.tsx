'use client'

import React, { useEffect, useState } from 'react'


const AnimatedCursor = () => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX - 23, y: event.clientY -25 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <>

      <div
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
        className='flex absolute w-[50px] h-[50px] rounded-full border-2 border-primary' />

    </>
  )
}

export default AnimatedCursor 