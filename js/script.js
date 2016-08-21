$(document).ready(function()
{
  $(window).scroll(function(event)
  {
    var y = $(this).scrollTop();
    if (y >= 700)
    {
      $('.one').addClass('animate');
      $('.two').addClass('animate2');
      $('.three').addClass('animate3');
      $('.four').addClass('animate4');
      $('.five').addClass('animate5');

      var ele = document.getElementsByClassName('hbar');
      

      

       function stopAnim()
        {
          clearInterval(timeout);
        }
    }
  });

  $(window).scroll(function()
  {
    var top = $(window).scrollTop();
    var number = -(top/4);
    number = 'center '+number+'px';

    $('header').css('background-position', number);
  });
});