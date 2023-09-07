import React from "react";
import { useBookMarks } from "../../Providers/BookMarkProvider";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
function SingleBookMark() {
  const { id } = useParams();
  const { getBookMark, currentBookMark, isLoadingcurrentBookMark } =
    useBookMarks();
  const navigate = useNavigate();
  useEffect(() => {
    getBookMark(id);
  }, [id]);
  if (isLoadingcurrentBookMark) return <p>Loading...</p>;
  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
      <div className={`bookmarkItem`}>
        <ReactCountryFlag svg countryCode={currentBookMark.countryCode} />
        &nbsp; &nbsp; <strong>{currentBookMark.cityName}</strong> &nbsp;{" "}
        <span> {currentBookMark.country} </span>
      </div>
    </div>
  );
}

export default SingleBookMark;
