import Header from "./component/header/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LocationList from "./component/locationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout/AppLayout";
import Hotels from "./component/hotels/Hotels";
import HotelProvider from "./Providers/HotelProvider";
import SingleHotel from "./component/SingleHotel/SingleHotel";
import BookMarkLayout from "./component/BookMarkLayout/BookMarkLayout";
import BookMarkProvider from "./Providers/BookMarkProvider";
import BookMark from "./component/BookMark/BookMark";
import SingleBookMark from "./component/SingleBookMark.jsx/SingleBookMark";
import AddNewBookMark from "./component/AddNewBookMark/AddNewBookMark";
const App = () => {
  return (
   <BookMarkProvider>
     <HotelProvider>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList />} />
        <Route path="/hotels" element={<AppLayout/>}>
          <Route index element={<Hotels/>}/>
          <Route path=":id" element={<SingleHotel/>}/>
        </Route>
        <Route path="/bookmark" element={<BookMarkLayout/>}>
        <Route index element={<BookMark/>}/>
        <Route path=":id" element={<SingleBookMark/>}/>
        <Route path="add" element={<AddNewBookMark/>}/>
        </Route>
      </Routes>
    </HotelProvider>
   </BookMarkProvider>
  );
};

export default App;
