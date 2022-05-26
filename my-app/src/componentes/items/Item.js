import React from 'react';
import ItemCount from './ItemCount';
const Item = ({title, price, image, description, stock}) => {
  return (
  <div class="container py-5">
      <div class="row text-center text-white mb-5">
          <div class="col-lg-7 mx-auto">
              <h1 class="display-4">Product List</h1>
         </div>
     </div>
     <div class="row">
         <div class="col-lg-8 mx-auto">
             <ul class="list-group shadow">
                 <li class="list-group-item">
                     <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                         <div class="media-body order-2 order-lg-1">
                             <h5 class="mt-0 font-weight-bold mb-2">{title}</h5>
                             <p class="font-italic text-muted mb-0 small">{description}</p>
                             <div class="d-flex align-items-center justify-content-between mt-1">
                                 <ul class="list-inline small">
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                    <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                 </ul>
                            </div>
                        </div><img src={`./${image}`} alt="{product}" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                <h6 class="font-weight-bold my-2">$ {price}</h6>
                <ItemCount initial={0} stock={stock} />
               </ul>
            </div>
        </div> 
    </div>
  );
};
export default Item;
