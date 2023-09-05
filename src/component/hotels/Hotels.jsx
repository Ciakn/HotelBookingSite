import React from "react";
import { Link } from "react-router-dom";
import { useHotels } from "../../Providers/HotelProvider";



function Hotels() {
 const{isLoading , hotels} =useHotels()
 console.log(hotels);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="searchList">
      <h2>search Result : {hotels.length}</h2>

      {hotels.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat${item.latitude}&lng=${item.longitude}`}
          >
            <div className="searchItem">
              <img src={item.picture_url.url} alt="" />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price ">{item.price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Hotels;
