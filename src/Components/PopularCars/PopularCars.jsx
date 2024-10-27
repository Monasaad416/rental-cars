import styles from "./PopularCars.module.scss"



// import Car from "../Car/Car.jsx";
import  { useEffect, useState } from "react";
import axios from "axios";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


import location from "../../assets/imges/landing-page/location.png"
import car from "../../assets/imges/landing-page/car-icon.png"
import jaguar from "../../assets/imges/landing-page/jaguar.png"
import nissan from "../../assets/imges/landing-page/nissan.png";
import volvo from "../../assets/imges/landing-page/volvo.png";
import audi from "../../assets/imges/landing-page/audi.png";
import ac from "../../assets/imges/card/d8wxke_2_.png";

import Car from "../Car/Car";

export default function PopularCars() {

  const [allCars, setAllCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  



  const getpopularCars = async () => {
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars");

    //console.log(response?.data?.cars);
       setAllCars(response?.data?.cars);

      //console.log(allCars);
    } catch (error) {
      console.log(error);
    }
  };
  const applySearch = (searchTerm) => {
    if (!searchTerm) return;
    const searchResult = allCars.filter((car) =>
      car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setAllCars(searchResult.length > 0 ? searchResult : allCars);
     // Clear the input after search
  };
  useEffect(() => {
    getpopularCars();

    
  }, []);
 var settings = {
   dots: false,
   infinite: true,
   speed: 4000,
   slidesToShow: 4,
   slidesToScroll: 1,
   initialSlide: 0,
   autoplay: true,
   autoplaySpeed: 4000,
   cssEase: "linear",
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };





  return (
    <div className="container">
      {/* search bar start */}
      <div className="row">
        <div className="col-12 my-1">
          <div
            className="input-group mb-3"
            style={{ width: "90%", margin: "auto" }}
          >
            <span className="input-group-text">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <input
              type="text"
              className="form-control py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by car model"
            />
            <button
              type="button"
              className="input-group-text btn btn-primary"
              onClick={() => applySearch(searchTerm)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* search bar start */}
      <div className="row my-4">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-cnter">
            <div className={`rounded-2 text-uppercase popular_btn`}>
              popular rental deals
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className={`text-capitalize my-3 popular_title`}>
            most popular cars rental deals
          </h2>
        </div>
      </div>

      <div className="row">
        {allCars.length > 0 ? (
          allCars.slice(0, 4).map((car) => <Car key={car.id} car={car} />)
        ) : (
          <p className="text-muted">Loading...</p>
        )}
      </div>

      <div className="row my-5">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-cnter">
            <Link to="/home/all-vehicles">
              <button
                type="button"
                className={`btn btn-outline-secondary ${styles.show_all}`}
              >
                {" "}
                Show all vehicles{" "}
                <i className="px-2 fas fa-long-arrow-alt-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-cnter">
            <div className={`rounded-2 text-uppercase popular_btn`}>
              how it work
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className={`text-capitalize popular_title`}>
            Rent with following 3 working steps
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center flex-wrap">
            <div
              className={`d-flex flex-column align-items-center px-4 mx-4 my-2 ${styles.deals}`}
            >
              <div>
                <img src={car} alt="choose location" />
              </div>
              <h5 className="my-2">Choose location</h5>
              <small className="text-muted text-center">
                Choose your and find your best car
              </small>
            </div>
            <div
              className={`d-flex flex-column align-items-center px-4 mx-4 my-2 ${styles.deals}`}
            >
              <div>
                <img src={location} alt="pick up date" />
              </div>
              <h5 className="my-2">Pick-up date</h5>
              <small className="text-muted text-center">
                Select your pick up date and time to book your car
              </small>
            </div>
            <div
              className={`d-flex flex-column align-items-center px-4 mx-4 my-2 ${styles.deals}`}
            >
              <div>
                <img src={car} alt="" />
              </div>
              <h5 className="my-2">Book your car</h5>
              <small className="text-muted text-center">
                Book your car and we will deliver it directly to you
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col my-5">
          {/* <div className="d-flex justify-content-md-between justify-content-center flex-wrap my-5 py-5"> */}
          <Slider {...settings}>
            <div>
              <img src={jaguar} alt="jaguar" className={`${styles.brands}`} />
            </div>
            <div>
              <img src={nissan} alt="nissan" className={`${styles.brands}`} />
            </div>
            <div>
              <img src={volvo} alt="volvo" className={`${styles.brands}`} />
            </div>
            <div>
              <img src={audi} alt="audi" className={`${styles.brands}`} />
            </div>
            <div>
              <img src={ac} alt="ac" className={`${styles.brands}`} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
