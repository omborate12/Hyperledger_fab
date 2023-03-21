import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Display from "./myComponents/Display";

import Form from './myComponents/Form';
import FormChange from './myComponents/FormChange';
import FormMulti from './myComponents/FormMulti';
import Transact from "./myComponents/Transact";

const App = () => {
  return (
    // <Router>
    //   <div className='relative z-0 bg-primary'>
    //     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    //       <Navbar />
    //       <Hero />
    //     </div>
        
        
    //   </div>
    // </Router>
    <div className='relative z-0 bg-primary bg-cover bg-hero-pattern'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Router>
      <Navbar />
          <div className='container bg-cover '>


          <Routes>
            <Route exact path="/" element={
              
            <Hero/>
          
          }></Route>

          <Route exact path="/health" element={<Display key="health" pageSize = {4} category = {"health"}/>}></Route>
          
          <Route exact path="/form" element={
            <Form/>
          }></Route>
            <Route exact path="/change" element={
              <FormChange/>
            }></Route>
            <Route exact path="/multi" element={
              <FormMulti/>
            }></Route>
            <Route exact path="/transactions" element={
              <Transact/>
            }></Route>
          </Routes>
              </div>
      </Router>
      
      </div>
            </div>


  );
}

export default App;
