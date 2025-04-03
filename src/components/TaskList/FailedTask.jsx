import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] bg-yellow-400 rounded-xl p-5'>

    <div className='flex  justify-between items-center'>
    <h3 className='bg-emerald-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-5'>{data.description}</p>
<div>
    <div className=' mt-5'>
        <button className='bg-red-500 py-1 px-2 text-sm '>Mark as Failed</button>
    </div>
</div>

</div>
  )
}

export default FailedTask