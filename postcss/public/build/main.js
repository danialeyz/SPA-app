//Imported pages
import contact from "./pages/contact.js";
import login from "./pages/login.js";
import questions from "./pages/Questions.js";
import updates from "./pages/Updates.js";
import home from "./pages/Home.js";

//global variables
const menuIcon = document.querySelector(".ham-mennu");
const navLogo = document.querySelector(".nav-logo");
const navbarMain = document.querySelector(".navbar-main");
const menuDrop = document.querySelector(".menu-drop");

//Event listeners
navbarMain.addEventListener("click", mobileNavRouter);
menuDrop.addEventListener("click", () => {
  menuDrop.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", mainRouter);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigator(e.target.href);
      // location.pathname =
      //   location.pathname + "/" + e.target.href.split("/").slice(-1)[0];
    }
  });
  mainRouter();
});
document.addEventListener("popstate", mainRouter);

// Main router
function mainRouter(params) {
  const routes = [
    { path: "", view: home },
    { path: "Contact", view: contact },
    { path: "Questions", view: questions },
    { path: "Updates", view: updates },
    { path: "Login-Register", view: login },
  ];

  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname.split("/").slice(-1)[0] == item.path,
    };
  });

  let match = potentialRoutes.find((e) => e.isMatch);

  if (!match) {
    match = {
      path: "404-not found",
      view: () => console.log("404"),
      isMatch: true,
    };
  }
  document.querySelector("#app").innerHTML = match.route.view();
}

// function pathnameHandler(e) {
//   if (e.target.matches("[data-link]")) {
//     e.preventDefault();

//     console.log(e.target.href.split("/").slice(-1)[0]);
//   }
// }

//navigator
function navigator(url) {
  history.pushState(null, null, url);
  mainRouter();
}

//Mobile navbar router
function mobileNavRouter(e) {
  const className = [...e.target.classList];
  if (className.includes("nav-logo")) {
  } else if (className.includes("ham-menu")) {
    menuDrop.classList.remove("hidden");
  }
}
