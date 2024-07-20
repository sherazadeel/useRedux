import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
            <div className='border-2 border-black border-solid w-[100px] rounded-full h-[100px] animate-spin'>
                <div className='border-2 border-black border-solid rounded-full w-[95%] h-[95%]'></div>
            </div>
    </div>
  )
}

export default Loader