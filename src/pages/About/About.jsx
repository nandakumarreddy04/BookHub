import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book Finder</h2>
            <p className='fs-17'>Book Finder is an amazing website built for book lovers. Having a vast collection of book from all genres, Book Finder serves as the ultimate place to find your own favourite book.</p>
            <p className='fs-17'>Book Finder has an amazing collection of books. No matter who is your favourite author or which genre suits you the best, if you are a book lover, then Book Finder is the best place for you.<br /> Waiting for what? Just dive into our awesome collection and search for your favourite book !</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About