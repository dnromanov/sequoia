var transpSection = document.getElementsByClassName("container_transparent");
var headerSections = document.querySelectorAll(".slideLeft");
var logos = document.querySelectorAll(".techs .row div");
var logos_footer = document.querySelectorAll(".footer_lightup");
var m = 0;

addEventListener("scroll", function() {
  for(var i = 0; i < transpSection.length; i++) {
    if(transpSection[i].getBoundingClientRect().top <= window.innerHeight*0.7) {
      if (i == 8 & !(transpSection[8].classList.contains("lightup"))) {
        var k = 1;
        logos[0].classList.add("lightup_logos");
        var interval_logos = window.setInterval(function(){
          logos[k].classList.add("lightup_logos");
          k++;
          if (k >=logos.length) clearInterval(interval_logos);
        }, 300);
      }
      if (i == 14  & !(transpSection[14].classList.contains("lightup"))) {
        var l = 1;
        logos_footer[0].classList.add("lightup_logos");
        var interval_footer = window.setInterval(function(){
          logos_footer[l].classList.add("lightup_logos");
          l++;
          if (l >=logos_footer.length) clearInterval(interval_footer);
        }, 300);
      }
      transpSection[i].classList.add("lightup");
    }
  }
});

var interval_header = window.setInterval(function(){
  headerSections[m].classList.add("lightleft");
  m++;
  console.log(m);
  if (m >=headerSections.length) clearInterval(interval_header);
}, 300);
