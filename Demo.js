import React from "react"

export default function Demo(props){
    
  return (
      <div className="contact-card">
          
                <img src={`./images/${props.img}`} className="city--image"/>
                
                <div className="next--view">
                <span><b>{props.location}</b></span>
                <a href="https://www.cityimage.com/">{props.googlemaps}</a>
                <h3>{props.title}</h3>
                <span><b>{props.startdate}</b></span>
                <span>-</span>
                <span><b>{props.enddate}</b></span>
                <p>{props.descr}</p>
                </div>
        </div>
        
        
        
  )
}