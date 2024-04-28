console.log("JavaScript is loaded.")

$(".menubutton").click(function () {
    console.log("Hamburger menu toggled.")
    $(this).toggleClass("active");
    $(".hamMenu").toggleClass("active");
});
