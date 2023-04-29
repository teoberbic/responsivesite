function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}
window.onload = function() {
    currentYear();
}

const primaryNav = document.getElementById('navigation');
const displayButton =document.getElementById('showNavigation')

displayButton.addEventListener("click", slideMenu);

function slideMenu() {
    let visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        displayButton.setAttribute("data-visible", "true");
    }

    else {
        primaryNav.setAttribute("data-visible", "false");
    }
}

//function showMenu() {
    //document.getElementById('navigation').style.transform = "translateX(0%)";
    //document.getElementById('hamburger-icon').style.display = "block";
   // document.getElementById('x-icon').style.display = "none";
//}
//function hideMenu() {
   // document.getElementById('navigation').style.transform = "translateX(100%)";
    //document.getElementById('x-icon').style.display = "none";
    //document.getElementById('hamburger-icon').style.display = "block";
//}

//window.addEventListener("resize", hideButtons);

//function hideButtons() {

  //  if(window.innerWidth > 767) {
    //document.getElementById('x-icon').style.display = "none";
    //document.getElementById('hamburger-icon').style.display = "block";
    //document.getElementById('navigation').style.transform = "translateX(0%)";
    //}
    //else {
      //  document.getElementById('hamburger-icon').style.display = "block";
        //document.getElementById('navigation').style.transform = "translateX(100%)";
    //}
//}