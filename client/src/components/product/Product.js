import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Product = ({p}) => {
  
    return (
             <div className="col-lg-3 col-md-4 col-sm-12 p-3">
                <div className="card h-100 shadow-sm"> <img src={p.image} className="card-img-top" ></img>
                    <div className="card-body">
                        <div className="clearfix mb-3"><span className="float-end price-hp">{p.price} <i className="fas fa-lira-sign"></i></span> </div>
                        <h5 className="card-title text-center">{p.name}</h5>
                        <div className="text-center my-4"> <Link to={`/${p._id}` } className="btn btn-warning">View Details</Link> </div>
                    </div>
                </div>
            </div>
           
    )
}

export default Product
