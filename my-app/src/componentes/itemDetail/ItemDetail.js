import React from 'react'
import  './detail.css'

const ItemDetail = ({data}) => {
  return (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <div className='cardText'>
                    <h3 className="card-title">{data.title}</h3>
                    <h6 className="card-subtitle">{data.description}</h6>
                </div>    
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-6">
                        <div className="white-box text-center"><img src={`./${data.image}`} className="img-responsive"/></div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-6 product-description" >
                        <h4 className="box-title mt-5">Product description</h4>
                        <p>Lorem Ipsum </p>
                        <h2 className="mt-5">
                            ${data.price}<small className="text-success">(36%off)</small>
                        </h2>
                        <button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart">
                            <i className="fa fa-shopping-cart"></i>
                        </button>
                        <button className="btn btn-primary btn-rounded">Buy Now</button>
                        <h3 className="box-title mt-5">Key Highlights</h3>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-check text-success"></i>Sturdy structure</li>
                            <li><i className="fa fa-check text-success"></i>Designed to foster easy portability</li>
                            <li><i className="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail