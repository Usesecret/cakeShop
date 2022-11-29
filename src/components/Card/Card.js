import React from 'react'
import {useCart} from 'react-use-cart'
import "./Card.css"
import {useNavigate} from "react-router-dom"

function Card(props,handleClick) {
  // console.log(props)
  const navigate = useNavigate()
    const ViewMore = (recipe) =>{
        localStorage.setItem("recipe",JSON.stringify(recipe))
        navigate('/recipe')
    }
  const {
    addItem
  } = useCart()
                return(
                            <>
                            <div className="card  shadow   bg-body rounded  text-center car-wrap"  >
                                <div className='img-wrappp'>
                                <img src={props.img} className='img'  />
                                </div>
                                <h5  className='prop-name'>Title: {props.name.slice(0,10)}</h5>
                                <p className='prop-title'>Description: {props.title.slice(0,12)}</p>
                                <p className='prop-price'>Price: {props.price}</p>
                                <div className="d-flex justify-content-around  ">
                                <button 
                                  className="btn butns text-light m-1 d-flex align-items-center p-2 
                                  "data-bs-toggle="modal" href="#exampleModalToggle" role="button"  >
                                  <span onClick={() => ViewMore(props)}> View More</span>
                                </button>
                                <button className="btn butns text-light m-1 d-flex align-items-center  " onClick={() => addItem(props.item)}  > <span>Add to Cart</span></button>
                                </div>
                            </div>
                            </>
                        
                      )
                    
            
              
}
export default Card
