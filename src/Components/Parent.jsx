import { products } from "../utilities/data";
import { Child } from "./Child";

export const Parent=()=>{
    return(
        <>
        <div className="d-flex flex-wrap justify-content-center gap-4">
            {products.map((item)=>(
                <div key={item.id}className="card border-success border-3" style={{ width: "18rem",padding:'3px' }}>
                    <Child image={item.image} title={item.title} price={item.price} description={item.description} />
                </div>
            ))}
        </div>
        </>
    )
}