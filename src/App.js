import Footer from "./components/Footer/Footer";
import Head from "./components/header/Head";
import Input from "./components/inputs/Input";
import Nav from "./components/navs/nav";
import { useState } from "react";
function App() {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   if (searchTerm) {
  //     setSearchTerm('');
  //   }
  // };
  return (
    <div className="App">
      <div>
        <Nav />
      <Head  />
      <Input />
      </div>
      <Footer />
    </div>
  );
}

export default App;
