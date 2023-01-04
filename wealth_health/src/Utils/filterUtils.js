/**
 * Function employeeFilter
 * @param {data} data : props data receive state from editArrayContent.slice.js .
 * @param {value} value : value contain action.payload dispatch from input search or state.searchTerm .
 * Function employeeFilter receives a value and filters the table inside the state using
 * equivalent values.
 */

function employeeFilter(data, value) {
  const keys = [
    "firstName",
    "lastName",
    "street",
    "city",
    // "DateofBirth",
    // "StartDate",
    // "zipCode",
  ];
  return data.filter((employee) =>
    keys.some((key) => employee[key].toLowerCase().includes(value))
  );
}

export { employeeFilter };
