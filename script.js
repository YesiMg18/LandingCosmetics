$(function() {
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: "horizontal", // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: "Before", // Set a custom before label
    after_label: "After", // Set a custom after label
    no_overlay: false, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
});
var boton = document.getElementById("botonModal");

window.onscroll = function() {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop >= 300) {
    boton.classList.add("activo");
  } else {
    boton.classList.remove("activo");
  }
};
$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});
