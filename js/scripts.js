// backEnd
var list = [];
var findOnes = /[1]/g;
var findZeros = /[0]/g;

function entryNumber(input) {
  // debugger;
  for (var i = 0; i <= input; i++) {
    if (i.toString().match(findOnes)) {
      list.push("Boop!")
    } else if (i.toString().match(findZeros)) {
      list.push("Beep!")
    } else if (i % 3 === 0) {
      list.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else {
      list.push(i)
      }
    }
  }

// frontEnd
$(document).ready(function() {
  $("form#numberEntry").submit(function(event) {
    event.preventDefault();
    var inputString = parseInt($("#string").val());
    // console.log(inputString);
    entryNumber(inputString);
    list.forEach(function(list) {
      $("ul#list").append("<li>" + list + "</li>");
    });
  });
});
