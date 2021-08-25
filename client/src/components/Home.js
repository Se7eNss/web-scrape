import React,{useEffect,useState} from 'react'
import Product from './product/Product'

import axios from 'axios'

const Home = () => {
    const [products , setProducts]=useState([]);

    const fetchProduct= async()=>{
        const products= await axios.get('http://localhost:4000/api/v1');

        setProducts(products.data.products);

        

    }
    console.log(products)
    useEffect(()=>{
        fetchProduct();
    },[])
    return (
        
        <div className="container">
            <div className="row">
                {products.map(p=>(
                    <Product p={p}/>
                ))}     
            </div>
        </div>
    )
}

export default Home
