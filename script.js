var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    x2 = 0,
    y2 = 0,
    friction = 0.0010;
    friction2 =0.0008;

function moveBackground() {

    x += (lFollowX - x) * friction;
    x2 += (lFollowX - x) * friction2;
    y += (lFollowY - y) * friction;
    y2 += (lFollowY - y) * friction2;
    console.log(x +" " + lFollowX)
    if(2 < x)  
    {
      x = 2;
      x2= 2;
    }
    if(x < -2)
    {
      x = -2;
      x2= -2;
    }
    if(2 < y)  
    {
      y = 2;
      y2= 2;
    }
    if(y < -2)
    {
      y = -2;
      y2= -2;
    }
    
    translate = 'translate(' + x  + 'px, ' + y + 'px)';

    $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });
   
    
    
    translate = 'translate(' + x2  + 'px, ' + y2 + 'px)';
    $('.bg2').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

  
  window.requestAnimationFrame(moveBackground);
}


moveBackground();
var scrollticker; // - don't need to set this in every scroll


$(document).on('mousemove','.main', function(e) {

    if(scrollticker) { window.clearTimeout(scrollticker); scrollticker = null; }
    // Set Timeout
    scrollticker=window.setTimeout(function(){

        var lMouseX = Math.max(-100, Math.min(100, $('.main').width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $('.main').height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (10 * lMouseY) / 100;
        

    }, 100); // Timeout in msec

    
  });
  