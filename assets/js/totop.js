window.onscroll = function() { showBackToTopButton() };

function showBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";  // Show button
  } else {
    backToTopButton.style.display = "none";   // Hide button
  }
}
