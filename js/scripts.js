

// business code

//use modulo operator to determine what character to place first
var romanize = {
  1 : "I",
  5 : "V",
  10 : "X",
  50 : "L",
  100 : "C",
  500 : "D",
  1000 : "M"
}
var output = "";


// user interface code
$(function(){
  $("button").click(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input").val());
    // if (typeof(userInput == NaN)) {
    //   console.log(userInput)
    //   console.log("hey, this isn't a number!")
    // }
    for (var i = 0; i < userInput; i++) {
      if (i > 2) {
        console.log("Ya can't have more than 3 at once!");
      } else {
        output += "I"
      }
    }
    console.log(output);
    console.log("originally entered: " + userInput);
    // console.log(romanize[userInput]);
  })
})
