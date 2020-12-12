 /*  Responsive Toggle */
 function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);


  /*  Seachbar  */

  $(document).ready(function(){
  $(".fa-search").click(function(){
    $(".search-container").show(1000);
    $(".Navbar__Items").hide(1000);
  });
});
$(document).ready(function(){
  $(".fa-times").click(function(){
    $(".search-container").hide(1000);
    $(".Navbar__Items").show(1000);
  });
});



/*  Scoll effect */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "150";
  } else {
    document.getElementById("logo").style.width = "230";
  }
}

/*  Cookies     */

 $(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 