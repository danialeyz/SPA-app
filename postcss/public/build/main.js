//Imported pages
import contact from "./pages/contact.js";
import questions from "./pages/Questions.js";
import updates from "./pages/Updates.js";
import home from "./pages/Home.js";

//global variables
const documentId = document.querySelector("#document");
const themeDrop = document.querySelector("#theme-drop");
const themeItem = document.querySelectorAll("#theme-option");
const navLogo = document.querySelector(".nav-logo");
const navbarMain = document.querySelector(".navbar-main");
const menuDrop = document.querySelector(".menu-drop");

//Event listeners
themeDrop.addEventListener("click", themeChanger);
navbarMain.addEventListener("click", mobileNavRouter);
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
    { path: "/", view: home },
    { path: "/Contact", view: contact },
    { path: "/Questions", view: questions },
    { path: "/Updates", view: updates },
    ,
  ];

  //
  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname == item.path,
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

// for changing theme
function themeChanger(e) {
  const themeItems = [...themeDrop.childNodes];
  console.log(e.target.classList[0]);
  themeItems.forEach((item) => {
    switch (e.target.classList[0]) {
      //all item
      case "cupcake":
        documentId.setAttribute("data-theme", "cupcake");
        break;
      case "dark":
        documentId.setAttribute("data-theme", "dark");
        break;
      case "retro":
        documentId.setAttribute("data-theme", "retro");
        break;
      case "luxury":
        documentId.setAttribute("data-theme", "luxury");
        break;
      case "light":
        documentId.setAttribute("data-theme", "light");
        break;

      case "synthwave":
        documentId.setAttribute("data-theme", "synthwave");
        break;

      case "cyberpunk":
        documentId.setAttribute("data-theme", "cyberpunk");
        break;

      case "coffee":
        documentId.setAttribute("data-theme", "coffee");
        break;

      case "night":
        documentId.setAttribute("data-theme", "night");
        break;

      case "valentine":
        documentId.setAttribute("data-theme", "valentine");
        break;
    }
  });
}
