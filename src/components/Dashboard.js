import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../Css/dashboard.css"
import Header from './Header';
import jokes from "../Images/joke.png"
const Dashboard = () => {
    return (
        <>
          {
              localStorage.getItem('data') ? <>  <Header/>
              <h1 style={{marginTop:"150px"}}>Welcome</h1> </> : <h1>Please Login First</h1>
          }
        </>
    )
}

export default Dashboard