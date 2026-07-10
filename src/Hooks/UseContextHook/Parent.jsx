import { createContext } from "react"
import { Child } from "./Child"

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext()
export const Parent = () => {
    let data = "this is context api"
    return (
        <>
            <dataContext.Provider value={data}>
                <div className="card p-5 m-5 border border-2 border-primary w-75">
                    <h1>This is Parent component</h1>
                    <Child />
                </div>
            </dataContext.Provider>

        </>
    )
}