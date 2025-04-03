import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='overflow-x-auto flex items-center px-5 justify-start gap-7 h-[55%] py-5 w-full bg-gray-300 mt-10 flex-nowrap'>
            {data.tasks.map((elem,idx) => {
              if(elem.active){
                     return <AcceptTask key={idx} data={elem} />
              }
              if(elem.newtask){
                     return <NewTask key={idx} data={elem}/>
              }
              if(elem.completed){
                     return <CompleteTask key={idx} data={elem}/>
              }
              if(elem.failed){
                     return <FailedTask key={idx} data={elem}/>
              }
            })}
          

         </div>
  )
}


export default TaskList