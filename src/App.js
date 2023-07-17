import './App.css';
import Nav from "./Component/Nav"
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import ErrorPage from './Component/ErrorPage';


import Product from './Component/Page2/Product';
import Apple from './Component/Page2/Apple';
import Nokia from './Component/Page2/Nokia';
import Samsung from './Component/Page2/Samsung';
import Default from './Component/Page2/Default';

import Users from './Component/Page3/Users';
import UserInfo from './Component/Page3/UserInfo';

import Show from "./Component/page4/Show"
import Show2 from './Component/page4/Show2';

const App = () => {
  return (
<div>

    <Nav /> component will be available everywhere
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>


    {/* nested Route */}
    <div >

      {/* <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/product/apple' element={<Apple />} />
        <Route path='/product/nokia' element={<Nokia />} />
        <Route path='product/samsung' element={<Samsung />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes> */}

      {/* <Routes>
              <Route path='/product' element={<Product />} >
                      <Route path='/product/apple' element={<Apple />} />
                      <Route path='/product/nokia' element={<Nokia />} />
                      <Route path='product/samsung' element={<Samsung />} />
                      <Route path='*' element={<ErrorPage />} />
              </Route>
      </Routes> */}


      {/* base url / product/child  */}
      {/* <Routes>
          <Route path='/product' element={<Product />} >
                <Route path='' element={<Default/>}/>
                <Route path='apple' element={<Apple />} />
                <Route path='nokia' element={<Nokia />} />
                <Route path='samsung' element={<Samsung />} />
                <Route path='*' element={<ErrorPage />} />
          </Route>
      </Routes> */}



      {/* <Routes>
        <Route path='users' element={<Users />} />
        <Route path='users/:x' element={<UserInfo />} />
      </Routes> */}


      {/* <Routes>
        <Route path='/show' element={<Show />} />
      </Routes> */}





      {/* http://localhost:3000/show */}
      {/* <Routes> */}
        {/* <Route path='/show' element={<Show2 />} />
      </Routes> */}

    </div>

    </div>
  );
}

export default App;

//ctrl+ y   for redo