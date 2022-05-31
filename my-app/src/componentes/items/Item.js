import React from 'react';
import ItemCount from './ItemCount';
const Item = ({title, price, image, description, stock}) => {
  return (
  <div className="container py-5">
      <div className="row text-center text-white mb-5">
          <div className="col-lg-7 mx-auto">
              <h1 className="display-4">Product List</h1>
         </div>
     </div>
     <div className="row">
         <div className="col-lg-8 mx-auto">
             <ul className="list-group shadow">
                 <li className="list-group-item">
                     <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                         <div className="media-body order-2 order-lg-1">
                             <h5 className="mt-0 font-weight-bold mb-2">{title}</h5>
                             <p className="font-italic text-muted mb-0 small">{description}</p>
                             <div className="d-flex align-items-center justify-content-between mt-1">
                                 <ul className="list-inline small">
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                    <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                 </ul>
                            </div>
                        </div><img src={`./${image}`} alt="{product}" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <h6 className="font-weight-bold my-2">$ {price}</h6>
                <ItemCount initial={0} stock={stock} />
               </ul>
            </div>
        </div> 
    </div>
  );
};
export default Item;
