window.onscroll = function () {
  scrollingNavbar();
};

const navBar = document.getElementById("navContainer");
const navButton = document.querySelector("#navList button");
const sticky = navBar.offsetTop;

const scrollingNavbar = () => {
  if (window.scrollY >= sticky + 400) {
    navBar.style.backgroundColor = "#fff";
    navButton.style.backgroundColor = "#1a8917";
  } else {
    navBar.style.backgroundColor = "#ffc017";
    navButton.style.backgroundColor = "black";
  }
};
