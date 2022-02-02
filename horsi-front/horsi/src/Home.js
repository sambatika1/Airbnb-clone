import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {
  return <div className="home">
    
  <div className="home_container">
  <img
         className="home_img" src=""/>
         
      <div className="home_row">
      <Product title="" image="https://cdn.shopify.com/s/files/1/0477/2131/6519/products/700_38-sw_1080x.jpg?v=1642647083"  />
      <Product title="" image="https://cdn.shopify.com/s/files/1/0477/2131/6519/products/700_38_2-sw_1080x.jpg?v=1642647089"/>
      <Product title="" image="https://cdn.shopify.com/s/files/1/0477/2131/6519/products/700_38_1-sw_1080x.jpg?v=1642647096" price="400" rating={4}/>
      
      </div>
      <div className="home_row">
       <Product title="" image="https://cdn.shopify.com/s/files/1/0477/2131/6519/products/700_4_1-sw_1080x.jpg?v=1642644566"/> 
       <Product title="" image="https://cdn.shopify.com/s/files/1/0477/2131/6519/products/700_4_562cc01f-c54b-4246-87e7-1f4edc299a10-sw_1080x.jpg?v=1642644580"/>
       <Product title="" image="https://cdn.shopify.com/s/files/1/0477/2131/6519/products/700_4-sw_1080x.jpg?v=1642644573" price="400" rating={4}/>
      </div>
  </div>



  </div>;
}

export default Home;
