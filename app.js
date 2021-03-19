//Goes to about-page when click on the Enter button
$(".enterBtn").on("click", function () {
  window.location.href = "about.html";
});

//Goes to my isntagram when click on the Instagram icon
$("#insta-icon").on("click", function () {
  window.location.href = "http://www.instagram.com/jespersfagelfoto";
});

//Opens an email window to my email when click on the mail-icon
$("#mail-icon").on("click", function () {
  window.location.href = "mailto:jesperbengtsson2@gmail.com";
});

//Slide in the side nav when click on the hamburger
$(".burgerDiv").on("click", function () {
  $(".burgerMenu").css("transform", "translateX(80vw)");
});

//Slice out the side nav when click on the "X" in the side nav
$(".burgerClose").on("click", function () {
  $(".burgerMenu").css("transform", "translateX(-80vw)");
});
