import styles from "../Footer/Footer.module.scss"
import footer_logo from "../../assets/imges/footer/logo-footer.png"
import location from "../../assets/imges/footer/location.png";
import call from "../../assets/imges/footer/call.png";
import sms from "../../assets/imges/footer/sms.png";
import facebook from "../../assets/imges/footer/facebook.png";
import instagram from "../../assets/imges/footer/instagram.png";
import youtube from "../../assets/imges/footer/youtube.png";

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className="row">
        <div className="col-md-5 my-5">
          <div className="d-flex justify-content-between">
            <div>
              <img
                src={footer_logo}
                alt="footer logo"
                style={{ width: "60%", padding: "1rem 0" }}
              />

              <div className="d-flex justify-content-start align-items-center my-3">
                <div>
                  <img src={location} alt="location" />
                </div>
                <div className="d-flex flex-column mx-2 text-white">
                  <small>
                    25566 Hc 1,Glenallen,
                    <br />
                    Alaska, 99588, USA
                  </small>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center my-3">
                <div>
                  <img src={call} alt="phone number" />
                </div>
                <div className="d-flex flex-column mx-2 text-white">
                  <small>+603 4784 273 12</small>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center my-3">
                <div>
                  <img src={sms} alt="email" />
                </div>
                <div className="d-flex flex-column mx-2 text-white">
                  <small>rentcars@gmail.com</small>
                </div>
              </div>
            </div>

            <div className=" text-white mt-3">
              <div className={`h6 text-capitalize mb-4 ${styles.footer_title}`}>
                our products
              </div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Carrers
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    cars
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Priceline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-7 my-md-5 mb-5">
          <div className="d-flex justify-content-around">
            <div className=" text-white mt-3">
              <div className={`h6 text-capitalize mb-4 ${styles.footer_title}`}>
                about rent cars
              </div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link text-white text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    why choose us
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white text-capitalize" href="#">
                    our story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    investor relations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    press center
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    advertise
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-white mt-3">
              <div className="h6 text-capitalize mb-4">resources</div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link text-white text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    download
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white text-capitalize" href="#">
                    help center
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    guides
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    partner network
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    cruises
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-capitalize" href="#">
                    developer
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-white mt-3">
              <div className="h6 text-capitalize mb-4">follow us</div>
              <div className="d-flex">
                <img src={facebook} alt="facebook" className="me-1" />
                <img src={instagram} alt="instagram" className="me-1" />
                <img src={youtube} alt="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-white">
        <hr
          style={{ padding: "0 5rem", display: "block", margin: "auto" }}
        />
        <p className="mt-md-5 mt-3 mb-4">Copyright 2023 ・ Rentcars, All Rights Reserved</p>
      </div>
    </div>
  );
}
