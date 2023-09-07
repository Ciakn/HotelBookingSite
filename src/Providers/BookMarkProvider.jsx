import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";

const BookMarkContext = createContext();
const BASE_URL = "http://localhost:5000";
function BookMarkProvider({ children }) {
  const [currentBookMark, setcurrentBookMark] = useState({});
  const [isLoadingcurrentBookMark, setIsLoadingcurrentBookMark] =
    useState(false);

  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`, "");
  // console.log(currentBookMark);
  async function getBookMark(id) {
    setIsLoadingcurrentBookMark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setcurrentBookMark(data);

      setIsLoadingcurrentBookMark(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingcurrentBookMark(false);
    }
  }
  console.log(currentBookMark);

  return (
    <BookMarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        currentBookMark,
        getBookMark,
        isLoadingcurrentBookMark,
      }}
    >
      {children}
    </BookMarkContext.Provider>
  );
}

export default BookMarkProvider;
export function useBookMarks() {
  return useContext(BookMarkContext);
}
