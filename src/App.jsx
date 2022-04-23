import React from 'react';

// style
import './style/App.css'


// lib
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/remixicon/fonts/remixicon.css'

// *** install libraries
/*
    - bootstrap
    - remixicon
    - swaetalert2
*/

//  component
import Main from './component/main' // defalut
import { Footer } from './component/footer'
import { Navbar } from './component/navbar'


// app
function App() {
  return (

    <React.Fragment>
       <>
        <Navbar/>
          <Main/>
        <Footer/>
       </>
    </React.Fragment>
   
  );
};

export default App;
