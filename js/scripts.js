// backEnd





















// frontEnd
$(document).ready(function() {
  $("form#numberEntry").submit(function(event) {
    var inputString = parseInt($("#string").val());
    event.preventDefault();
    // console.log(inputString);
    $("#results").empty();
    $("#results").text(inputString);


  })

})
