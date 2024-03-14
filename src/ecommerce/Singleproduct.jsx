import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Singleproduct() {
    const {id} = useParams()
    const[data , setData] = useState({})
    const fetchData = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        // console.log(response.data.id )
        setData(response.data)
    }
    useEffect(() =>{
fetchData()
    },[])
  return (
    // <div>Single product</div>
    <>
    <h1>{data?.id}</h1>
    <img src={data?.thumbnail} alt="" />
    </>

  )
}

export default Singleproduct