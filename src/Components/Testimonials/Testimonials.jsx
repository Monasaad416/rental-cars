
import styles from "./Testimonials.module.scss"
import testimonial1 from"../../assets/imges/landing-page/sec-6/girl.png"
import testimonial2 from "../../assets/imges/landing-page/sec-6/Rectangle 8.png";
import star from "../../assets/imges/card/star.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials() {
  var settings = {
      dots: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8fbff", marginTop: "7rem" }}
    >
      <div className={`row mt-5 ${styles.testimonials_sec}`}>
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`mt-5 rounded-2 text-uppercase popular_btn`}>
              testimonials
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className={`text-capitalize popular_title`}>
            most popular cars rental deals
          </h2>
        </div>
      </div>

      <Slider {...settings}>
        <div style={{ width: "40%" }} className="mb-5">
          <div className={`card mx-5  ${styles.testimonial_container}`}>
            <div className="row">
              <div className="col-md-6">
                <img src={testimonial2} className="w-100" alt="testimonial" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title mb-0">
                    5.5 <small className="h5">stars</small>
                  </h1>
                  <div className={`d-flex`}>
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                  </div>
                  <p className="card-text fs-4 my-1">
                    {" "}
                    “I feel very secure when using caretall's services. Your
                    customer care team is very enthusiastic and the driver is
                    always on time.”{" "}
                  </p>
                  <div className="card-text">
                    <p className="bold mb-0">Charlie Johnson</p>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "40%" }} className="mb-5">
          <div className={`card mx-5  ${styles.testimonial_container}`}>
            <div className="row">
              <div className="col-md-6">
                <img src={testimonial1} className="w-100" alt="testimonial" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title mb-0">
                    5.5 <small className="h5">stars</small>
                  </h1>
                  <div className={`d-flex`}>
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                    <img src={star} alt="review" />
                  </div>
                  <p className="card-text fs-4 my-1">
                    {" "}
                    “I feel very secure when using caretall's services. Your
                    customer care team is very enthusiastic and the driver is
                    always on time.”{" "}
                  </p>
                  <div className="card-text">
                    <p className="bold mb-0">Charlie Johnson</p>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
