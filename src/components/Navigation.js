import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
           <Link to ='/'>Home</Link>
        </div>
        <div>
          <a href="/about"> About         <Link to ='/about'>  </Link>
 </a>
          <Link to ='/about'/> 
        </div>
        <div>
                   <Link to ='/contact'> Contact </Link>

          <Link to ='/contact'>  </Link>

        </div>
      </div>
    </div>
  );
};

export default Navigation;
