import Footer from "./components/Footer/Footer";
import Head from "./components/header/Head";
import Input from "./components/inputs/Input";
import Nav from "./components/navs/nav";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      setSearchTerm('');
    }
  };
  return (
    <div className="App">
      <Nav />
      <Head searchTerm={searchTerm} setSearchTerm ={setSearchTerm} handleSearchSubmit ={handleSearchSubmit}/> {searchTerm && < searchResult searchTerm ={searchTerm} />}
      <Input />
      <Footer />
    </div>
  );
}

export default App;
