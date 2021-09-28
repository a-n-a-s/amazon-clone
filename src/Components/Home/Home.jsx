import React from "react";
import "./Home.css";
import Product from "../Product/Product";
const Home = () => {

  const scrollToTop = () => {
    
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="home">
      <div className="home_conatiner">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/AW-21/CitiBank/Rev/PC_BUNK_3000x1200_1._CB644631423_.jpg"
          alt=""
          className="home_image"
        />
        <div className="home_row">
          <Product
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51u2E5fNq8L._SX301_BO1,204,203,200_.jpg"
            price={302}
            id="123"
          />
          <Product
            title="COZY FURNISH Cotton 250TC Cushion Cover, 16 x 16 Inches, Green, 5 Pieces"
            rating={5}
            price={599}
            image="https://m.media-amazon.com/images/I/818NBg8WFML._SL1210_.jpg"
            id="456"
          />
        </div>
        <div className="home_row">
          <Product
            title="New Apple iPhone XR (128GB) - Yellow"
            rating={5}
            price={45999}
            image="https://m.media-amazon.com/images/I/519Wcu07etL._SL1024_.jpg"
            id="789"
          />
          <Product
            price={999}
            rating={3}
            title="pTron Bassbuds Vista in-Ear True Wireless Bluetooth 5.1 Headphones with Deep Bass, IPX4 Water/Sweat Resistant, Passive Noise Cancelation, Voice Assistance & Earbuds with Built-in HD Mic - (Black)"
            image="https://m.media-amazon.com/images/I/41LSYDR5GbS._SL1100_.jpg"
            id="753"
          />
          <Product
            image="https://m.media-amazon.com/images/I/91YJzKRI1OL._UL1500_.jpg"
            price={1111}
            title="HP Lightweight backpack Variation"
            rating={3}
            id="159"
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung 27 inch M5 Smart Monitor with Netflix, YouTube, Prime Video and Apple TV Streaming (LS27AM500NWXXL, Black)"
            image="https://m.media-amazon.com/images/I/81P2heRBdYL._SL1500_.jpg"
            rating={5}
            price={23250}
            id="852"
          />
        </div>
        <button className="backtotop" onClick={scrollToTop} >Back to Top</button>
      </div>
    </div>
  );
};

export default Home;
