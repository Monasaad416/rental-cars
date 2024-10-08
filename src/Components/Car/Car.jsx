import star from "../../assets/imges/card/star.png";
import userIcon from "../../assets/imges/card/user.png";
import arrowRight from "../../assets/imges/card/arrow-right.png";
import ac from "../../assets/imges/card/d8wxke_2_.png";
import frame from "../../assets/imges/card/Frame.png";
import car3 from "../../assets/imges/card/car3.png";


export default function Car(props) {
       console.log(props);
       let {car} = props;
  return (
 
    <div  className="col-md-3">
      <div className="card">
        <img
          src={car3}
          className="card-img-top w-75 m-auto d-block my-2"
          alt="popular-car"
        />

        <div className="card-body">
          <h5 className="card-title fs-3">BMW X5</h5>
          <div className="d-flex align-items-baseline">
            <img src={star} alt="review" />
            <h6 className="mx-1">4.6</h6>
            <small className="text-muted">(1345 reviews)</small>
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
              <h6>$55000</h6> / <p className="text-muted">day</p>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-primary w-100">
              {" "}
              View details
              <img src={arrowRight} alt="arrowRight" className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
