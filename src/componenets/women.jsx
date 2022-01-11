import { useState } from "react"
import { useEffect } from "react"
import '../styles/body.css'
export const Women=()=>{
    const [item,setItem]=useState([]);
    console.log(item)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(res=>res.json())
        .then(json=>setItem(json))        
    },[])
    return <div className="bodyContainer">
        <div className="left">
      
        <h1 >WOMEN SECTION</h1>
        <div className="itemContainer">
            {item.map(el=>{
                return <div>
                    <div className="img">
                    <img src={el.image} alt="" />
                    </div>
                    <h4>{el.title}</h4>
                    <p>Rupees:  {el.price}</p>
                </div>
            })}
        </div>
        </div>
        <div className="right">
        

        </div>
    </div>
}