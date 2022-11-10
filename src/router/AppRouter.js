import {Routes,Route} from "react-router-dom"
import Home from "../view/Home/Home"
import Products from "../view/Products/Products"
import Basket from "../view/Basket/Basket"
import Navbar from "../components/Navbar/Navbar"
function AppRouter() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
        </>
    )
}
export default AppRouter
