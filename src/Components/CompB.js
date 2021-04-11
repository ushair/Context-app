import React, { useContext } from 'react'
import {CompC} from './CompC'
import {ChangeNum} from '../App.js'
export default function CompB (){
    const changefun = useContext(ChangeNum)
    return (
        <div>
            <CompC/>
            <button onClick={()=>{
                changefun()
            }}>Increment Number</button>
        </div>
    )
}
