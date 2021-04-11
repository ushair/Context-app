import React,{useContext} from 'react'
import {Number} from '../App'
export const CompC =()=>{
    const number = useContext(Number)
    return (
        <div>
            <h1>the Increment Number is {number}</h1>
        </div>
    )
}
