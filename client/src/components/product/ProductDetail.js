import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
    
    const [product , setProduct]=useState({});

    const getProductDetail = async(id)=>{
        const product = await axios.get(`http://localhost:4000/api/v1/${id}`)
        setProduct(product.data.product);
        

    }
    console.log(product)
    useEffect(()=>{
        getProductDetail(match.params.id);
    },[])
    return (
        <div className="container">
            <div class="card as">
			    <div class="container-fliud">
				    <div class="wrapper row">
				    	<div class="preview col-md-6">
				    		<div class="preview-pic tab-content">
				    		    <div class="tab-pane active" id="pic-1"><img src={product.image} /></div>
				    		</div>
				    	</div>
				    	<div class="details col-md-6">
				    		<h3 class="product-title">{product.name}</h3>
				    		<div class="rating">
				    			<div class="stars">
				    				<span class="fa fa-star checked"></span>
				    				<span class="fa fa-star checked"></span>
				    				<span class="fa fa-star checked"></span>
				    				<span class="fa fa-star"></span>
				    				<span class="fa fa-star"></span>
				    			</div>
				    			<span class="review-no">41 reviews</span>
				    		</div>
				    		<p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
				    		<h4 class="price">current price: <span>{product.price} <i className="fas fa-lira-sign"></i> </span></h4>
				    		<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>

				    		<div class="action">
				    			<button class="add-to-cart btn btn-default" type="button">add to cart</button>
				    			<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
				    		</div>
				    	</div>
				    </div>
			    </div>
		    </div>
        </div>
    )
}

export default ProductDetail
