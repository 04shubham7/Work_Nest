import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
const authData= useContext(AuthContext)

console.log(authData)
  return (
    
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-60'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 w-1/5 text-xl font-medium '>Employee Name</h2>
        <h3 className='w-1/5 w-1/5 text-xl font-medium '>New Task</h3>
        <h5 className='w-1/5 w-1/5 text-xl font-medium '>Active Task</h5>
        <h5 className='w-1/5 w-1/5 text-xl font-medium '>Completed</h5>
        <h5 className='w-1/5 w-1/5 text-xl font-medium '>Failed</h5>
        </div>
     <div className=' overflow-auto'>
     {authData.employees.map(function(elem){
        return <div className='border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-xl font-medium text-white'>{elem.firstname}</h2>
        <h3 className='w-1/5 text-xl font-medium text-blue-600'>{elem.taskNumbers.newtask}</h3>
        <h5 className='w-1/5 text-xl font-medium text-yellow-400'>{elem.taskNumbers.active}</h5>
        <h5 className='w-1/5 text-xl font-medium text-green-600'>{elem.taskNumbers.completed}</h5>
        <h5 className='w-1/5 text-xl font-medium text-red-600'>{elem.taskNumbers.failed}</h5>
        </div>
        })}
     </div>
      
        
    </div>
  )
}

export default AllTask