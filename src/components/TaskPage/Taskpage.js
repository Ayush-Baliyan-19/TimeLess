import React from 'react'
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import "./taskpage.css"
const Taskpage = () => {
  const user = useContext(UserContext);
  const location = useLocation();
  const [tasksForId, setTasksForId] = React.useState(null)
  React.useEffect(() => {
    var tasks = user.user.tasksArray.find(task => task._id === location.pathname.split("/")[2])
    console.log(tasks)
    setTasksForId(() => { return tasks })
    // eslint-disable-next-line
  }, [])
  return (
    <div className='pt-[2vh] ml-[17vw] absolute w-[60%] h-full'> {
      tasksForId &&
      <>
        <h1 className='text-xl text-center font-bold text-[#343434] mb-3'>Your Tasks For The Date: {tasksForId.Date}</h1>
        <div className="flex gap-5 w-full flex-col">
        {
          tasksForId.Tasks.map((task) => {
            return (
              <div className="taskrec p-5 border border-pink-400 border-dashed rounded-xl parent">
                  <h3 className='text-lg div1 font-semibold'>{task.Heading}</h3>
                  <p className="objective div2 text-lg">Objective: {task.Objective}</p>  
                  <h3 className='text-lg div3 font-semibold'>{task.Time || "8.00 PM"}</h3>
                  <div className="tags div4 flex gap-3">
                    {task.tags.map((tag) => {
                      return (
                        <div className="tag px-2 py-1 rounded-md" style={{ border: ` 1px solid ${tag.color}`, color: tag.color, opacity: 0.5, borderStyle: "dashed" }}>{tag.tagName}</div>
                      )
                    })}
                  </div>
                </div>
            )
          }
          )
        }
          </div>

      </>
    } </div>
  )
}

export default Taskpage