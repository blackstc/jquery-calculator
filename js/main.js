$(document).ready(function() {
  var $screen = $("#screen");

  function sum (num1, num2) {
    return num1 + num2;
  }

  function divide (num1, num2) {
    return num1 / nume2;
  }

  function multiply (num1, num2) {
    return num1 * num2;
  }

  $(".buttons").find("span").on("click", function() {
    $number = $(this).text();
    $("#screen").append($number);
    if ($number === "+") {
      $screen = "";
    }
  });





});
