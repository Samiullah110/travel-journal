import React from "react"
import data from "./data"
import Demo from "./Demo"

export default function MainPage(){
    const alldata=data.map(function(item){
        return <Demo 
               key={item.key}
               img={item.imageUrl}
               location={item.location}
               title={item.title}
               startdate={item.startDate}
               enddate={item.endDate}
               descr={item.description}
               googlemaps={item.googleMapsUrl}
        />
        
    })
    return(
        <div>
           {alldata}
           
           
        </div>
    )
    
}