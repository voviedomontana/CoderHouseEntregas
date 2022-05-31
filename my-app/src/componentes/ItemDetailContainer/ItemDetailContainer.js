import React, { useEffect, useState} from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { productfordetail } from '../utils/products'

const ItemDetailContainer = () => {

      const [product, setProduct] = useState({})
      const getItem = () => {
          return new Promise ((resolve, reject) => {
              setTimeout(() => {
                  resolve(productfordetail)
              }, 2000)
          })
      }
      useEffect (() => {
          getItem()
          .then( (res) => {
              console.log(res)
              setProduct(res)
          })
      }, [])
    return (
    <div>
        <ItemDetail data={product}/>
    </div>
  )
}

export default ItemDetailContainer