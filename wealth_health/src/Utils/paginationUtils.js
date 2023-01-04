/**
 * Function paginationFunc
 * @param {data} data : receive state from editArrayContent.slice .
 * @param {pageEntrie} pageEntrie : receive state.numberPage page current active(action.payload).
 * Function paginationFunc retrieves the current value of active page and dispatch state action makes a +1 or -1 or receives a page number directly at the click and slices the array with these values.
 */

function paginationFunc(data, pageEntrie) {
  data.numberPage = pageEntrie;
  data.currentLastItem = data.currentnumberAffichage * data.numberPage;
  data.firstItem =
    data.currentnumberAffichage * data.numberPage - data.currentnumberAffichage;
  data.filterEmployees = data.data.slice(data.firstItem, data.currentLastItem);
  data.LastItem = data.currentLastItem;
  if (data.currentnumberAffichage * data.numberPage > data.data.length) {
    data.borderValue =
      data.currentnumberAffichage * data.numberPage - data.data.length;
    data.firstItem =
      data.currentnumberAffichage * data.numberPage -
      data.currentnumberAffichage;
    data.LastItem = data.data.length;
    // data.LastItem = data.firstItem + data.borderValue;
  }
}

export { paginationFunc };
