import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {EarthCanvas } from "./canvas";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'>Chainify</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We believe in a <br className='sm:block hidden' />
            world where barriers  <br/>to real estate are<br></br>removed<br></br>
          </p>
      <li className="nav-item"><Link className="nav-link" to="/change">
        
        </Link></li>

        </div>
      </div>
      

      <EarthCanvas/>
      

      {/* <ComputersCanvas /> */}
      
    </section>
  );
};

export default Hero;
