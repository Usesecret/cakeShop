import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import "./Recipe.css"
function Recipe(){
    const [recipe,setRecipe] = useState([JSON.parse(localStorage.getItem("recipe"))])
    
    const navigate = useNavigate()
    function Toggle(){
        navigate("/products")
    }
    return(
      <>
      {
      recipe.map((item,index) =>{
              return(
                  <div className="recipe-wrap" key={index}>

                  <button className="btn btn-danger buttonX" onClick={Toggle}>X</button> 
                      <div className="recipe">
                        <div className="recipe-img-wrap">
                      <img src={item.img}
                          alt="" 
                          className="recipe-img"
                          />
                        </div>
                      <div className="desc">

                      <h1> {item.name} </h1>
                      <p className=" p-desc"> <span>Desc:</span>  {item.title}</p>
                      <p className=" p-desc"><span>Price:</span> {item.price}</p>
                      <Link className="btn text-light btn-card" to='/basket'>Add to Card</Link>
                      </div>
                      </div>
                  </div>
              )
      })}
      </>
    )
  }
export default Recipe
