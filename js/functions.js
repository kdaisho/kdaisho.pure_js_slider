"use strict";

(function() {
  var imagecount = 1,
      total = 3,
      image = document.getElementById('container'),
      nav = document.getElementById('nav'),
      first = document.getElementById('first'),
      second = document.getElementById('second'),
      third = document.getElementById('third'),
      duration = 4000,
      transition,
      mytime,
      pager1,
      pager2,
      pager3,
      text1 = document.getElementById('slide_1__text'),
      text2 = document.getElementById('slide_2__text'),
      text3 = document.getElementById('slide_3__text');

  // function slide(x) {
  //   var image = document.getElementById('container');
  //   imagecount = imagecount + x;
  //   if(imagecount > total){
  //     imagecount = 1;
  //   }
  //   else if(imagecount < 1){
  //     imagecount = total;
  //   }
  //   image.className = "slide_" + imagecount;
  // }

  first.onclick = function() {
    image.className = "slide_1";
    imagecount = 1;
    pager1();
  }
  second.onclick = function() {
    image.className = "slide_2";
    imagecount = 2;
    pager2();
  }
  third.onclick = function() {
    image.className = "slide_3";
    imagecount = 3;
    pager3();
  }

  nav.onclick = function() { //Reset transition duration
    clearInterval(mytime);
    mytime = setInterval(transition, duration);
  };

  transition = function() {
    imagecount = imagecount + 1;

    if(imagecount > total){
      imagecount = 1;
    }
    else if(imagecount < 1){
      imagecount = total;
    }

    image.className = "slide_" + imagecount;
    if(image.className == "slide_1") {
      pager1();
    }
    else if(image.className == "slide_2") {
      pager2();
    }
    else if(image.className == "slide_3") {
      pager3();
    }
  };

  mytime = setInterval(transition, duration);

  pager1 = function() {
    second.className = "";
    third.className = "";
    first.className = "active";
    text1.className = "show";
    text2.className = "";
    text3.className = "";
  }
  pager2 = function() {
    first.className = "";
    third.className = "";
    second.className = "active";
    text2.className = "show";
    text1.className = "";
    text3.className = "";
  }
  pager3 = function() {
    first.className = "";
    second.className = "";
    third.className = "active";
    text3.className = "show";
    text1.className = "";
    text2.className = "";
  }

})();