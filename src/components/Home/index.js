import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss'

const Home = (props) => (
  // return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br />I'm<br/><span className="k">K</span>almtalyst!<br />web developer</h1> 
        <h2>Frontend Developer</h2>
        <Link to='/contact' className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  // )
    
  );

export default Home;