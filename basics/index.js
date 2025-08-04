import React  from "react";
import ReactDOM from "react-dom/client"


const Title = () => {
    return (
      <div className="title-container">
        <a href="/" className="title-link">
          <img
            className="logo"
            alt="logo"
            src="https://img.freepik.com/free-psd/asian-delicious-food-social-media-template_505751-2969.jpg?semt=ais_hybrid&w=740&q=80"
          />
          <h3 className="hotel-name">Banni Thinnona</h3>
        </a>
      </div>
    );
  };
  
  export default Title;
  

const HeaderComponent = () =>{
    return (
        <div className="header">
            <Title/>
            
            <div className = 'nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us </li>
                    <li> Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
};



const restuarants = [
    {
      name: "Hyderabadi Dum Biryani",
      image: "https://jheel.com.au/wp-content/uploads/2023/07/Untitled-design-2023-07-07T120405.682.png",
      cuisine: ["Hyderabadi", "Dum biryani"],
      rating: "4.7"
    },
    {
      name: "Chicken Tikka Biryani",
      image: "https://tiffinandteaofficial.com/wp-content/uploads/2024/05/IMG_7662-scaled.jpg",
      cuisine: ["Chicken Tikka", "Biryani"],
      rating: "4.5"
    },
    {
      name: "Kolkata Style Biryani",
      image: "https://kitchenofdebjani.com/wp-content/uploads/2018/10/India-Restaurant-Biryani.jpg",
      cuisine: ["Kolkata Biryani", "Potato & Egg"],
      rating: "4.6"
    },
    {
      name: "Classic Mutton Biryani",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.webp",
      cuisine: ["Mutton", "Dum style"],
      rating: "4.8"
    }
  ];
  
  

const RestuarantCard = (props) =>{
    const restuarant = props.restuarant
    return (
        <div className="card">
            <img className = "imagecard" src = {restuarant?.image}></img>
            <h2>{restuarant?.name}</h2>
            <h3>{restuarant?.cuisine.join(", ")}</h3>
            <h3>{restuarant?.rating}</h3>
        </div>
    )
}



const BodyComponent = () =>{
    return (
        <div className="restuarant-list">
            {
                restuarants.map( (restuarant,idx)  =>{
                    return <RestuarantCard restuarant = {restuarant}  key = {idx}/>
                })
            }
        </div>
    )
}

const FooterComponent = () =>{
    return (
        <h1>This is footer</h1>
    )
}

const AppLayout = () =>{
    return (
        <> {
            // this tag is called React fragment <React.fragment> does same too 
        }
<HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </>
    );
}

const container = document.getElementById("root");
 
if (!container._reactRootContainer) {
  const root = ReactDOM.createRoot(container);
  root.render(<AppLayout />);
}