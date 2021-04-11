import CompB from './CompB'
import React,{useContext} from 'react'
import { ChangeNum } from '../App'


export default function CompA() {
    const changefun= useContext(ChangeNum)
    return (
        <div>
        <CompB  />
        <button onClick={()=>{
            changefun()
        }}>Change A</button>
        </div>
    )
}
