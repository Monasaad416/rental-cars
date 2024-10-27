import star from "../../assets/imges/card/star.png";
import userIcon from "../../assets/imges/card/user.png";
import arrowRight from "../../assets/imges/card/arrow-right.png";
import ac from "../../assets/imges/card/d8wxke_2_.png";
import frame from "../../assets/imges/card/Frame.png";
import car1 from "../../assets/imges/card/car1.png";
import car2 from "../../assets/imges/card/car2.png";
import car3 from "../../assets/imges/card/car3.png";
import { Link } from "react-router-dom";


export default function Car(props) {
       //console.log(props);
       let {car} = props;

       const carColors = [car1,car2,car3]
  return (
    <div className="col-md-3 mt-3">
      <div className="card">
        <img
          src={carColors[Math.floor(Math.random() * carColors.length)]} // Correctly access the random car color
          className="card-img-top w-75 m-auto d-block my-2"
          alt="popular-car"
        />

        <div className="card-body">
          <h5 className="card-title fs-3">{car.car_model}</h5>
          <div className="d-flex justify-content-between">
            <div>
              <img src={star} alt="review" />
              <small className="text-muted">(1345 reviews)</small>
            </div>

            {/* <h6 className="mx-1">{car.price}</h6> */}
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between flex-column">
              <p className="card-text text-nowrap d-flex align-items-start">
                <img src={userIcon} alt="user" />
                <small className="text-muted"> 2 Passanger</small>
              </p>
              <p className="card-text text-nowrap d-flex align-items-start">
                <i className="fa-solid fa-calendar-days me-2"></i>
                <small className="text-muted"> 2021</small>
              </p>
            </div>
            <div className="d-flex justify-content-between flex-column">
              <p className="card-text text-nowrap d-flex align-items-start">
                <img src={ac} className="w-100" alt="ac" />
                <small className="text-muted"> Air conditioning </small>
              </p>
              <p className="card-text text-nowrap d-flex align-items-start me-3">
                <img src={frame} alt="frame" />
                <small className="text-muted"> Automatic </small>
              </p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="text-muted">Price</p>
            <div className="d-flex">
              <h6>{car.price}</h6> / <p className="text-muted">day</p>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-primary w-100">
              <Link
                to={`/home/all-vehicles/${car.id}`}
                className="text-white text-decoration-none"
              >
                {" "}
                View details
                <img src={arrowRight} alt="arrowRight" className="ms-2" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
