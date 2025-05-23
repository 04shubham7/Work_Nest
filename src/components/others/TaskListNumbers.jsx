import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 w-full justify-between gap-5'>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-500'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-green-500'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-[45%]  bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.newtask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers