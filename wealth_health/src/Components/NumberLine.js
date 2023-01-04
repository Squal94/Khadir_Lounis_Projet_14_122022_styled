import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationArrayLine } from "./../Features/editArrayContent.slice";

/**
 * Const NumberLine
 * @param {numberLine} numberLine use hook useState like props and default value is 10.
 * const NumberLine React component is used to make a change by selecting the number of rows
 * displayed in the value table
 */

const NumberLine = () => {
  const [numberLine, setNumberLine] = useState("10");
  const dispatch = useDispatch();

  useEffect(() => {
    handleChangeNumber(numberLine);
  });

  function handleChangeNumber(value) {
    dispatch(paginationArrayLine(value));
  }
  return (
    <div className="containerNumber">
      <p>
        {" "}
        Show
        <select
          name="numberLine"
          id="numberLine"
          onChange={(e) => {
            setNumberLine(e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </p>
    </div>
  );
};

export default NumberLine;
