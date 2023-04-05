import "../header/head.css";
import ReactDOM from "react-dom";
import { useState } from "react";
const Head = () => {
  // const { searchTerm, setSearchTerm, handleSearchSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [paraContent, setParaContent] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
   
 const handleKeyPress =(event)  =>{
  if (event.key === "Enter"){
 setParaContent(searchTerm)
 console.log(searchTerm);
 setSearchTerm("")
  }
 }

  return (
  <div  className="inputsection">
    <div>
      <div className="logo">
        <h1>Google</h1>
      </div>

      <div className="theSearch">
        <div className="search">
          <span class="material-symbols-outlined">search</span>
        </div>
        <input
          type="text"
          placeholder="search here"
          value={searchTerm}
          onChange={handleSearchInputChange}
          onKeyDown ={handleKeyPress}
        />
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
      <div>
        <p>{paraContent}</p>
      </div>
    </div>
    </div>
  );
};

export default Head;
