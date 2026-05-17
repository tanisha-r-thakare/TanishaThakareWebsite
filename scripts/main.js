const myImage = document.querySelector("img");

if (myImage) {

  myImage.onclick = () => {

    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/Image1Website.png") {
      myImage.setAttribute("src", "images/Image2Website.png");
    } else {
      myImage.setAttribute("src", "images/Image1Website.png");
    }
  };
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {

  const myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);

    if (myHeading) {
      myHeading.textContent =
        `Welcome to Tanisha Thakare's Website, ${myName} 🥰`;
    }
  }
}

if (localStorage.getItem("name") && myHeading) {
  const storedName = localStorage.getItem("name");
  myHeading.textContent =
    `Welcome to Tanisha Thakare's Website, ${storedName} 🥰`;
}

if (myButton) {
  myButton.addEventListener("click", () => {
    setUserName();
  });
}

//Up/Down Arrows for Links
const links = document.querySelectorAll(".reading-list a");
let index = 0;

if (links.length > 0) {
  document.addEventListener("keydown", (event) => {
    const active = document.activeElement;

    if (active.tagName === "INPUT" || active.tagName === "TEXTAREA") {
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      index = (index - 1 + links.length) % links.length;
      links[index].focus();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      index = (index + 1) % links.length;
      links[index].focus();
    }

    if (event.key === "Enter") {
      if (document.activeElement.tagName === "A") {
        document.activeElement.click();
      }
    }
  });
}

//Navigation Bar left/right arrows
const navLinks = document.querySelectorAll(".navbar a");
let navIndex = 0;

if (navLinks.length > 0) {

  document.addEventListener("keydown", (event) => {
    const active = document.activeElement;

    if (active.tagName === "INPUT" || active.tagName === "TEXTAREA") {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navIndex = (navIndex - 1 + navLinks.length) % navLinks.length;
      navLinks[navIndex].focus();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      navIndex = (navIndex + 1) % navLinks.length;
      navLinks[navIndex].focus();
    }

    if (event.key === "Enter") {
      if (document.activeElement.tagName === "A") {
        document.activeElement.click();
      }
    }
  });
}
