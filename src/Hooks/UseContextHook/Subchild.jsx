import { useContext } from "react"
import { dataContext } from "./Parent"

export const Subchild=()=>{

    let user=useContext(dataContext)
    return(
        <>
        <h1>This is Subchild Component <span className="text-danger">{user}</span></h1>
        
        </>
    )
}