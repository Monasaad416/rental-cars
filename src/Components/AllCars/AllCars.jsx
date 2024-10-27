// import styles from 'AllCars.module.scss';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from '../Car/Car';
import CustomPagination from '../CustomPagination/CustomPagination.jsx';



export default function Cars() {

  const [allCars,setAllCars]=useState([])
  const [page, setPage] = useState(1)
  const carsPerPage = 16

  const getAllcars = async () => {
    try {
          let response = await axios.get(
            "https://myfakeapi.com/api/cars/"
          ); 

          setAllCars(response?.data?.cars);

          
      } catch (e) {
        console.log(e)
      }
  }


  useEffect(() => {
    getAllcars();
  }, []);

  
  const totalCars = allCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);
  const indexOfLastCar = page * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = allCars.slice(indexOfFirstCar, indexOfLastCar);

  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

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
        {currentCars.length > 0 ? (
          currentCars.map((car) => <Car key={car.id} car={car} />)
        ) : (
          <p className="text-muted">Loading...</p>
        )}
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="d-flex justify-content-center">
            {totalPages > 1 && (
              <CustomPagination
                total={totalPages}
                current={page}
                onChangePage={handleChangePage}
              ></CustomPagination>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
