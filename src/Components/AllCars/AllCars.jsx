// import styles from 'AllCars.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cars() {

  let [allCars,setAllCars] = useState([])
  
  let getAllcars = async () => {
    try {
          let response = await axios.get("https://freetestapi.com/api/v1/cars"); 
          setAllCars(response?.data);
          console.log(allCars);
    } catch (e) {
      console.log(e)
    }
  }

  
  useEffect(() => {
    getAllcars()
  }, [])


  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              cars
            </li>
          </ol>
        </nav>
      </div>
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

        {allCars.map((car) => {
          <div key={car.id} className="col-md-3">
            
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{ car.model }</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
