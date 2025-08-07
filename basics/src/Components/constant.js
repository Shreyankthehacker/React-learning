export const RESTUARANT_API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"

export const IMG_CDN_URL =  "https://media-assets.swiggy.com/swiggy/image/upload/"

export const getMenuUrl = (restaurantId) => 
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}`;
  