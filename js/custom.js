
document.addEventListener("DOMContentLoaded",function() {
  var menu = document.querySelectorAll('nav.menu-pc');
  var menu = menu[0];
        //Truy xuất div menu
        var status = "duoi150";
        window.addEventListener("scroll",function(){
          var x = pageYOffset;
          if(x > 135){
            if(status == "duoi150")
            {
              status = "tren150";
              menu.classList.add('stuck');
            }
          }
          else{
            if(status == "tren150"){
              menu.classList.remove('stuck');
              status = "duoi150";}
            }

          })
      });

$(document).ready(function(){

  // $('.menu-pc').scroll(function() {
  //   if (window.scrollX < 400) {
  //    $('.menu-pc').addClass('stuck');
  //   }
  // });

  // $(".btn-login").mouseenter(function(){
  //   var div = $(".btn-login");  
  //   div.animate({margin: '300px', opacity: '0.4'}, "slow");
  // });
  // // var cursor = "duoi";
  // $('.menu-pc').scroll(function() {
  //   var x = pageXOffset;
  //   if (x > 130) {
  //     if (cursor == "duoi") ;
  //     {
  //       $('.menu-pc').addClass('stuck');
  //       cursor = "tren";
  //     }
  //   }
  // });






  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
          items:1.25
      },
      400:{
          items:1.75
      },
      600:{
          items:3
      },
      1024:{
          items:4
      },
      1366:{
          items:5
      }
    }
  });
  

  function navmenu(){
    $('.js-btn-menu').on("click",function(){
      $('.js-menu').toggleClass('active');
      $('.js-background-overlay').toggleClass('active');
      $('.js-closed').toggleClass('active');
    })

    $('.js-background-overlay').on('click', function() {
      $(this).removeClass('active');
      $('.js-menu').removeClass('active');
      $('.js-closed').removeClass('active');
    });

    $('.js-closed').on('click', function() {
      $(this).removeClass('active');
      $('.js-menu').removeClass('active');
      $('.js-background-overlay').removeClass('active');
    });

  }
  
navmenu();
});