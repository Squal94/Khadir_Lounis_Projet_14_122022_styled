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
    data.LastItem = data.firstItem + data.borderValue;
  }
}

export { paginationFunc };
