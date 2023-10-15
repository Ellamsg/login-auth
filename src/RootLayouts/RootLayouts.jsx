import React from "react"

import { Link,Outlet } from "react-router-dom"
import Nav from "../components/Nav"
export default function RootLayouts(){
    return(

<div className=" py-[20px]">
  
  
    <Outlet/>
 
</div>

    )

}