
import React from 'react'
import {useState} from 'react'

export default function Usestt() {

    const [car,setCar]=useState("red")
  return (
    <div>
    <h1> My Favourite Color is {car}</h1>
    <button type="button" onClick={() => setCar("blue")}> Click me </button>
    </div>
  )
}
