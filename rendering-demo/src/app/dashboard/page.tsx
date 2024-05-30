"use client"
import { useState } from "react"

export default function DashboardPage(){
    const [name,setName]=useState("")
    console.log("Dashboard Component")
    return (
        <div>
            <h1>Dashboard Page</h1>
            <input type="text" onChange={e=>setName(e.target.value)} value={name} id="" />
            <p>Hello, {name}</p>
        </div>
    )
}