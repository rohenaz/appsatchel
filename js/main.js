AOS.init({
duration: 800,
easing: 'slide'
})

function  fireAction(action) {
  console.log('posting message', action)
  let actionObjStr = JSON.stringify(action)
  window.postMessage({ type: "FROM_PAGE", action: actionObjStr }, "*")
}

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  })

  
  $("#login").click(function() {
    let action = {
      uuid: "<random uuid>", //A random UUID used to map a function call to a promise on the frontend
      action: "BSVABI_LOGIN", //The function the user is calling in the wallet
      account: "<Metalink ID TXID>",
      args: [
          "<ABI TXID>", 
          "login", 
          ["arg1", "arg2", "arg3"]
      ]
    }

    fireAction(action)
  })

  $("#sign").click(function() {
    let action = {
      uuid: "<random uuid>", //A random UUID used to map a function call to a promise on the frontend
      action: "BSVABI_SIGN", //The function the user is calling in the wallet
      account: "<Metalink ID TXID>",
      args: [
          "<ABI TXID>", 
          "sign", 
          ["arg1", "arg2", "arg3"]
      ]
    }

    fireAction(action)
  })

  $("#signAndSend").click(function() {
    let action = {
      uuid: "<random uuid>", //A random UUID used to map a function call to a promise on the frontend
      action: "BSVABI_SIGNANDSEND", //The function the user is calling in the wallet
      account: "<Metalink ID TXID>",
      args: [
          "<ABI TXID>", 
          "signAndSend",
          ["arg1", "arg2", "arg3"]
      ]
    }

    fireAction(action)
  })

  $("#encrypt").click(function() {
    let action = {
      uuid: "<random uuid>", //A random UUID used to map a function call to a promise on the frontend
      action: "BSVABI_ENCRYPT", //The function the user is calling in the wallet
      account: "<Metalink ID TXID>",
      args: [
          "<ABI TXID>", 
          "encrypt",
          ["arg1", "arg2", "arg3"]
      ]
    }

    fireAction(action)
  })


  $("#decrypt").click(function() {
    let action = {
      uuid: "<random uuid>", //A random UUID used to map a function call to a promise on the frontend
      action: "BSVABI_DECRYPT", //The function the user is calling in the wallet
      account: "<Metalink ID TXID>",
      args: [
          "<ABI TXID>", 
          "decrypt",
          ["arg1", "arg2", "arg3"]
      ]
    }

    fireAction(action)
  })

  $("#balance").click(function() {
    let action = {
      uuid: "<random uuid>", //A random UUID used to map a function call to a promise on the frontend
      action: "BSVABI_BALANCE", //The function the user is calling in the wallet
      account: "<Metalink ID TXID>",
      args: [
          "<ABI TXID>", 
          "balance",
          ["arg1", "arg2", "arg3"]
      ]
    }

    fireAction(action)
  })


	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		})
	}
	fullHeight()

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
	    start: [20, 80],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 100
	    }
	});

	var slider2 = document.getElementById('slider-2');

	noUiSlider.create(slider2, {
	    start: [50],
	    connect: [true, false],
	    range: {
	        'min': 0,
	        'max': 100
	    }
	});

	$('[data-toggle="popover"]').popover()
	$('[data-toggle="tooltip"]').tooltip()

	$('#id_0').datetimepicker({
    allowInputToggle: true,
    showClose: true,
    showClear: true,
    showTodayButton: true,
    format: "MM/DD/YYYY hh:mm:ss A",
    icons: {
		  time:'ion-ios-time',

		  date:'icon-calendar',

		  up:'ion-ios-arrow-up',

		  down:'ion-ios-arrow-down',

		  previous:'ion-ios-arrow-back',

		  next:'ion-ios-arrow-forward',

		  today:'ion-ios-arrow-up',

		  clear:'ion-ios-trash',

		  close:'ion-ios-close'
		},

	});


})(jQuery);

