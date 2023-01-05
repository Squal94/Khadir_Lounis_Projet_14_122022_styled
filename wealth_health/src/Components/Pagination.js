import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  paginationFunctionnality,
  paginationBtn,
} from "../Features/editArrayContent.slice";

/**
 * Const Pagination
 * @param {dataLength} dataLength use hook useSelector like props .
 * @param {currentfirstItem} currentfirstItem use hook useSelector like props .
 * @param {currentLastItem} currentLastItem use hook useSelector like props .
 * @param {currentPage} currentPage use hook useSelector like props .
 * @param {totalPages} totalPages use hook useSelector like props .
 * const Pagination React is used to display pagination with the next and previous button
 * and navigation with page numbers ,but it is also used to set limits,
 * is display the decompte of pages
 */

const Pagination = () => {
  const dispatch = useDispatch();
  const prevQueryselector = document.querySelector(
    ".paginationContainer__element__btn--prev"
  );
  const nextQueryselector = document.querySelector(
    ".paginationContainer__element__btn--next"
  );
  const dataLength = useSelector((state) => state.employee.data);
  const currentfirstItem = useSelector((state) => state.employee.firstItem);
  const currentLastItem = useSelector((state) => state.employee.LastItem);
  const totalPages = useSelector((state) => state.employee.totalPages);
  const currentPage = useSelector((state) => state.employee.numberPage);

  /**
   *  these features allow to add a class and therefore style
   * to the next and prev buttons to the hover
   */

  if (prevQueryselector) {
    if (currentPage !== 1) {
      prevQueryselector.classList.add("activeBtn");
    } else {
      prevQueryselector.classList.remove("activeBtn");
    }
  }
  if (nextQueryselector) {
    if (currentPage !== totalPages) {
      nextQueryselector.classList.add("activeBtn");
    } else {
      nextQueryselector.classList.remove("activeBtn");
    }
  }

  /**
   * Pagination spread variables
   * enables to display with the useState a "..." button if there are pages remaining .
   */
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  let spreadAffichageNext = null;
  let spreadAffichagePrev = null;

  // pagination array number btn
  let arrayPages = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayPages.push(i);
  }

  // Functions and conditions

  /**
   * Const paginationSpread
   * @param {arrayPages} arrayPages table of page counts as a function of the number of employees in the database.
   * const paginationSpread Paginations displayed in the desired format
   */

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

  // Condition of "..." button display

  if (currentPage - 1 < arrayPages.length - pageNumberLimit) {
    spreadAffichageNext = (
      <li className="paginationContainer__element__btn--list--spread">...</li>
    );
  }

  if (currentPage > pageNumberLimit - minPageNumberLimit) {
    spreadAffichagePrev = (
      <li className="paginationContainer__element__btn--list--spread">...</li>
    );
  }

  // Change the pagination number if the page display limit is changed.

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
          {currentfirstItem + 1} to {currentLastItem} of {dataLength.length}
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
