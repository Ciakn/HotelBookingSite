import React from "react";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotels } from "../../Providers/HotelProvider";
function AppLayout() {
  const { isLoading, hotels } = useHotels();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map hotels={hotels}  isLoading= {isLoading}/>
    </div>
  );
}

export default AppLayout;
