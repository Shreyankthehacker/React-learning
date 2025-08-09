import React from "react";
import * as config from '../assets/config.js'
import { Link } from "react-router";
const Title = () => {
    
  return (

      
    <Link to="/" className='flex  gap-x-3 hover:opacity-90 transition-opacity'>
    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
      <img  className="text-white font-bold text-xl" src = 'https://img.freepik.com/premium-vector/logo-chinese-food-company-that-says-bizzard_863867-238.jpg?semt=ais_hybrid&w=740&q=80'></img>
    </div>
    <span className="text-2xl font-bold text-white tracking-tight">Banni Thinnona</span>
  </Link>
    
    );
  };
  
  export default Title;
  