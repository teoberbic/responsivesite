

 // When the user scrolls down 800px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
     document.getElementById("cornerBtn").style.display = "block";
   } else {
     document.getElementById("cornerBtn").style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

