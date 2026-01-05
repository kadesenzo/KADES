
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative flex items-center justify-center mb-1">
        <span className="text-4xl md:text-5xl font-black text-[#A32121] leading-none select-none italic" style={{ fontFamily: 'Montserrat' }}>
          K
          <span className="relative -ml-2 text-3xl md:text-4xl align-top inline-block" style={{ top: '-4px' }}>$</span>
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl md:text-2xl font-black tracking-widest text-[#A32121]" style={{ fontFamily: 'Montserrat' }}>KADES</span>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-white -mt-1">NETWORK</span>
      </div>
    </div>
  );
};
