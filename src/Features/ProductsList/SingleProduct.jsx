import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../../Redux/Cart/Cart";
export const SingleProduct=()=>{

    let [singlep,setSingleP]=useState({})

    const dispatch = useDispatch();
    let {id} = useParams()
    // console.log(id)

    useEffect(()=>{
        async function datap() {
            let {data}=await axios.get(`https://dummyjson.com/products/${id}`)
            setSingleP(data)
        }
        datap()
    },[id])

    return(
        <>
        {/* <div className="container m-4 p-4">
            <div className="row">
                <div className="col-5">
                    <img src={singlep.thumbnail} alt="" />
                </div>
                <div className="col-7">
                    <h1>{singlep.title}</h1>
                    <p>{singlep.description}</p>
                    <mark>{singlep.price}</mark><br /><br />
                    <button className="btn btn-primary m-2">Add to cart</button>
                    <button className="btn btn-danger m-2">Remove from cart</button>
                </div>
            </div>
        </div> */}
        <div className="container m-4 p-4 d-flex align-items-center gap-4">
    
    <div className="flex-shrink-0">
        <img
            src={singlep.thumbnail}
            alt=""
            className="img-fluid"
        />
    </div>

    <div className="flex-grow-1">
        <h1>{singlep.title}</h1>
        <p>{singlep.description}</p>

        <mark>{singlep.price}</mark>

        <br />
        <br />

        {/* <button className="btn btn-primary me-2" onClick={() => 
            {console.log('button clicked');
            dispatch(addToCart(singlep))}}>
            Add to cart
        </button> */}
        <button className="btn btn-primary me-2" onClick={() => 
            dispatch(ADDTOCART({...singlep,quantity:1}))}>
            Add to cart
        </button>

        {/* <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(singlep.id))}>
            Remove from cart
        </button> */}
    </div>

</div>
        </>
    )
}