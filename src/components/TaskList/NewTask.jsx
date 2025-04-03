import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] bg-blue-500 rounded-xl p-5'>

    <div className='flex  justify-between items-center'>
    <h3 className='bg-emerald-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
    <h4 className='text-sm'>{data.date} </h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-5'>{data.description}</p>
    <div className='mt-5 '>
        <button>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask