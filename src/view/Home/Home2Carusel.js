import {useState,useEffect} from "react"
import { json } from "react-router-dom"
function Home2Carusel() {
const [Baza,setBaza] = useState([])
useEffect(()=>{
  function Foo(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respose => respose.json())
    .then(json =>console.log(json))
  }
  Foo()
},[])
  return (
    <div>Home2Carusel


    </div>
  )
}
export default Home2Carusel
