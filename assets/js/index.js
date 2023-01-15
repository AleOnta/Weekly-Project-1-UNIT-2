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

const onlyLastG = document.querySelectorAll("#gContainer > g");
const gArray = Array.from(onlyLastG);

let mAnimator;

console.log(gArray);
const mDisplayer = () => {
  const mOne = Math.floor(Math.random() * 560 + 1);
  const mTwo = Math.floor(Math.random() * 560 + 1);

  if (gArray[mOne].style.opacity === "0") {
    gArray[mOne].style.opacity = "1";
  } else {
    gArray[mOne].style.opacity = "0";
  }

  if (gArray[mTwo].style.opacity === "0") {
    gArray[mTwo].style.opacity = "1";
  } else {
    gArray[mTwo].style.opacity = "0";
  }
};

mAnimator = setInterval(mDisplayer, 90);

mDisplayer();
