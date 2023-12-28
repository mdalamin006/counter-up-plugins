// JavaScript code 

var countdown = $("#countdown").countdown360({
    radius: 60,
    seconds: 100,
    fontColor: '#FFFFFF',
    autostart: false,
    onComplete: function () { console.log('done') }
});
// start the countdown
countdown.start();


// jQurey Code
$(document).ready(function () {
    $(window).load(function () {
        $(".load").fadeOut(3000);
      });
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
// Counter me
$(".counterMe").countMe(3,4);
$(".counterMe1").countMe(3,4);
$(".counterMe2").countMe(3,4);

// Wow js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

});