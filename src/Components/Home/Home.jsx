
import Header from '../Header/Header'
import PopularCars from '../PopularCars/PopularCars.jsx'
import ChooseUs from "../ChooseUs/ChooseUs.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import DownloadApps from '../DownloadApps/DownloadApps.jsx';
import Footer from "../Footer/Footer.jsx";

export default function Home() {
  return (
    <div className='container-fluid'>
      <Header/>
      <PopularCars/>
      <ChooseUs />
      <Testimonials/>
      <DownloadApps/>
      <Footer/>

    </div>
  )
}
