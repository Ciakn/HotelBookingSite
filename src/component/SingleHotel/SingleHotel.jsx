import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useHotels } from "../../Providers/HotelProvider";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrentHotel, currentHotel } = useHotels();
  console.log(currentHotel);
  useEffect(() => {
    getHotel(id);
  }, [id]);
  if (isLoadingCurrentHotel) {
    return <p>Loading...</p>;
  }
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;{" "}
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.xl_picture_url} alt="nameSo" />
      </div>
    </div>
  );
}

export default SingleHotel;
