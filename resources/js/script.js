$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

    /*scroll on buttons*/

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });   
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /*navigation*/

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    /* animations*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
     $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
      $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

      /*mobile navigation*/

      $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon ion-icon')

        nav.slideToggle(200);
        if (icon.hasClass('hide')) {
          icon.toggleClass('hide')
        }
      });
});


// Lecture 67 - MOBILE NAV - Ion-Icons v4.4.6 - Hide and show menu/close icon when clicked
// William · レクチャー67 · 3ヶ月前
// Hello,



// I recently completed lecture 67 and had an issue when hiding and showing the menu/close ionicons due to their updated version using <ion-icon> tags with name attributes instead of <i> tags with class attributes to define the icon you want like so:

// Old way: <i class="icon ion-md-heart"></i>

// New way:  <ion-icon name="heart"></ion-icon>



// To make the icons correctly hide and show like Jonas did in his lecture I changed my code to the following and it worked:

// HTML:

// <a class="mobile-nav-icon js--nav-icon"><ion-icon name="menu"></ion-icon></a>
//  <a class="mobile-nav-icon js--nav-icon"><ion-icon name="close" class="hide"></ion-icon></a>
// Note: Two <a> tags now, one with a class of .hide

// CSS:

// .hide {
//     display: none;
// }
// jQuery:

//  $('.js--nav-icon').click(function(){
//        var nav = $('.js--main-nav');
//        var icon = $('.js--nav-icon ion-icon');
//        nav.slideToggle(200);
        
//        if(icon.hasClass('hide')){
//           icon.toggleClass('hide')
//        } 
        
        
//     });
// I used the .toggleClass() function because this time we are adding and removing one class instead of two different classes like in Jonas's example.



// I hope this helps!

