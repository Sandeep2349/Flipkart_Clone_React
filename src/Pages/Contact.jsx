import { Login } from "../Features/Authentication/Login";
import { Signup } from "../Features/Authentication/Signup"
import { useState } from "react"

export const Contact=()=>{

    let [page,setPage]=useState(true)
    // let content;
    // if(page){
    //     content=<Signup/>
    // }
    // else{
    //     content=<Login/>
    // }
    return(
        <>
        
        <center>
            <button className="btn btn-primary m-5" onClick={()=>setPage(true)}>SignUp</button>
            <button className="btn btn-secondary" onClick={()=>setPage(false)}>Login</button>
            {/* {content} */}
            {page?<Signup/>:<Login/>}
        </center>
        </>
    )
}