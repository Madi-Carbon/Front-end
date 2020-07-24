(function($) {
	
	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	handlePreloader();


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 1) {
				siteHeader.addClass('fixed-header animated slideInDown');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header animated slideInDown');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.sidenav-bar li.dropdown ul').length){
		$('.sidenav-bar .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-plus"></span></div>');
	}

	//Mobile Nav Hide Show
	if($('.sidenav-bar').length){
		
		$('.sidenav-bar .close-btn').on('click', function() {
			$('body').removeClass('sidenav-bar-visible');
			$('.nav-toggler').parent('.btn-box').addClass('no-touch');
		});

		//Dropdown Button
		$('.sidenav-bar li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.nav-toggler').on('click', function() {
			$('body').toggleClass('sidenav-bar-visible');
			$(this).parent('.btn-box').toggleClass('no-touch');
		});
	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}

	//circular-menu
	if ($('.circular-menu').length) {
		$('.circular-menu .floating-btn').on('click', function() {
			$('.circular-menu').toggleClass('active');
		});
	}

	//circular-menu
	if ($('.square-menu').length) {
		$('.square-menu .floating-btn').on('click', function() {
			$('.square-menu').toggleClass('active');
		});
	}

	//Section Title Appear
	if ($('.sec-title').length){
		$('.sec-title').appear(function(){
			$(this).addClass('active').delay(1500);
		});
	}


	//Hidden Sidebar
	if ($('.sidenav-bar').length) {
		$('.sidenav-bar').mCustomScrollbar({
		    theme:"dark",
		});
	}

	//Home Showcase Banner
	if ($('#banner-slider').length) {
		const slider = document.getElementById("banner-slider");
		const sliderCounter = document.getElementById("banner-slider-counter");
		const sliderNext = document.getElementById("banner-slider-next");
		const sliderPrevious = document.getElementById("banner-slider-previous");
		const interleaveOffset = 0.75;
		const swiper = new Swiper(slider, {
		  loop: false,
		  direction: "vertical",
		  speed: 800,
		  grabCursor: true,
		  watchSlidesProgress: true,
		  mousewheelControl: true,
		  mousewheel: true,
		  pagination: {
		    el: sliderCounter,
		    type: "custom",
		    renderCustom: function(swiper, current, total) {
		      let i = current ? current : 0;
		      return `${("0" + i).slice(-2)} / ${("0" + total).slice(-2)}`;
		    }
		  },
		  //autoplay: {
		    //delay: 2500,
		    //disableOnInteraction: false
		  //},
		  navigation: {
		    nextEl: sliderNext,
		    prevEl: sliderPrevious
		  },
		  on: {
		    progress: function() {
		      let swiper = this;

		      for (let i = 0; i < swiper.slides.length; i++) {
		        let slideProgress = swiper.slides[i].progress;
		        let innerOffset = swiper.height * interleaveOffset;
		        let innerTranslate = slideProgress * innerOffset;

		        //TweenMax.set(swiper.slides[i], {
		          //skewY: `${innerTranslate*0.025}deg`,
		        //});
		        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
		          y: innerTranslate,
		        });
		      }
		    },
		    touchStart: function() {
		      let swiper = this;
		      for (let i = 0; i < swiper.slides.length; i++) {
		        swiper.slides[i].style.transition = "";
		      }
		    },
		    setTransition: function(speed) {
		      let swiper = this;
		      for (let i = 0; i < swiper.slides.length; i++) {
		        swiper.slides[i].style.transition = speed + "ms";
		        swiper.slides[i].querySelector(".slide-inner").style.transition =
		          speed + "ms";
		      }
		    }
		  }
		});
	}

	// Banner Carousel / Owl Carousel 
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		}); 
	}

	// Single Item Carousel 
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		}); 
	}

	// Services Carousel 
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
			}
		}); 
	}

	// Team Carousel 
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
			}
		}); 
	}

	if ($('.projects-slider').length) {
        var swiper = new Swiper('.projects-slider', {
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 2,
            initialSlide: 3,
            keyboardControl: true,
            mousewheelControl: false,
            lazyLoading: true,
            preventClicks: false,
            preventClicksPropagation: false,
            lazyLoadingInPrevNext: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            coverflow: {
                rotate: 40,
                stretch: 1,
                depth: 0,
                modifier: 1
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                }
            }
        });

    }

    // Testimonial Carousel 
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					margin:0,
					items:1
				},
				768:{
					margin:0,
					items:2
				},
				1024:{
					margin:0,
					items:2
				}
			}
		}); 
	}

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Typewriter Function
	if($('.typewrite').length){

		var TxtType = function(el, toRotate, period) {
	        this.toRotate = toRotate;
	        this.el = el;
	        this.loopNum = 0;
	        this.period = parseInt(period, 10) || 2000;
	        this.txt = '';
	        this.tick();
	        this.isDeleting = false;
	    };

	    TxtType.prototype.tick = function() {
	        var i = this.loopNum % this.toRotate.length;
	        var fullTxt = this.toRotate[i];

	        if (this.isDeleting) {
	        this.txt = fullTxt.substring(0, this.txt.length - 1);
	        } else {
	        this.txt = fullTxt.substring(0, this.txt.length + 1);
	        }

	        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	        var that = this;
	        var delta = 200 - Math.random() * 100;

	        if (this.isDeleting) { delta /= 2; }

	        if (!this.isDeleting && this.txt === fullTxt) {
	        delta = this.period;
	        this.isDeleting = true;
	        } else if (this.isDeleting && this.txt === '') {
	        this.isDeleting = false;
	        this.loopNum++;
	        delta = 500;
	        }

	        setTimeout(function() {
	        that.tick();
	        }, delta);
	    };

	    window.onload = function() {
	        var elements = document.getElementsByClassName('typewrite');
	        for (var i=0; i<elements.length; i++) {
	            var toRotate = elements[i].getAttribute('data-type');
	            var period = elements[i].getAttribute('data-period');
	            if (toRotate) {
	              new TxtType(elements[i], JSON.parse(toRotate), period);
	            }
	        }
	        // INJECT CSS
	        var css = document.createElement("style");
	        css.type = "text/css";
	        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	        document.body.appendChild(css);
	    };
	}

	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block animated fadeInUp');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block animated fadeInUp');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .tab-btns .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .tab-btns .tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .tabs-content .tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
				},
				subject: {
					required: true,
				},
				message: {
					required: true
				}
			}
		});
	}

	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 90,
			values: [ 8, 85 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	//background parallax		
	function bg_parallax(){
		if($('.page-wrapper').length){
			jQuery(function(){
				jQuery.stellar({
				}).delay(2000);;
			});		
		}	
	}

	//MixItup Gallery
	if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({
		 	 callbacks: {
		        onMixEnd: function(state, futureState) {
					bg_parallax();
		        }
		    }
	 	 });
	 }

	 //Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}

	 //Coming Soon Clock
	 if($('.clock-wrapper').length){  
		(function(){
            var now       = new Date(),
                hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                    "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");
            document.getElementById("clock-animations").innerHTML = stylesDeg;
        })();
    }

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		if($('body').find(".mixitup-gallery").length <= 0){
			bg_parallax();
		}
	});	

})(window.jQuery);

