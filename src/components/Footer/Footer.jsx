import "./footers.css";
import React from 'react'
import leaf from "../../images/leaf.png"

const Footer = () => {
  return (
   
        <footer >
            <div className="preffix">
                <p>Nigeria</p>
            </div>
            <hr />
           

            <div className="awarness">
                
        <ul>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">About</a></li>
        </ul>
         <ul className="middle">
                    <li> <img src={leaf} /> </li>
                    <li><span> Carbon neutral since 2007</span></li>
                </ul>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>

        </footer>
    
  )
}

export default Footer