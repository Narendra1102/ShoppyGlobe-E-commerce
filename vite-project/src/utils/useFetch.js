import { useState,useEffect } from "react"

function useFetch() {
    // State to store all fetched products
    const [allProducts,setallProducts]=useState([])

    // Fetch product data when component mounts
    useEffect(()=>{
        
        async function calling(){
            const API="https://dummyjson.com/products"
            let resp=await fetch(API)
            let data=await resp.json()

            // Store products array in state
            setallProducts(data.products)
        }
        calling() 
    },[])
    return allProducts
}

export default useFetch;
