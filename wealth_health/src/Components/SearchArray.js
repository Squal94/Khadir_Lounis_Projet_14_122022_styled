import React from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "./../Features/editArrayContent.slice";

const SearchArray = () => {
  const dispatch = useDispatch();
  return (
    <div className="searchContainer">
      <label> Search :</label>
      <input
        type="text"
        id="searchId"
        onChange={(e) => {
          dispatch(searchEmployee(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchArray;
