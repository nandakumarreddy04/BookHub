import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import About from "../About/About.jsx";
import BookList from "../../components/BookList/BookList.jsx"

const Home = () =>{
    return(
       <main>
        <Header />
        <Outlet />
        <BookList/>
        <About />
     
       </main>
    )
}
export default Home;
