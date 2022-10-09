// import react
import React, { Fragment } from 'react';

// import style
import './style/App.css';

// import lib
import 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';

// import component(default)
import Main from './component/main';
import Footer from './component/footer';
import Navbar from './component/navbar';

const App = () => {
  return (
    <Fragment>
        <Navbar/>
          <Main/>
        <Footer/>
    </Fragment>
  )
}

export default App;
