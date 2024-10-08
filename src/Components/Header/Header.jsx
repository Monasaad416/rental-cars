
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from "../../assets/imges/nav/logo.png"
import animationImg from "../../assets/imges/landing-page/car 2 1.png"



export default function Header() {


  return (
    <div>
      <div className="mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className={`${styles.header_bg}`}>
              {/* Navbar start */}
              <nav className="navbar navbar-expand-lg navbar-light fs-5 mx-md-4 mx-1 m-0">
                <div className="container-fluid ">
                  <Link className="navbar-brand" to="home">
                    <img className={`${styles.logo}`} src={logo} alt="logo" />
                  </Link>
                  <button
                    className="navbar-toggler collapsed mx-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul
                      className="navbar-nav mx-auto mb-2 mb-lg-0"
                      style={{ paddingLeft: "5rem" }}
                    >
                      <li className="nav-item">
                        <a
                          className={`nav-link ${styles.navItem}`}
                          aria-current="page"
                          href="#"
                        >
                          Become a rintal
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${styles.navItem}`} href="#">
                          Rinatal deals
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${styles.navItem}`} href="#">
                          How it work
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${styles.navItem}`} href="#">
                          Why choose us
                        </a>
                      </li>
                    </ul>
                    <div>
                      <form>
                        <div
                          className={`d-flex justify-contnt-start ${styles.from_sec}`}
                        >
                          <button
                            className={`btn btn-btn-outline-light fw-normal fs-5 ${styles.submit_btn} `}
                            type="submit"
                          >
                            Sign in
                          </button>

                          <button
                            className={`btn btn-primary fw-normal fs-5 ${styles.submit_btn}`}
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
              {/* Navbar end */}

              {/* animation start */}
              <div className={ ` ${styles.animation_img_container}`}>
                <div className="row mt-md-5 mt-1">
                  <div
                    className={`mt-md-5 mt-1 pt-md-5 col-md-4 order-md-1 order-2`}
                  >
                    <div
                      className={`${styles.animation_text} `}
                    >
                      <h1 className={`fw-md-bolder fw-bold ${styles.animation_heading}`}>
                        Find, book and rent a car{" "}
                        <span className={`${styles.animation_span}`}>
                          Easily{" "}
                        </span>
                      </h1>
                      <p
                        className={`text-muted fw-md-bold fs-md-4 fs-6 pe-md-5 ${styles.animation_p}`}
                      >
                        {" "}
                        Get a car wherever and whenever you need it with your
                        IOS and Android device.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-8 order-md-2 order-1 text-end">
                    <div>
                      <img
                        className={`${styles.animation_img}`}
                        src={animationImg}
                        alt="car"
                      />
                    </div>
                  </div>
                </div>

                {/* search bar start */}
                <div className="row">
                  <div className="col-12 my-1">
                    <div className={`${styles.search_bar}`}>
                      <input
                        type="text text-absolute"
                        className="form-control"
                        placeholder="search by name"
                      />
                      <button
                        className={`btn btn-primary fs-5 ${styles.search_btn}`}
                      >
                        Search
                      </button>

                      <button
                        className={`btn btn-light ${styles.location_btn}`}
                      >
                        <i className="fa-solid fa-location-dot"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* search bar start */}
              </div>
              {/* animation end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
