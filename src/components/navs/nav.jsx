import React from "react";
import "../navs/navs.css";
import leaf from "../../images/leaf.png"
const nav = () => {
  return (
    <div>
      <div className="navBody">
        <div className="mailImg">
          <div>Gmail</div>
          <div>img</div>
        </div>

        <div className="moreProfile">
          <div>
            <span class="material-symbols-outlined">apps</span>
          </div>
          <div><img src={leaf} /></div>
        </div>
      </div>
    </div>
  );
};

export default nav;
