import React from 'react';
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import ReservationForm from '../../components/reservationForm/ReservationForm';
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import SliderComponent from "../../components/slider/Slider";
import AboutUs from "../../components/aboutUs/aboutUs";
import TermsPayment from "../../components/termsPayment/termsPayment";
import Featured from "../../components/featured/Featured";
import Particular from "../../components/particular/Particular";

const Home = () => {
  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div>
        <Navbar/>
        <Header/>
        <SliderComponent />
        <div id="aboutUs">
          <AboutUs/>
        </div>
        <div className="homeContainer">
          <Featured/>
        </div>
        <div className="homeContainer">
          <Particular/>
        </div>
        <TermsPayment/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
