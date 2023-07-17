window.addEventListener("scroll", function () {
  var gnbNav = document.getElementById("gnb-wrapper");
  var scrollY = window.scrollY;

  if (scrollY >= 45) {
    gnbNav.classList.add("on");
  } else {
    gnbNav.classList.remove("on");
  }
});
