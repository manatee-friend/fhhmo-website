$(document).ready(function() {
$( ".drop-down" ).click(function() {
    if ($(this).css("height") == "50px"){
        $(this).animate({
            height: ($(this).find(".drop-down-value").height() + 100) + "px"
          }, 500);
          let arrow = $(this).find(".drop-down-arrow")
          $({deg: 0}).animate({deg: 180}, {
              duration: 500,
              step: function(now) {
                  arrow.css({
                      transform: "rotate(" + now + "deg)"
                  });
              }
          });
    }else {
        $(this).animate({
            height: "50px"
          }, 500);
          let arrow = $(this).find(".drop-down-arrow")
          $({deg: 180}).animate({deg: 0}, {
            duration: 500,
            step: function(now) {
                arrow.css({
                    transform: "rotate(" + now + "deg)"
                });
            }
        });
    }   
});
});