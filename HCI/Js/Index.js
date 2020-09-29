var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  slideIndex=n;
  if(n>3){
      slideIndex=1;
  }
  else if(n<1){
      slideIndex=3;
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
  var img=["Event.png","Promotion.png","News.png"]
  var imgsrc=document.getElementById("imgSlides");
  $("#slide").fadeOut(500, function() {
    imgsrc.src="./Images/"+img[slideIndex-1]
    $("#caption").text(img[slideIndex-1].split('.')[0])
  });
  $("#slide").fadeIn(500)
  
}