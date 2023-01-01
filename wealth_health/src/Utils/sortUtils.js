import { current } from "@reduxjs/toolkit";

const sortAZ = (data, boolean, k) => {
  data.firstItem = 0;
  data.currentLastItem = data.currentnumberAffichage;
  data.LastItem = data.currentLastItem;
  data.numberPage = 1;
  data.currentPage = 1;
  return current(
    boolean
      ? (data.filterEmployees = data.data.sort((a, b) => {
          const A = a[k].toLowerCase();
          const B = b[k].toLowerCase();
          if (A > B) {
            return 1;
          } else if (B > A) {
            return -1;
          } else {
            return 0;
          }
        }))
      : (data.filterEmployees = data.data.sort((a, b) => {
          const A = a[k].toLowerCase();
          const B = b[k].toLowerCase();
          if (B > A) {
            return 1;
          } else if (A > B) {
            return -1;
          } else {
            return 0;
          }
        }))
  ).slice(data.firstItem, data.currentnumberAffichage);
};

// a, b;

const sortNumber = (data, boolean, k) => {
  data.firstItem = 0;
  data.currentLastItem = data.currentnumberAffichage;
  data.LastItem = data.currentLastItem;
  data.numberPage = 1;
  data.currentPage = 1;
  return current(
    boolean
      ? (data.filterEmployees = data.data.sort((a, b) => {
          return a[k] - b[k];
        }))
      : (data.filterEmployees = data.data.sort((a, b) => {
          return b[k] - a[k];
        }))
  ).slice(data.firstItem, data.currentnumberAffichage);
};

const sortDate = (data, boolean, k) => {
  data.firstItem = 0;
  data.currentLastItem = data.currentnumberAffichage;
  data.LastItem = data.currentLastItem;
  data.numberPage = 1;
  data.currentPage = 1;
  return current(
    boolean
      ? (data.filterEmployees = data.data.sort((a, b) => {
          return new Date(a[k]).valueOf() - new Date(b[k]).valueOf();
        }))
      : (data.filterEmployees = data.data.sort((a, b) => {
          return new Date(b[k]).valueOf() - new Date(a[k]).valueOf();
        }))
  ).slice(data.firstItem, data.currentnumberAffichage);
};

export { sortAZ, sortNumber, sortDate };
