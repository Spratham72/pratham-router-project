import '../styles/navbar.css';
import {Link} from 'react-router-dom';
export const Navbar=()=>{
    const handleChange=(e,val)=>{
        console.log(e.target.innerHTML)
    }
    return <div>
    <div className="container">
        <div>Shopify</div>
         <Link to="/men" style={{ textDecoration: 'none' }}> <div style={{marginTop:"10px", color: "rgb(159, 168, 175)"}}>Men</div></Link> 
         <Link to="/women" style={{ textDecoration: 'none' }}> <div style={{marginTop:"10px", color: "rgb(159, 168, 175)"}}>Women</div></Link> 
        
        <div>Market</div>
        <div>Manage</div>
        <div>Pricing</div>
        <div>Learn</div>
        <div>Login</div>
    </div>
    <div className='header'>
        <h3>Shopify Blog</h3>
    </div>
    <div className="container2">
        <div>Latest Articles</div>
        <div>Need an Idea?</div>
        <div>Source Products</div>
        <div>Start Your Store</div>
        <div>Sales & Marketing</div>
        <div>Founder Stories</div>
        <div>Product Updates</div>
       
    </div>
    </div>
}