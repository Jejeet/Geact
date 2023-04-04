
import "../header/head.css";
import ReactDOM from 'react-dom';
const Head = (props) => {
const { searchTerm, setSearchTerm, handleSearchSubmit } = props;

const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);
};

  

  return (
    <div className="inputsection" onSubmit={handleSearchSubmit}  >
      <div className="logo">
        <h1>Google</h1>
      </div>
    
      <div className="theSearch"  >
        <div className="search">
          
          <span class="material-symbols-outlined">search</span>
        </div> 
        <input type="text"  placeholder="search here" value={searchTerm} onChange={handleSearchInputChange}/>
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
