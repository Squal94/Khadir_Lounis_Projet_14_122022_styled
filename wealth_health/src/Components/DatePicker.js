import React, { useEffect, useState } from "react";

const DatePicker = (props) => {
  const [dateTitle, setDateTitle] = useState("");
  // const [setDateValue] = useState("");

  useEffect(() => {
    setDateTitle(props.title);
  }, [props]);
  // console.log(dateTitle);
  // console.log(dateValue);

  return (
    <div className="datePicker">
      <label className="datePicker__label inputLabel">{dateTitle}</label>
      <input
        placeholder=" "
        className="datePicker__input"
        type="date"
        id={dateTitle.replace(/ /g, "")}
        required
        // onChange={(e) => setDateValue(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
