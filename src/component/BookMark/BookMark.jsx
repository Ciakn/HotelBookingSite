import React, { useEffect } from "react";
import { useBookMarks } from "../../Providers/BookMarkProvider";
import ReactCountryFlag from "react-country-flag";
import { Link, useParams } from "react-router-dom";
function BookMark() {
  const { isLoading, bookmarks, getBookMark, currentBookMark } = useBookMarks();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>BookMarkList</h2>

      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link key={item.id}  to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
              <div className={`bookmarkItem ${currentBookMark.id === item.id? "current-bookmark": ""}` }>
                <ReactCountryFlag svg countryCode={item.countryCode} />
                &nbsp; &nbsp; <strong>{item.cityName}</strong> &nbsp;{" "}
                <span> {item.country} </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BookMark;
