import { current } from "@reduxjs/toolkit";

/**
 * Function sortAZ
 * @param {data} data : receive state from editArrayContent.slice .
 * @param {boolean} boolean : used to perform a toggle ascending and descending on the sort.
 * @param {k} k : used for column selection or sorting.
 * Function sortAZ alphabetic sorting funtion
 */

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
          if (B > A) {
            return 1;
          } else if (A > B) {
            return -1;
          } else {
            return 0;
          }
        }))
      : (data.filterEmployees = data.data.sort((a, b) => {
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
  ).slice(data.firstItem, data.currentnumberAffichage);
};

/**
 * Function sortNumber
 * @param {data} data : receive state from editArrayContent.slice .
 * @param {boolean} boolean : used to perform a toggle ascending and descending on the sort.
 * @param {k} k : used for column selection or sorting.
 * Function sortNumber number sorting funtion
 */

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

/**
 * Function sortNumber
 * @param {data} data : receive state from editArrayContent.slice .
 * @param {boolean} boolean : used to perform a toggle ascending and descending on the sort.
 * @param {k} k : used for column selection or sorting.
 * Function sortDate date sorting funtion
 */

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
