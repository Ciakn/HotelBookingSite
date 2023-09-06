import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const HotelContext = createContext();

function HotelProvider({ children }) {
  const [currentHotel, setCurrentHotel] = useState({});
  const [isLoadingcurrentHote, setIsLoadingCurrentHotel] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  console.log(room);
  console.log(destination);
  const { isLoading, data: hotels } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );
console.log(currentHotel);
  async function getHotel(id) {
    setIsLoadingCurrentHotel(true)
    try {
      const { data } = await axios.get(`http://localhost:5000/hotels/${id}`);
      setCurrentHotel(data)
      setIsLoadingCurrentHotel(false)
    } catch (error) {
     toast.error(error.message);
     setIsLoadingCurrentHotel(false);
  }

}

  return (
    <HotelContext.Provider value={{ isLoading, hotels ,currentHotel , getHotel , setIsLoadingCurrentHotel}}>
      {children}
    </HotelContext.Provider>
  );
}

export default HotelProvider;
export function useHotels() {
  return useContext(HotelContext);
}
