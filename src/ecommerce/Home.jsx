import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      //   console.log(res.data.products);
      setData(res.data.products);
    });
  };
  //   console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    
 
    <div>
      {data &&
        data.map((item, index) => {
          return (
           
            <div key={index}>
          <Link to={`/singleproduct/${item.id}`}>
          <Products key={index} productDetail={item} />
          </Link>
          </div>
      
          )
          
          ;
        })}
    </div>

  
  );
};

export default Home;
