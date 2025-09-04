import React from 'react'

const AuthImagePattern = ({title, subtitle}) => {
  return (
    <div className='hidden lg:flex flex-1 items-center justify-center bg-gray-100 p-12'>
        <div className='max-w-md text-center'>
            <div className='grid grid-cols-3 gap-4 mb-8'>
                {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-blue-500/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
             ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
             <p className="text-gray-600">{subtitle}</p>
        </div>
    </div>
  );
};

export default AuthImagePattern;