import states from "../Assets/stateData";

const arrowToogle = (selectItem) => {
  let eltSelected;
  const arrowselectAll = document.querySelectorAll(".thForme");
  arrowselectAll.forEach((elt) => {
    const arrowUp = elt.querySelector(".arrowContainer__up");
    const arrowDown = elt.querySelector(".arrowContainer__down");

    elt.addEventListener("click", () => {
      eltSelected = elt.id;
      if (selectItem) {
        arrowUp.classList.remove("colorSelect");
        arrowDown.classList.remove("colorWhite");
        arrowUp.classList.add("colorWhite");
        arrowDown.classList.add("colorSelect");
      } else {
        arrowUp.classList.remove("colorWhite");
        arrowDown.classList.remove("colorSelect");
        arrowUp.classList.add("colorSelect");
        arrowDown.classList.add("colorWhite");
      }
      arrowselectAll.forEach((elt) => {
        if (elt.id !== eltSelected) {
          elt
            .querySelector(".arrowContainer__up")
            .classList.remove("colorWhite", "colorSelect");
          elt
            .querySelector(".arrowContainer__down")
            .classList.remove("colorWhite", "colorSelect");
        }
      });
    });
  });
};

const saveEmployee = (e, data) => {
  e.preventDefault();
  let changevalue = "";
  const last = data.length - 1;
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const dateOfBirth = document.getElementById("DateofBirth");
  const startDate = document.getElementById("StartDate");
  const department = document.getElementById("departement");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zipCode = document.getElementById("zipCode");

  function stateAbr() {
    console.log(state.innerHTML);
    // let changevalue = states.find((country) => country === state.innerHTML);
    changevalue = states.filter((obj) => {
      return obj.name === state.innerHTML;
    });
    console.log(changevalue[0].abbreviation);
  }

  stateAbr();

  const employee = {
    id: last + 2,
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: dateOfBirth.value,
    beginning: startDate.value,
    department: department.innerHTML,
    street: street.value,
    city: city.value,
    state: changevalue[0].abbreviation,
    zipCode: zipCode.value,
  };

  console.log(employee);
  return employee;
};

export { arrowToogle, saveEmployee };
