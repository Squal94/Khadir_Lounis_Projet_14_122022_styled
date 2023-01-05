import React from "react";
import closeIcon from "./../Assets/img/close-icon.png";
import succes from "./../Assets/img/customer-success.jpg";
import { useDispatch } from "react-redux";
import { close } from "../Features/modal.slice";

const ModalSubmit = () => {
  const dispatch = useDispatch();
  return (
    <div className="modalContainer">
      <div className="modalContainer__content">
        <img
          className="modalContainer__content--img"
          src={succes}
          alt="Succes figure"
        />
        <p className="modalContainer__content--txt">Employee Created!</p>
        <div
          className="modalContainer__content--close"
          onClick={() => {
            dispatch(close());
          }}
        >
          <img src={closeIcon} alt="Fermer la modal" />
        </div>
      </div>
    </div>
  );
};

export default ModalSubmit;
