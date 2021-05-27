import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home_container">
               <img
               className="home_image"
               src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
               alt=""
               />

               <div className="home_row">
                   <Product
                   id="9082933"
                   title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses:"
                   price={15.08}
                   image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                   rating={5}
                   />

                   <Product
                   id="908293"
                   title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
                   price={345.99}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"

                   /> 


               </div>
               
               <div className="home_row">
                   <Product
                   id="4903850"
                   title="realme Band (Black) - Full Colour Screen with Touchkey"
                   price={199.99}
                   rating={5}
                   image="https://m.media-amazon.com/images/I/61-+zVZL4LL._AC_UL320_.jpg"
                   />

                   <Product
                   id="3254354345"
                   title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
                   price={598.99}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SX679_.jpg"
                   />
            
                   <Product
                   id="23445930"
                   title="All-new Echo (4th Gen) | Premium sound powered by Dolby and Alexa (Blue)"
                   price={108.72}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/61c%2BqKvOXrL._SL1000_.jpg"
                   />
               </div>

               <div className="home_row">
                   <Product
                    id="90829332"
                    title="Samsung C49RG9 49 32:9 120 Hz Curved FreeSync HDR LCD Gaming Monitor"
                    price={199.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
                    
                   />
               </div>


           </div>
        </div>
    )
}

export default Home;
