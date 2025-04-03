import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden flex items-center justify-center'>
      <div
        data-scroll
        data-scroll-speed='-.7'
        className='relative w-full h-screen bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')",
        }}
      >
        <div className='flex gap-5 md:gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col md:flex-row'>
          {[1, 2].map((eye) => (
            <div
              key={eye}
              className='flex items-center justify-center w-24 h-24 md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'
            >
              <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                <div
                  style={{ transform: `rotate(${rotate}deg)` }}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-6 md:h-10'
                >
                  <div className='w-6 h-6 md:w-10 md:h-10 bg-zinc-100 rounded-full'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eyes;