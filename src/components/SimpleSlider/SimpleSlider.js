import React from 'react'
import "./SimpleSlider.css"
import Card from '../Card/Card'
import product from "../../view/Products/data.json"
function SimpleSlider (props){
    return (
    <div>
            
<div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <div className="cards-wrappers  ">
      {
                product.slice(0,4).map((item,index) =>{
                    return(                    
                        <Card  className="col-md-7 m-0   cardd  " 
                            key={index} 
                            name = {item.name.slice(0,13)}
                            title = {item.title.slice(0,40)}
                            img = {item.img}
                            price = {item.price}
                        />
                    )
                })
                }
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrappers">
      {
                product.slice(4,8).map((item,index) =>{
                    return(                    
                        <Card  className="col-md-7 m-0    " 
                            key={index} 
                            name = {item.name.slice(0,13)}
                            title = {item.title.slice(0,40)}
                            img = {item.img}
                            price = {item.price}
                        />
                    )
                })
                }
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrappers">
      {
                product.slice(8,12).map((item,index) =>{
                    return(                    
                        <Card  className="col-md-7 m-0    " 
                            key={index} 
                            name = {item.name.slice(0,13)}
                            title = {item.title.slice(0,50)}
                            img = {item.img}
                            price = {item.price}
                        />
                    )
                })
                }
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrappers">
      {
                product.slice(12,16).map((item,index) =>{
                    return(                    
                        <Card  className="col-md-7 m-0    " 
                            key={index} 
                            name = {item.name.slice(0,13)}
                            title = {item.title.slice(0,50)}
                            img = {item.img}
                            price = {item.price}
                        />
                    )
                })
                }
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrappers">
      {
                product.slice(16,20).map((item,index) =>{
                    return(                    
                        <Card  className="col-md-7 m-0    " 
                            key={index} 
                            name = {item.name.slice(0,13)}
                            title = {item.title.slice(0,50)}
                            img = {item.img}
                            price = {item.price}
                        />
                    )
                })
                }
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrappers">
      {
                product.slice(20,24).map((item,index) =>{
                    return(                    
                        <Card  className="col-md-7 m-0  " 
                            key={index} 
                            name = {item.name.slice(0,13)}
                            title = {item.title.slice(0,40)}
                            img = {item.img}
                            price = {item.price}
                        />
                    )
                })
                }
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

              
    </div>
)}
export default SimpleSlider
