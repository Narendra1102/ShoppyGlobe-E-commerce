import { useState,useEffect } from "react"

function useFetch() {
    const [allProducts,setallProducts]=useState([])
    useEffect(()=>{
        
        async function calling(){
            const API="https://dummyjson.com/products"
            let resp=await fetch(API)
            let data=await resp.json()
            setallProducts(data.products)
        }
        calling() 
    },[])
    return allProducts
}

export default useFetch;
