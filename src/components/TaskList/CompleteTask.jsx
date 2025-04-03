import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] bg-green-500 rounded-xl p-5'>

    <div className='flex  justify-between items-center'>
    <h3 className='bg-emerald-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
    <h4 className='text-sm'>{data.date} </h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-5'>{data.description}</p>

    <div className='mt-5 '>
        <button className='w-full py-1 px-2 text-sm '>Completed</button>

    </div>
</div>
  )
}

export default CompleteTask