import React from "react";
import arrow from "./../Assets/img/arrow.png";

/**
 * Const Arrow
 * is the container of arrows contained in the table buttons
 */

const Arrow = () => {
  return (
    <div className="arrowContainer">
      <img
        className="toogleArrow arrowContainer__up"
        src={arrow}
        alt="sort ascending"
      />
      <img
        className="toogleArrow arrowContainer__down"
        src={arrow}
        alt="sort descending"
      />
    </div>
  );
};

export default Arrow;
