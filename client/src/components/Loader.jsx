import React from 'react'


function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className='flex gap-5 text-6xl font-semibold '>
             <h1 className="text-secondary k">A</h1>
             <h1 className="text-white s">J</h1>
             <h1 className="text-tertiary r">K</h1>
        </div>
    </div>
  )
}

export default Loader