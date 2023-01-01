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

function arraySlice(data, firstValue, LastValue) {
  return data.slice(firstValue, LastValue);
}

export { employeeFilter, arraySlice };
