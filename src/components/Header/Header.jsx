import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
const Header = () =>{
    return(
        <div className='holder'>
            <header className="header">
                <Navbar />
            <div className="header-content flex flex-c text-center text-black">
<h2 className="header-title text-capitalize"> 
    Find Books of Your Choice !
</h2>
<p className="header-text fs-18 fw-3">
   Welcome to Book Finder, a website having the largest collection of books from authors from all corners of the world. Just dive into our collection and find books of your favourite authors and genre anytime !
</p>
<SearchForm />
</div>
             </header>
           
        </div>


    )
}
export default Header;

/* <h2 className="header-title text-capitalize">
    Find Books of Your Choice !
</h2>
<p className="header-text fs-18 fw-3">
   Welcome to Book Finder, a website having the largest collection of books from authors from all corners of the world. Just dive into our collection and find books of your favourite authors and genre anytime !
</p>  */