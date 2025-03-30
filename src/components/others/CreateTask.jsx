import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded '>
    <form className='flex flex-wrap items-start w-full justify-between'>
        <div className='w-1/2'>
        <div>
        <h3 className='text-gray-300 text-sm mb-0.5'>Task Title</h3>
        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
        </div>
        <div>
        <h3 className='text-gray-300 text-sm mb-0.5'>Date</h3>
        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-300' type="date" placeholder=''/>
        </div>
        <div>
        <h3 className='text-gray-300 text-sm mb-0.5'>Assign To</h3>
        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
        </div>
        <div>
        <h3 className='text-gray-300 text-sm mb-0.5'>Category</h3>
        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Design,Dev,etc'/>
        </div>
        </div>
        
        <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea className='w-full h-56 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-300' name="" id=""></textarea>
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full text-white'>Create Task</button>
        </div>
     
        
        
    </form>
</div>
  )
}

export default CreateTask