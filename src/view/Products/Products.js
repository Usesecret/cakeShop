import {useState} from 'react'
import Card from '../../components/Card/Card'
import product from './data.json'
function Products() { 
    const [cart, setCart] =useState([]);
    const handleClick =(item)=>{
        console.log(item)
    }
    return (
    <div className='product-wrap  m-0 pt-5'> 
        <div className='row cards-row m-0 '>
            {
                product.map((item,index) =>{
                    return(                    
                        <Card  className="col-md m-0    " 
                            key={index} 
                            name = {item.name}
                            title = {item.title}
                            img = {item.img}
                            price = {item.price}
                            quantity = {item.quantity}
                            subCategory = {item.subCategory}
                            item={item}
                            handleClick={handleClick}
                        />
                    )
                })
                }
            </div>
    </div>
    )
}
export default Products
