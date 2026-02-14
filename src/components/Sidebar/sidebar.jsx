import React, {useState} from 'react'
import "./sidebar.css"
export const Sidebar = () => {
  const [extended,setExtended]=useState(false);
  return (
    <aside className='sidebar'>
      <div className="top">
        <img className="menu" onClick={()=>{
          setExtended(!extended);
        }} src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png" alt="" />
        <div className="new-chat">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png" alt="" />
          {extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/2px-common-icons/message-63.png" alt="" />
            <p>What is React ....</p>
          </div>
        </div>
        :
        null}
      </div>
      <div className="bottom">
        <figure className="bottom-item recent-entry">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/mobile-aone/question-mark-12.png" alt="" />
          {extended?<figcaption>Help</figcaption>:null}
        </figure>
        <figure className="bottom-item recent-entry">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8t9ea7lFXSo_-TLEMRkN2epBX9MP9oFxhBg&s" alt="" />
          {extended?<figcaption>Activity</figcaption>:null}
        </figure>
        <figure className="bottom-item recent-entry">
          <img src="https://cdn-icons-png.flaticon.com/512/929/929577.png" alt="" />
          {extended?<figcaption>Settings</figcaption>:null}
        </figure>
      </div>
    </aside>
  )
}
