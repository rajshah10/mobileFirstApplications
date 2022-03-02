import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Protected = (props) => {
    const navigate=useNavigate()
    let element=props.element
    useEffect(()=>{
        if(!localStorage.getItem('data')){
            navigate("/login")
        }
    },[])
  return (
    <element/>
  )
}

export default Protected