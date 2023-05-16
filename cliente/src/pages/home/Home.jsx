import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import ReservationForm from '../../components/reservationForm/ReservationForm'
import Footer from "../../components/footer/Footer"
import Slider from "../../components/slider/Slider"

const Home = () => {
  return (
    <div className="home">
      <div>
        <Navbar/>
        <Header/>
        <div className="reservation-form">
          <ReservationForm/>
        </div>
        <Slider/>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home