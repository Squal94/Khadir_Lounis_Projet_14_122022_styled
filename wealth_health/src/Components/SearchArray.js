import React from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "./../Features/editArrayContent.slice";

/**
 * Const SearchArray
 * @param {target} e.target if input searchId focus.
 * SearchArray React component Created to find the value enter into the database. with action dispatch
 * "searchEmployee"
 */

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
