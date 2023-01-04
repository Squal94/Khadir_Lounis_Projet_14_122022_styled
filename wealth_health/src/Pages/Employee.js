import React from "react";
import ArrayEmployee from "../Components/ArrayEmployee";
import NumberLine from "../Components/NumberLine";
import Pagination from "../Components/Pagination";
import SearchArray from "../Components/SearchArray";

/**
 * Const Employee
 * Const Employee React Component Created to contain and complete pages Employee.
 */

const Employee = () => {
  return (
    <div className="EmployeeContainer">
      <h1>Current Employees</h1>
      <div className="EmployeeContainer__option">
        <NumberLine />
        <SearchArray />
      </div>
      <div className="EmployeeContainer__table">
        <ArrayEmployee />
      </div>
      <div className="EmployeeContainer__pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Employee;
