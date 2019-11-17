//FEATURED SECTION source: https://tobiasahlin.com/moving-letters/#3
var textWrapper = document.querySelector('.fadein');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.fadein .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.fadein',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//OPENSTREETMAP
  var planes = [
		["The Parkland Walk Spriggan",51.5646,-0.1047],
		["Hyde Park",51.5073,-0.1657],
		["Bruce Castle Museum",51.5991,-0.0754],
    ["Old Operating Theatre Museum",51.504750,-0.088160],
		["The Ten Bells",51.51935, -0.074336],
		["Greenwich Foot Tunnel",51.4833,-0.0102],
    ["Epping Forest",51.66, 0.05],
		["The Viktor Wynd Museum of Curiosities",51.53473, -0.057571],
		["The Flask",51.569722,-0.151111],
    ["Bleeding Heart Yard",51.51929,-0.10697],
		["St Bartholomew’s Hospital Museum",51.51746,-0.10009],
		["Old Queen's Head",51.5373,-0.100447],
    ["City of London Cemetery and Crematorium",51.555990,0.052500],
		];

        var map = L.map('map').setView([51.5390,-0.1426], 10);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

		for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
		}

//Jquery waypoints: http://imakewebthings.com/waypoints
$(document).ready(function() {
  //Sticky Navigation
  $('.js--section-featured').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  //scroll on buttons
  $('.js--scroll-to-featured').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-featured').offset().top}, 1000);
  });

  $('.js--scroll-to-packages').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-packages').offset().top}, 1000);
  });

  //Scroll to section navi - https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
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

    // Mobile Navigation
    $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon ion-icon');
      nav.slideToggle(200);
      if($('.ion-navicon-round').attr('name') == 'menu') {
        $('.ion-navicon-round').attr('name','close');
      } else {
        $('.ion-navicon-round').attr('name','menu');
      }
    });


});
