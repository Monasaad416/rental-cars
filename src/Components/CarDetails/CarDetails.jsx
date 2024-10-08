import styles from '../CarDetails/CarDetails.module.scss'
import choose_img from "../../assets/imges/landing-page/sec-5/audi1.png";
import userIcon from "../../assets/imges/card/user.png";
import door from "../../assets/imges/card/doors.png";
import ac from "../../assets/imges/card/d8wxke_2_.png";
import frame from "../../assets/imges/card/Frame.png";
import { Link } from 'react-router-dom';


export default function CarDetails() {
  return (
    <div>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-md-5 mt-2 mx-md-5 mx-1">
            <li className="breadcrumb-item fs-5">
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item fs-5">
              <Link to="/home">Cars</Link>
            </li>
            <li className="breadcrumb-item active fs-5" aria-current="page">
              Car Details
            </li>
            <li
              className="breadcrumb-item active fs-5"
              aria-current="page"
            ></li>
          </ol>
        </nav>
      </div>
      <div className="row choose_us_bg">
        <div className="col-md-6">
          <div className={`d-flex justify-contnt-center align-items-center`}>
            <img
              className="d-md-block d-none"
              style={{ marginTop: "10rem", width: "80%" }}
              src={choose_img}
              alt="Choose Us"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-md-start justify-content-center align-items-cnter">
            <div className={`rounded-2 text-uppercase popular_btn`}>
              why choose us
            </div>
          </div>

          <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-cnter">
            <div className={`my-3 text-capitalize`}>
              <h2>We offer the best experience with our rental deals</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div
                className={`d-flex flex-row justify-content-start align-items-center`}
              >
                <img
                  className={`me-md-3 ms-2 mt-4 ${styles.choose_us_icon}`}
                  src={userIcon}
                  alt="choose location"
                />
                <small className="mt-3 text-muted text-center">
                  2 Passanger.
                </small>
              </div>

              <div
                className={`d-flex flex-row justify-content-start align-items-center`}
              >
                <img
                  className={`me-md-3 ms-2 mt-4 ${styles.choose_us_icon}`}
                  src={ac}
                  alt="choose location"
                />
                <small className="mt-3 text-muted text-center">
                  Air conditioning
                </small>
              </div>

              <div
                className={`d-flex flex-row justify-content-start align-items-center `}
              >
                <img
                  className={`me-md-3 ms-2 mt-4 ${styles.choose_us_icon}`}
                  src={frame}
                  alt="choose location"
                />
                <small className="mt-3 text-muted text-center">CVT</small>
              </div>

              <div
                className={`d-flex flex-row justify-content-start align-items-center`}
              >
                <img
                  className={`me-md-3 ms-2 mt-4 ${styles.choose_us_icon}`}
                  src={door}
                  alt="choose location"
                />
                <small className="mt-3 text-muted text-center">Doors</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
