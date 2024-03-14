import React, { createContext, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Services from "./Services";
import Aboutme from "./Aboutme";
import Singleproduct from "./Singleproduct";
export const cartCount = createContext();


const Main = () => {
  const [cart, setCart] = useState([]);
  const heading = "lorem";

  return (
    <cartCount.Provider value={{ cart, setCart , heading }}>
<BrowserRouter>
<Header />
<Routes>
  {/* <Route path="/" element={<Header/>}></Route> */}
 <Route path="/products" element={<Home/>}></Route>
 <Route path="/about" element={<About/>}>
 <Route path="/aboutto" element={<Aboutme/>}></Route>
 </Route>

<Route path="/blog" element={<Blog/>}></Route>
<Route path="/services" element={<Services/>}></Route>
<Route path="/contact" element={<Footer/>}></Route>
<Route path="/singleproduct/:id" element={<Singleproduct/>}></Route>


</Routes>

</BrowserRouter>
      
      {/* <Home /> */}
      {/* <Footer/> */}
    </cartCount.Provider>
  );
};

export default Main;
