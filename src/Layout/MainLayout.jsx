import { Footer } from "../Components/Footer"
import { Navbar1 } from "../Components/Navbar1"
import { AppRouter } from "../RouterDom/AppRouter"

export const MainLayout=()=>{
    return (
        <>
        <Navbar1/>
        <AppRouter/>
        <Footer/>
        </>
    )
}