// backEnd
var list = [];
// var findOnes = /[1]/g;
// var findZeros = /[0]/g;
//
function entryNumber(input) {
  // debugger;
  // $("#results").empty();
  for (var i = 1; i <= input; i++) {
      list.push(i)
    }
  }



// frontEnd
$(document).ready(function() {
  $("form#numberEntry").submit(function(event) {

    var inputString = parseInt($("#string").val());
    event.preventDefault();

    // console.log(inputString);
    // $("#results").text(inputString);
    entryNumber(inputString);
    list.forEach(function(list) {
      $("ul#list").append("<li>" + list + "</li>");

    });
  });
});
