import React from "react";
import { IMG_CDN_URL } from "./constant";
import restuarants from "../assets/config";


const RestaurantCard = (props) => {
  
  let restuarant = props.restaurant
  console.log(restuarant)
   
    return (
      <div className='flex items-center justify-center  from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2 '>
    <div className='w-80 max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div>
          <img className='h-[236px] ' src={IMG_CDN_URL + restuarant.cloudinaryImageId}>
           </img>
          <div className='p-4 sm:p-6'>
            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{restuarant.name}</p>
            <div className='flex flex-row'>
              
              <p className='text-[17px] font-bold text-[#0FB478]'>{restuarant.cuisines.join(' ')}</p>
            </div>
            <p className='text-[#7C7C80] font-[15px] mt-6'>{restuarant.areaName}</p>


              <p className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
              ⭐ {restuarant.avgRating}
              </p>
          </div>
        </div>
    </div>
</div>
    );
  };
  
  export default RestaurantCard;


  // Higher order component 

  // takes input as restuarantcard and outputs the promotedrestuarantcard




  export const withPromotedLabel = (RestaurantCard) => {
    
    return (props) => {
      return (
        <div>
          <label className="text-red-500 font-bold">Promoted</label>
          {console.log(props.restaurant)}
          
          <RestaurantCard  {...props} /> 
          
        </div>
      );
    };
  };
  












  /*
  <!-- component -->
<!-- This is an example component -->
<div className='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
    <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div className='max-w-md mx-auto'>
          <div className='h-[236px]' style='background-image:url({IMG_CDN_URL + restuarant.cloudinaryImageId});background-size:cover;background-position:center'>
           </div>
          <div className='p-4 sm:p-6'>
            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{restuarant.name}</p>
            <div className='flex flex-row'>
              
              <p className='text-[17px] font-bold text-[#0FB478]'>{restuarant.cuisines.join(' ')}</p>
            </div>
            <p className='text-[#7C7C80] font-[15px] mt-6'>{restuarant.areaName}</p>


              <p className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  {restuarant.avgRating}
              </p>
            <Link className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  View Menu
              </p>
          </div>
        </div>
    </div>
</div>
*/