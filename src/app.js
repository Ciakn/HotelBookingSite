import Header from "./component/header/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LocationList from "./component/locationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout/AppLayout";
import Hotels from "./component/hotels/Hotels";
import HotelProvider from "./Providers/HotelProvider";
import SingleHotel from "./component/SingleHotel/SingleHotel";
const App = () => {
  return (
    <HotelProvider>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList />} />
        <Route path="/hotels" element={<AppLayout/>}>
          <Route index element={<Hotels/>}/>
          <Route path=":id" element={<SingleHotel/>}/>
        </Route>
      </Routes>
    </HotelProvider>
  );
};

export default App;
