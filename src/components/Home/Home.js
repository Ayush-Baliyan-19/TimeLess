import React from 'react'
import './Home.scss'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdRadioButtonUnchecked } from 'react-icons/md'
const Dashboard = () => {
  return (
    <div className='dashboard-main'>
      <div className="dashboard-top">
        <div className="helloAndDate">
          <h3>Hello, Sarah</h3>
          <p>Today is Monday, 29 August 2022</p>
        </div>
        <button>Add A New Project</button>
      </div>
      <div className="dashboard-cards">
        <DashboardCards bgcolor="#70367c" />
        <DashboardCards bgcolor="#95ced4" />
        <DashboardCards bgcolor="#fd7f51" />
      </div>
      <div className="dashboard-bottom">
        <div className="bottom-left">
          <h2>
            Tasks For Today
          </h2>
            <TasksCards/>
            <TasksCards/>
            <TasksCards/>
        </div>
        <div className="bottom-right">
          <h2>Statistics</h2>
          <div className="stats-cards">
            <div className="stats-card">
              <h3>28h</h3>
              <p>Tracked<br />time</p>
            </div>
            <div className="stats-card">
              <h3>28h</h3>
              <p>Tracked<br />time</p>
            </div>
            <div className="stats-card">
              <h3>28h</h3>
              <p>Tracked<br />time</p>
            </div>
            <div className="stats-card">
              <h3>28h</h3>
              <p>Tracked<br />time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardCards = (props) => {
  return (
    <div className="dashboard-card" style={{ background: `${props.bgcolor}` }}>
      <div className="card-con">
        <div className="card-top-sec">
          <h4>Web <br />Development</h4>
          <BsThreeDotsVertical color='#fff' />
        </div>
        <div className="card-progress">
          <p>10 Tasks | 96%</p>
          <div className="progressout">
            <div className="progressin"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TasksCards = (props) => {
  return (
    <div className="tasks-card">
      <div className="task-con">
      <MdRadioButtonUnchecked className='radioo'/>
        <div className="linee"></div>
        <h5>Mobile App</h5>
        <p>Prepare figma file</p>
      </div>
    </div>
  )
}
export default Dashboard