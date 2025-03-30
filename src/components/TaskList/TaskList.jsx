import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='overflow-x-auto flex items-center px-5 justify-start gap-7 h-[55%] py-5 w-full bg-gray-300 mt-10 flex-nowrap'>
         <div className='flex-shrink-0 h-full w-[400px] bg-red-400 rounded-xl p-5'>

                <div className='flex  justify-between items-center'>
                <h3 className='bg-emerald-500 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores dicta eius laborum recusandae optio.</p>
         </div>
         <div className='flex-shrink-0 h-full w-[400px] bg-blue-500 rounded-xl p-5'>

                <div className='flex  justify-between items-center'>
                <h3 className='bg-emerald-500 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores dicta eius laborum recusandae optio.</p>
         </div>
         <div className='flex-shrink-0 h-full w-[400px] bg-green-500 rounded-xl p-5'>

                <div className='flex  justify-between items-center'>
                <h3 className='bg-emerald-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores dicta eius laborum recusandae optio.</p>
         </div>
         <div className='flex-shrink-0 h-full w-[400px] bg-yellow-400 rounded-xl p-5'>

                <div className='flex  justify-between items-center'>
                <h3 className='bg-emerald-500 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Feb 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores dicta eius laborum recusandae optio.</p>
         </div>
          

         </div>
  )
}


export default TaskList