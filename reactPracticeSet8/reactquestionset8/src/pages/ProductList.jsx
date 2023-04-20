import { useState,useEffect } from "react";
import { fakeFetch } from "../data/productDB";
import {Link} from "react-router-dom"
import { Cart } from "./Cart";
import { Routes, Route } from "react-router-dom";

const ProductList = ()=>{
    const[data,setData] = useState([]);

    useEffect(()=>{
        (async()=>{
            try{
                const{data} = await fakeFetch("https://example.com/api/products");
                setData(data.products);
            }catch(e){
                console.error(e);
            }
        })()
    })

    return(
        <div>
            <h2>Product Lisitng Page</h2>
            <nav>
                <Link to="/cart">My Cart </Link> ||
                <Link to="/wishlist"> My Wishlist</Link>
            </nav>
            <Routes>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            {data.map((item)=>(
                <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>Price:{item.price}</p>
                <Link>View Item</Link>
                <hr/>
                </>
                
            ))}
        </div>
    )
}

export {ProductList};