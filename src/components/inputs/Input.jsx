import "../inputs/inputs.css";
import React from "react";

const Input = () => {
  return (
    <div className="buttonSection">
      <div className="buttons">
        <button className="searching" type="submit">Google search</button>
        <button className="feelings">I'm feeling Lucky</button>
      </div>
      <div className="offers">
        <p>
          <span>Google offered in :</span> <a href="#">Hausa</a>{" "}
          <a href="#">Igbo</a>
          <a href="#">Èdè Yorùbá</a>
          <a href="#">Nigerian Pigin</a>
        </p>
      </div>
    </div>
  );
};

export default Input;
