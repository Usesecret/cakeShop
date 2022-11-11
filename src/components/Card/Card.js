import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"


export const Card = (props) => {
  const navigate = useNavigate()
  const ViewMore = (recipe) =>{
      localStorage.setItem("recipe",JSON.stringify(recipe))
      navigate('/recipe')
  
  } 
    let product = [
        {
          "category": "cake",
          "subCategory":"Angel Cake",
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "name": "Angel-Food-Cake",
          "price": 90000,
          "quantity": 1,
          "img": "./Angel-Food-Cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Chocolate Cake",
          "id": 2,
          "name": "Belgian-chocolate Cake",
          "title": "qui est esse exercitationem repellat qui ipsa sit",
          "price": 100000,
          "quantity": 10,
          "img": "./belgian-chokolad.jpg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Birthday Cake",
          "id": 3,
          "name": "Birthday chocolate",
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "price": 200000,
          "quantity": 15,
          "img": "./birthday-chocolate.jpg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Bridal Cake",
          "id": 4,
          "name": " Bridal Cake",
          "title": "eum et est occaecati",
          "price": 300000,
          "quantity": 5,
          "img": "./bridal-cake.jpeg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Fruit Cake",
          "id": 5,
          "name": "Blueberry Lemon Icebox Cake",
          "title": "nesciunt quas odio",
          "price": 350000,
          "quantity": 3,
          "img": "./blueberry-lemon-icebox-cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Chocolate Cake",
          "id": 6,
          "name": "Chocolate Cake",
          "title": "dolorem eum magni eos aperiam quia",
          "price": 100000,
          "quantity": 2,
          "img": "./chocolatecake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Chocolate Cake",
          "id": 7,
          "name": "Chocolate Cake",
          "title": "magnam facilis autem",
          "price": 320000,
          "quantity": 8,
          "img": "./d.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Butter Cake",
          "id": 8,
          "name": "Vanilla Butter Cake",
          "title": "dolorem dolore est ipsam",
          "price": 330000,
          "quantity": 12,
          "img": "./EP_06062016_Vanilla-ButterCake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"biscuit Cake",
          "id": 9,
          "name": "French biscuit cake",
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "price": 200000,
          "quantity": 1,
          "img": "./french-biscuit-cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Fudge Cake",
          "id": 10,
          "name": "Fudge Cake",
          "title": "optio molestias id quia eum",
          "price": 100000,
          "quantity": 3,
          "img": "./fudge-cake.jpg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Fruit Cake",
          "id": 11,
          "name": "Mango cake",
          "title": "et ea vero quia laudantium autem",
          "price": 200000,
          "quantity": 7,
          "img": "./mango-cake.jpg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Angel Cake",
          "id": 12,
          "name": "Orange Chiffon Cake",
          "title": "in quibusdam tempore odit est dolorem",
          "price": 300000,
          "quantity": 6,
          "img": "./Orange-Chiffon-Cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Bridal Cake",
          "id": 13,
          "name": "Persian love Cake",
          "title": "dolorum ut in voluptas mollitia et saepe quo animi",
          "price": 300000,
          "quantity": 6,
          "img": "./persian-love-cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Pound Cake",
          "id": 14,
          "name": "Pound Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./pound-cake.jpg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Pound Cake",
          "id": 15,
          "name": "Pound Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./pound-cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Pound Cake",
          "id": 16,
          "name": "Pound Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./pound-cake-1-CP.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Congratulation Cake",
          "id": 17,
          "name": "Purple Butter Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./purple.jfif",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Strawberry Cake",
          "id": 18,
          "name": "Red Velvet Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./red-velvet-cake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Chocolate Cake",
          "id": 19,
          "name": "Sponge Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./spongeCake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Strawberry Cake",
          "id": 20,
          "name": "Strawberry short Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./strawberry_shortcake.webp",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Roll Cake",
          "id": 21,
          "name": "Swiss roll Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./swiss-roll-cake.jpg",
          "form": false,
          "status": false
        },
        {
          "category": "cake",
          "subCategory":"Wedding Cake",
          "id": 22,
          "name": "Wedding Cake",
          "title": "voluptatem eligendi optio",
          "price": 300000,
          "quantity": 6,
          "img": "./wedding-cake.jpeg",
          "form": false,
          "status": false
        }
      ]





    

    const Basket = () =>{
        navigate('/basket')
    }

const [prod, setProd] = useState([])
const [open , setOpen] = useState(false)

const [person , setPerson] = useState({
  category: '',
    id: 0,
    title : '',
    name : '',
    price: '',
    quantity: '',
    img: '',
    form:'',
    status: '',
    subCategory: ''
})


const Modal = (_id) => {     
    setOpen(open => !open)
    let user = prod.find(item =>  item.id == _id)
    setPerson({...user})
}


const changeHandler = (e) => {
    setPerson({...person , [e.target.name] : e.target.value})
}

useEffect( ()=>{
    function Bar(){
        setProd(product)
    }
    Bar()
},[])

const deleteObj = (_id) => {
    let foo = prod
    let num = foo.findIndex(object => {
        return object.id === _id;
    });
    foo.splice(num, 1) 
    
    setProd([...foo])
    
}

const Updating = () =>{
    let foo = prod
    console.log(person)
    let num = foo.findIndex(object => {
        return object.id === person.id;
    });
    foo.splice(num, 1) 
    foo.push(person)
    setProd([...foo])
    Modal()
}

const Submit = (e) => {
    e.preventDefault()
}
    console.log(open)
    return (
        <div>
            <h1 className='d-flex justify-content-center text-danger '  >Cakes</h1>
                <div className="row ">

                {
                    product.map((item , index) => {
                        return(
                            <>
                              <div className="col-md-3   d-flex justify-content-center " key={index}>
                            <div className="card  p-2 shadow-lg bg-body rounded  text-center m-3 " style={{height: 25+ "em", width:80+ "%"}}>
                                <img src={item.img} alt="logo" style={{height: 13+ "em" }}  />
                                <h3 className='p-1'>Title: {item.name.slice(0,7)}</h3>
                                <p>Description: {item.title.slice(0,20)}...</p>
                                <div className="d-flex justify-content-around ">
                                <button className="btn btn-primary " onClick={() => ViewMore(item)}  style={{height: 2.8+ "em",width: 2.8+ "em"}}> <img src="./eye-fill.svg"/></button>
                                <button className="btn btn-primary " onClick={() => Modal(item.id)}  style={{height: 2.8+ "em",width: 2.8+ "em"}}> <img src="./pencil-square.svg"/></button>
                                <button className="btn btn-primary " onClick={()=> Basket()}  style={{height: 2.8+ "em",width: 2.8+ "em"}}> <img src="./cart4.svg" style={{height: 1.5+ "em",width: 1.5+ "em"}}/></button>
                                <button className="btn btn-primary " onClick={() => deleteObj(item.id)}  style={{height: 2.8+ "em",width: 2.8+ "em"}}> <img src="./trash3-fill.svg"/></button>
                                </div>
                            </div>
                        </div>
                                

                            </>
                        
                        )
                    })
                } 
                <div className="formik"
                style={{display : open?"inline" : "none" }}
                >
                    <form onSubmit={Submit}>
                        <h1 onClick={()=> Modal()}>X</h1>
                        <input 
                            className="form-control mx-2 my-5"
                            type="text"
                            name="title"
                            value={person.title}
                            onChange={changeHandler}
                        />
                        <input 
                            className="form-control mx-2 my-5"
                            type="text"
                            name="body"
                            value={person.body}
                            onChange={changeHandler}
                        />
                        <button className="btn btn-primary"
                        onClick={()=>Updating()}
                        >Update</button>
                    </form>
                </div>
              </div> 
              </div> 
    )
}
export default Card

