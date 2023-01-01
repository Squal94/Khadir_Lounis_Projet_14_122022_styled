import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  paginationFunctionnality,
  paginationBtn,
} from "../Features/editArrayContent.slice";

const Pagination = () => {
  const dispatch = useDispatch();
  const dataLength = useSelector((state) => state.employee.data);
  const currentfirstItem = useSelector((state) => state.employee.firstItem);
  const currentLastItem = useSelector((state) => state.employee.LastItem);
  const totalPages = useSelector((state) => state.employee.totalPages);
  const currentPage = useSelector((state) => state.employee.numberPage);
  console.log(currentPage);

  // Pagination spread variables
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  let spreadAffichageNext = null;
  let spreadAffichagePrev = null;

  // pagination array btn
  let arrayPages = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayPages.push(i);
  }

  // Functions and conditions

  const paginationSpread = arrayPages.map((item) => {
    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
      return (
        <li
          key={item}
          id={item}
          onClick={() => {
            dispatch(paginationBtn(item));
          }}
          className={
            currentPage === item
              ? "paginationContainer__element__btn--list--item active"
              : "paginationContainer__element__btn--list--item"
          }
        >
          {item}
        </li>
      );
    } else {
      return null;
    }
  });

  if (currentPage - 1 < arrayPages.length - pageNumberLimit) {
    spreadAffichageNext = (
      <li className="paginationContainer__element__btn--list--item">...</li>
    );
  }

  if (currentPage > pageNumberLimit - minPageNumberLimit) {
    spreadAffichagePrev = (
      <li className="paginationContainer__element__btn--list--item">...</li>
    );
  }

  if (currentPage > maxPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }
  if (currentPage - 1 < minPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
  return (
    <div className="paginationContainer">
      <div className="paginationContainer__element">
        <p className="paginationContainer__element--value">
          Showing {currentfirstItem} to {currentLastItem} of {dataLength.length}{" "}
          entries
        </p>
        <div className="paginationContainer__element__btn">
          <p
            className="paginationContainer__element__btn--prev"
            id="navPrev"
            onClick={() => {
              dispatch(paginationFunctionnality("prev"));
            }}
          >
            Previous
          </p>
          <ul className="paginationContainer__element__btn--list">
            {spreadAffichagePrev}
            {paginationSpread}
            {spreadAffichageNext}
          </ul>
          <p
            className="paginationContainer__element__btn--next"
            id="navNext"
            onClick={() => {
              dispatch(paginationFunctionnality("next"));
            }}
          >
            Next
          </p>
        </div>
      </div>
      <div className="paginationContainer--home">
        <NavLink className="paginationContainer--home--nav" to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Pagination;
