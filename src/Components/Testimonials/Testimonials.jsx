
import styles from "./Testimonials.module.scss"
import testimonial1 from"../../assets/imges/landing-page/sec-6/girl.png"
import testimonial2 from "../../assets/imges/landing-page/sec-6/Rectangle 8.png";
import star from "../../assets/imges/card/star.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div>
      <div
        className={`row mt-5 ${styles.testimonials_sec} pb-5`}
        style={{ backgroundColor: "#f8fbff", marginTop: "7rem" }}
      >
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`mt-5 rounded-2 text-uppercase popular_btn`}>
              testimonials
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className={`text-capitalize popular_title`}>
            what people say about us?
          </h2>
        </div>

        <div className={`col-12 ${styles.slider_container}`}>
          <div className="row">
            <div className="col-12"></div>
            <Slider {...settings}>
              <div className="mb-5">
                <div className={`card mx-5  ${styles.testimonial_container}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={testimonial2}
                        className={`${styles.card_img} w-100`}
                        alt="testimonial"
                      />
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
                        <p className="card-text fs-5 my-1">
                          {" "}
                          “I feel very secure when using caretall's services.
                          Your customer care team is very enthusiastic and the
                          driver is always on time.”{" "}
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
              <div className="mb-5">
                <div className={`card mx-5  ${styles.testimonial_container}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={testimonial1}
                        className={`${styles.card_img} w-100`}
                        alt="testimonial"
                      />
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
                        <p className="card-text fs-5 my-1">
                          {" "}
                          “I feel very secure when using caretall's services.
                          Your customer care team is very enthusiastic and the
                          driver is always on time.”{" "}
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
        </div>
      </div>
    </div>
  );
}
