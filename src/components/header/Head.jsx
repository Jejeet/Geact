import React, { useState } from "react";
import "../header/head.css";
import ReactDOM from 'react-dom';
const Head = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="inputsection">
      <div className="logo">
        <h1>Google</h1>
      </div>
      <div className="theSearch">
        <div className="search">
          
          <span class="material-symbols-outlined">search</span>
        </div>
        <div className="otherMenu">
          <div className="speaker">
            <span class="material-symbols-outlined">mic</span>
          </div>
          <div className="camera">
            {" "}
            <span class="material-symbols-outlined">photo_camera</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
