
import styles from './DownloadApps.module.scss'
import android from "../../assets/imges/landing-page/andriod.png"
import ios from "../../assets/imges/landing-page/ios.png";
import iphone from '../../assets/imges/landing-page/sec-7/iPhone-14.png'

export default function DownloadApps() {
  return (
    <div className={`row`}>
      <div className="col-12">
        <div className="container">
          <div className="row ">
            <div className="d-flex justify-content-around align-items-end">
              <div className={` my-md-5 mt-3 pt-md-5 ${styles.apps_bg}`}>
                <h2>
                  Download Rentcars App for{" "}
                  <span className="text-primary">FREE </span>
                </h2>
                <small className="fs-5">
                  For faster, easier booking and exclusive deals.
                </small>
                <div className="d-flex justify-content-start my-4">
                  <img
                    src={android}
                    alt="andriod"
                    className={`mx-1 ${styles.apps_img}`}
                  />
                  <img
                    src={ios}
                    alt="andriod"
                    className={`mx-1 ${styles.apps_img}`}
                  />
                </div>
                <form action="">
                  <div className="input-group mb-3" style={{ width: "360px" }}>
                    <input
                      type="text"
                      className={`form-control  ${styles.info} my-0`}
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-group mb-3" style={{ width: "360px" }}>
                    <input
                      type="text"
                      className={`form-control ${styles.info} my-0`}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="input-group mb-3" style={{ width: "360px" }}>
                    <input
                      type="text"
                      className={`form-control ${styles.info} my-0`}
                      placeholder="Email"
                    />
                  </div>

                  <div
                    className="d-flex justify-content-center my-1"
                    style={{ width: "360px" }}
                  >
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className={`d-flex justify-content-center align-items-end d-md-block d-none mb-0`}>
                <img src={iphone} alt="iphone" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
