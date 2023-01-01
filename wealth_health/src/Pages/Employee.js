import React from "react";
import ArrayEmployee from "../Components/ArrayEmployee";
import NumberLine from "../Components/NumberLine";
import Pagination from "../Components/Pagination";
import SearchArray from "../Components/SearchArray";
// import { SelectItem } from "@squal94/selectprojet14ocrv3";
// import arrowImg from "./../Assets/img/angle-arrow-down.png";
// import departement from "../Assets/departementData";

const Employee = () => {
  return (
    <div className="EmployeeContainer">
      <h1>Current Employees</h1>
      <div className="EmployeeContainer__option">
        <NumberLine />
        <SearchArray />
      </div>
      <ArrayEmployee />
      <div className="EmployeeContainer__pagination">
        <Pagination />
      </div>
      {/* <SelectItem
        arrayProps={departement}
        selectImg={arrowImg}
        selectId="departement"
      /> */}
    </div>
  );
};

export default Employee;
