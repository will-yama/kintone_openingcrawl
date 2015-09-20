(function(window, $) {

setTimeout(function(){
  $(".intro").fadeOut();
},3000);

setTimeout(function(){
  $(".title").addClass("titleanimation");
},4500);

setTimeout(function(){
  $(".title").fadeOut();
},15000);

setTimeout(function(){
  $(".textinner").addClass("textanimation");
},8000);

})(this, jQuery);
