import React from "react"
import NavBar from "./NavBar"
import MainPage from "./MainPage"
import Demo from "./Demo"
  
  export default function App(){
      return(
          <div>
          <NavBar />
          
          <section className="cards-list">
          <MainPage />
          </section>
          </div>
      )
  }