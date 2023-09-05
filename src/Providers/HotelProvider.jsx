import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const HotelContext = createContext();

function HotelProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  console.log(room);
  console.log(destination);
  const { isLoading, data: hotels } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );
console.log(hotels);
  return (
    <HotelContext.Provider value={{isLoading, hotels}}>
      {children}
    </HotelContext.Provider>
  );
}

export default HotelProvider;
export function useHotels() {
  return useContext(HotelContext);
}
