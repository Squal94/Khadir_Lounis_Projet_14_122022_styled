import React, { useEffect, useState } from "react";

/**
 * Const DatePicker
 * @param {dateTitle} dateTitle use hook useState like props.
 * React component created for multiple reutilistation of input type date in the project.
 * He used useState for creating dynamically a label and id.
 */

const DatePicker = (props) => {
  const [dateTitle, setDateTitle] = useState("");

  useEffect(() => {
    setDateTitle(props.title);
  }, [props]);

  return (
    <div className="datePicker">
      <label className="datePicker__label inputLabel">{dateTitle}</label>
      <input
        placeholder=" "
        className="datePicker__input"
        type="date"
        id={dateTitle.replace(/ /g, "")}
        required
      />
    </div>
  );
};

export default DatePicker;
