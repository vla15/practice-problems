/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  $('th').click(function() {
    var clickedHeaderIndex = event.target.cellIndex
    var row = $('tbody').children();
    var sortedArr = [];
    for (var index = 0; index < row.length; index++) {
      sortedArr.push(row[index].children[clickedHeaderIndex].innerHTML)
      //push values into an array
      //sort

    }
    sortedArr = sortedArr.sort();
    sortedArr = sortedArr.sort(function(a, b) {
      if (!isNaN(a)) {
        return a - b;
      }
    });
    for (var i = 0; i < row.length; i++) {
      row[i].children[clickedHeaderIndex].innerHTML = sortedArr[i];
    }
  })

  //record click event
  //check if click occurred on a table header
  //check all rows in header.  Will be based on index

});

