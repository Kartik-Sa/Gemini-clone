import { Context } from "../../context/Context";
import {useContext} from "react";
import "./Main.css"

function Main(){
  
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  const cards=["Suggest beautiful places to see on an upcoming road trip","Briefly summarize this concept: urban planning","Brainstorm team bonding activities for our work retreat","Improve readability of the following code"];
  const symbols=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uDpl7gqXj8YnxXCIOIJZ-TiE0X_s3mL5sw&s","https://icons.veryicon.com/png/o/business/my-library/light-bulb-14.png","https://www.pngmart.com/files/23/Chat-Icon-PNG.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4rMfrxisUup7jo1NGE8OtIG3p4qmRpyrjQ&s"];
  return (
    <main>
      <nav>
        <p>Gemini</p>
        <img src="https://www.shutterstock.com/image-vector/profile-two-girl-sign-gemini-260nw-1562361982.jpg" alt="" />
      </nav>
      <section className="main">
       {!showResult?<>
         <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          {cards.map((card,i)=>{
            return(<div key={i} className="card">
              <p>{card}</p>
              <img src={symbols[i]} alt="" />
            </div>)
          })}
        </div>
        </>
        :<div className="result">
          <div className="result-title">
            <img src="https://www.shutterstock.com/image-vector/profile-two-girl-sign-gemini-260nw-1562361982.jpg" alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src="https://framerusercontent.com/images/pAKmSh1BJUlo6zsc3T1ul6d8.png?width=460&height=460" alt="" />
            {loading?<div className="loader"><hr />
            <hr />
            <hr /></div>:
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }
        <div className="main-bottom">
          <div className="searchbox">
            <input onChange={(e)=>setInput(e.target.value)} value={input}
            type="text" placeholder="Enter a prompt here" />
            <div>
              <img src="https://static.vecteezy.com/system/resources/previews/017/756/694/non_2x/gallery-icon-simple-design-vector.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/thumbnails/004/274/238/small/microphone-symbol-in-your-web-site-design-logo-app-ui-voice-icon-record-microphone-recording-studio-symbol-retro-mike-vector.jpg" alt="" />
              <img onClick={()=>onSent()} src="https://icons.veryicon.com/png/o/miscellaneous/utility/send-26.png" alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people so double check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </section>
    </main>
  )
}
export default Main;