import React from 'react'
import './Rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar-main'>
      <div className="rightbar-con">
          <h3>Calender</h3>
        <div className="rightbar-sec">
          <p className='rightbar-date'>Oct 20, 2021</p>
          <RightbarCard/>
          <RightbarCard/>
        </div>

        <div className="rightbar-sec">
          <p className='rightbar-date'>Oct 20, 2021</p>
          <RightbarCard/>
          <RightbarCard/>
          <RightbarCard/>
        </div>
      </div>
    </div>
  )
}


const RightbarCard =()=>{
  return (
    <div className="rightbar-card">
      <div className="rightbar-card-left">
        <h3>10:00</h3>
        </div>
          <div className="rightbar-card-right">
            <div className="rightbar-card-line"></div>
            <p>Dribble Shot</p>
            <h4>Facebook Brand</h4>
        </div>
      </div>
  )
}
export default Rightbar