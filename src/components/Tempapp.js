import { useState, useEffect } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city, setCity]=useState(null);
    const [search, setSearch] = useState("Dhangadhi");

    useEffect( () => {
       const fetchApi = async () => {
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0119033edd88d37ce7d023e88552fe0a`
         const response = await fetch(url);
         const resJson = await response.json();
         console.log(resJson);
         setCity(resJson.main);
       }
       fetchApi();
    }, [search]);
    // jab jab search pe update hoga, tab tab use effect chlega
  return(
      <>
        <div className="box">
          <div className="inputData">
           <input 
           type="search" 
           className="inputField" 
           defaultValue=" " 
           value={search}
           onChange={ (event) => {
               setSearch(event.target.value);
           }}    
           />
          </div>
        {!city? (<p className="errorMsg">No data found</p>):
        (<div>
        <div className="info">
          <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
          <h1 className="temp">{`Temp in celsius: ${city.temp}°Cel`}</h1>
          <h3 className="tempmin_max">{`Max: ${city.temp_max}°Cel | Min: ${city.temp_min}°Cel`}</h3>
        </div>
        
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>)
        }
        </div>
      </>
  );
}
export default Tempapp;