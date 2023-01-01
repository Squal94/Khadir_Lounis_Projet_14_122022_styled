import { createSlice } from "@reduxjs/toolkit";
import dataEmployee from "../Assets/Data.json";
import { sortAZ, sortNumber, sortDate } from "./../Utils/sortUtils";
import { paginationFunc } from "./../Utils/paginationUtils";
import { employeeFilter } from "./../Utils/filterUtils";

const initialState = {
  data: [...dataEmployee],
  filterEmployees: [...dataEmployee],
  searchTerm: "",
  totalPages: "",
  arrow: true,
  firstItem: 0,
  LastItem: "",
  numberPage: 1,
  currentPage: 1,
  currentLastItem: "",
  currentnumberAffichage: 10,
  borderValue: "",
  errorMaxArray: false,
  errorMinArray: false,
};
let toggle = true;

export const editArrayContent = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    newEmployee: (state = [...initialState], action) => {
      state.data.push(action.payload);
      state.filterEmployees = employeeFilter(state.data, state.searchTerm);
    },
    deleteEmployee: (state, action) => {},
    editEmployee: (state, action) => {},
    searchEmployee: (state, action) => {
      state.firstItem = 0;
      state.currentLastItem = state.currentnumberAffichage;
      state.LastItem = state.currentLastItem;
      state.numberPage = 1;
      state.currentPage = 1;
      state.searchTerm = action.payload;
      state.filterEmployees = employeeFilter(state.data, action.payload).slice(
        state.firstItem,
        state.currentnumberAffichage
      );
    },
    sortEmployee: (state, action) => {
      toggle = !toggle;
      toggle ? (state.arrow = true) : (state.arrow = false);
      switch (action.payload) {
        case "columnFirst":
          state.filterEmployees = sortAZ(state, toggle, "firstName");
          break;
        case "columnLast":
          state.filterEmployees = sortAZ(state, toggle, "lastName");
          break;
        case "columnStart":
          state.filterEmployees = sortDate(state, toggle, "StartDate");

          break;
        case "columnDepartement":
          state.filterEmployees = sortAZ(state, toggle, "departement");
          break;
        case "columnBirth":
          state.filterEmployees = sortDate(state, toggle, "DateofBirth");
          break;
        case "columnStreet":
          state.filterEmployees = sortAZ(state, toggle, "street");
          break;
        case "columnCity":
          state.filterEmployees = sortAZ(state, toggle, "city");
          break;
        case "columnState":
          state.filterEmployees = sortNumber(state, toggle, "zipCode");
          break;
        case "columnZip":
          state.filterEmployees = sortNumber(state, toggle, "zipCode");
          break;
        default:
          return;
      }
    },
    paginationArrayLine: (state, action) => {
      state.firstItem = 0;
      state.currentnumberAffichage = action.payload;
      state.filterEmployees = state.data.slice(
        state.firstItem,
        state.currentnumberAffichage
      );
      state.currentLastItem = state.currentnumberAffichage;
      state.LastItem = state.currentLastItem;
      state.totalPages = Math.ceil(
        state.data.length / state.currentnumberAffichage
      );
    },
    paginationFunctionnality: (state, action) => {
      switch (action.payload) {
        case "prev":
          if (state.numberPage - 1 < 1) {
            state.errorMinArray = true;
          } else {
            state.errorMinArray = false;
            state.numberPage--;
            paginationFunc(state, state.numberPage);
          }
          break;
        case "next":
          if (state.numberPage + 1 > state.totalPages) {
            state.errorMaxArray = true;
          } else {
            state.errorMaxArray = false;
            state.numberPage++;
            paginationFunc(state, state.numberPage);
          }
          break;
        default:
      }
    },
    paginationBtn: (state, action) => {
      paginationFunc(state, action.payload);
    },
  },
});

export const {
  newEmployee,
  paginationBtn,
  paginationFunctionnality,
  paginationArrayLine,
  searchEmployee,
  sortEmployee,
} = editArrayContent.actions;

export default editArrayContent.reducer;
