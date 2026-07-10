import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, REMOVEFROMCART } from "../Redux/Cart/Cart";

export const Cart = () => {
    // const items = useSelector(state => state.cart.items);
    let cartData = useSelector(state => state.cart)
    const dispatch = useDispatch();

    return (
        <>
            <h1>Cart</h1>

            {/* {items.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                </div>
            ))} */}

            <div className="container">
                <div className="row m-5">
                    {
                        cartData.map((item) => (
                            <div className="row mb-4 key={item.id}">
                                <div className="col-5">
                                    <img src={item.thumbnail} alt="" height={170} />
                                </div>
                                <div className="col-7">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <mark>{item.price}</mark>
                                    &nbsp;&nbsp;
                                    
                                    <button className="btn btn-primary"
                                        onClick={() => dispatch(INCREMENT(item.id))}
                                    >
                                        +
                                    </button>&nbsp;&nbsp;
                                    <span>
                                        {item.quantity}
                                    </span>&nbsp;&nbsp; 
                                    <button className="btn btn-danger"
                                        onClick={() => dispatch(DECREMENT(item.id))}
                                    >
                                        -
                                    </button>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-warning"
                                        onClick={() => dispatch(REMOVEFROMCART(item.id))}
                                    >
                                        Remove
                                    </button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    );
    // return(
    //     <>
    //     <center>
    //         <h1 className="p-4 m-4">This is Cartpage</h1>
    //     </center>
    //     </>
    // )
}