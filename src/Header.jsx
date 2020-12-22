import React from "react";

const Header = () => {
  return (
    <>
      <nav>
      <input type="checkbox" id="check" for="check" ></input>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        
        <label className="logo">TRVL</label>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
