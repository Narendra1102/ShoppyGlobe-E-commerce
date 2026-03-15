
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'



function ProductDetail() {

  const {id}=useParams()
  const [product,setProduct]=useState({})
  const [error,setError]=useState("")
  
  useEffect(()=>{
    async function calling(){
      try{
        const API=`https://dummyjson.com/products/${id}`
        let resp=await fetch(API)
        let data=await resp.json()
        setProduct(data)
      }
      catch(err){
        setError(err)
      }
      
    }
    calling()
    
  },[id])

  if (!product) {
    return <h2>Loading...</h2>
  }
  
  
  if(error){
    return <h2>Failed to fetch data</h2>
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.images?.[0]} width="300px" height="300px" loading="lazy"/>
      </div>
      
      <div class="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <div className='btn-container'>
          <button className="cart-btn">Add to Cart</button>
        </div>
        

      </div>
      
    </div>
  )

}

export default ProductDetail
