import {Routes,Route} from "react-router-dom"
import Home from "../view/Home/Home"
import Products from "../view/Products/Products"
import Basket from "../view/Basket/Basket"
import Navbar from "../components/Navbar/Navbar"
import Recipe from "../components/Card/Recipe/Recipe"
import {CartProvider} from 'react-use-cart'
function AppRouter() {
    return (
        <CartProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
        </CartProvider>
    )
}
export default AppRouter
