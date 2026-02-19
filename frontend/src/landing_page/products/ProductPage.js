import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="Media/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1Text="TryDemo"
        link2Text="LearnMore"
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageURL="Media/console.png"
        productName="Console"
        productDesription="The central dashboard for your GrowTrade account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1Text="LearnMore"
        />
      <LeftSection
        imageURL="Media/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link3Text="Coin"
        googlePlay=""
        appStore=""
      />
      <RightSection 
      imageURL="Media/kiteconnect.png"
      productName="Kite Connect API"
      productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      link2Text="KiteConnect"
      />
      <LeftSection
        imageURL="Media/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />

      
    
      <Universe />
    </>
  );
}

export default ProductPage;
