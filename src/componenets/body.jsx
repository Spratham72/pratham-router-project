import { useState } from "react"
import { useEffect } from "react"
import '../styles/body.css'
export const Body=()=>{
    const [item,setItem]=useState([]);
    console.log(item)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setItem(json))        
    },[])
    return <div className="bodyContainer">
        <div className="left">
        <div><h2>Founder Stories</h2>
        <p>These are the stories of the brave and the bold, the planners and the risk-takers, the dreamers and the doers. In conversations with the diverse Shopify founder community, we uncover the secret ingredients of success. Be inspired to take action by those who have paved the way before you.</p></div>
        <div><img src="https://wallpaperaccess.com/full/267434.jpg" alt="" /></div>
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