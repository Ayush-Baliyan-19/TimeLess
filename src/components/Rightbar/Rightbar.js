import React,{useContext} from 'react'
import './Rightbar.scss'
import UserContext from '../../Context/UserContext'


const Rightbar = () => {
  const user= useContext(UserContext);
  return (
    <div className='rightbar-main'>
      <div className="rightbar-con">
          <h3>Calender</h3>
        <div className="rightbar-sec">
          {user.user.tasksArray.map((tasksbig)=>{
            return (
              <>
                <p className='rightbar-date'>{tasksbig.Date}</p>
                {tasksbig.Tasks.map((task)=>{
                  return(
                    <RightbarCard task={task} key={task.TaskID}/>
                    )
                  })}
              </>
              )
          })}
          {/* <RightbarCard/>
          11111111111 */}
        </div>
      </div>
    </div>
  )
}


const RightbarCard =(props)=>{
  // console.log(props.task.Heading)
  return (
    <div className="rightbar-card">
      <div className="rightbar-card-left">
        <h3>10:00</h3>
        </div>
          <div className="rightbar-card-right">
            <div className="rightbar-card-line"></div>
            <p>{props.task.Heading}</p>
            <h4>{props.task.Objective.split(" ").length>4 ? `${props.task.Objective.split(" ").slice(0,4)}...`:props.task.Objective}</h4>
        </div>
      </div>
  )
}
export default Rightbar