import { Home } from "../Pages/Home"
import { Route, Routes } from "react-router-dom"
import { About } from "../Pages/About"
import { Products } from "../Pages/Products"
import { Cart } from "../Pages/Cart"
import { Contact } from "../Pages/Contact"
import { SingleProduct } from "../Features/ProductsList/SingleProduct"

export const AppRouter=()=>{
    return(
        <>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
        </Routes>
        </>
    )
}