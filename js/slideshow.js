

let intIndex = 0;

function showImage(i) {
    intIndex += i;

    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
    
    for(n = 0; n < images.length; n++) {
        images[n].style.display = "none";
        dots[n].className = dots[n].className.replace(" active", "");
    }

    if(intIndex > images.length -1) {
        intIndex = 0;
    }
    if(intIndex < 0) {
        intIndex = images.length -1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active";
}
window.onload = function() {
    currentYear();
}