import React from "react";

// img
import logo from '../logo.svg'

// style
import { fontnavbar } from "../style/style";

const Navbar = ()=>{
    return (
      <>

      <nav class="navbar navbar-expand navbar-dark bg-dark" style={fontnavbar}>
        <div class="container">
            <img src= {logo} alt=""  width={'55px'} height= {'55px'} />
              <h3 className="navbar-brand mt-2">React-project</h3>
                <div class="collapse navbar-collapse" id="navbarNavDropdown"></div>
        </div>
      </nav>

      </>  
    );
};

export{Navbar}