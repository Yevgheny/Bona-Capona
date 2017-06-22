
function mobileMenu(){
	$('.open-mobile-menu').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var button = $(this);
		button.toggleClass('open');
	});
}
$( document ).ready(function() {
	mobileMenu();
});
$( ".open-mobile-menu" ).click(function() {
	$( "#main-drop-down-menu" ).slideToggle( 200, function() {
	});
});
$( "#search-toggle" ).click(function() {
	$( "#searchform" ).slideToggle( 200, function() {
	});
});


$(function() {

	new WOW().init();


	// Smooth Scroll to block
	$('a[href^="#mp-p_about-restaurant"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 500);
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
$(document).ready(function() {
	$('#slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		items: 1
	});

	$('#test-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})
	
	$('.ev-p-events__slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		items: 1,
		animateOut: 'fadeOut',
	});


});

$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();

$(document).ready(function () {
	var $tabs = $('.horizontalTab');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	$('.ev-g__gallary').magnificPopup({

		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});

	$(function() {
		var d = $(".ca-d__choice-delivery label"),
			a = $("div.ab-p__form--wrap");
		d.each(function(c, b) {
			$(b).on("click", function() {
				a.stop().not(a.eq(c)).slideUp(function() {
					a.eq(c).slideDown()
				})
			});
			$("input", b).is(":checked") && $(b).click()
		})
	});

});
(function(){

	var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
		touchSupported = ('ontouchstart' in window),
		pointerSupported = ('pointerdown' in window);

	skipClickDelay = function(e){
		e.preventDefault();
		e.target.click();
	}

	setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};

	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
			case "true":
				setAriaAttr(el1, 'aria-expanded', 'true');
				setAriaAttr(el2, 'aria-hidden', 'false');
				break;
			case "false":
				setAriaAttr(el1, 'aria-expanded', 'false');
				setAriaAttr(el2, 'aria-hidden', 'true');
				break;
			default:
				break;
		}
	};


})();
(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fa fa-angle-up" aria-hidden="true"></i></div><div class="quantity-button quantity-down"><i class="fa fa-angle-down" aria-hidden="true"></i></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {

	var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

	btnUp.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue + 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

	btnDown.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue <= min) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue - 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});


});
$(document).ready(function(){
    $('input.timepicker').timepicker({
        timeFormat: 'HH:mm:ss',
        // year, month, day and seconds are not important
        minTime: new Date(0, 0, 0, 9, 0, 0),
        maxTime: new Date(0, 0, 0, 23, 0, 0),
        // time entries start being generated at 6AM but the plugin 
        // shows only those within the [minTime, maxTime] interval
        startHour: 6,
        // the value of the first item in the dropdown, when the input
        // field is empty. This overrides the startHour and startMinute 
        // options
        startTime: new Date(0, 0, 0, 8, 20, 0),
        // items in the dropdown are separated by at interval minutes
        interval: 10
    });
});
jQuery.datetimepicker.setLocale('ru');

jQuery('.datetimepicker1').datetimepicker({
 i18n:{
  de:{
   months:[
    'Januar','Februar','März','April',
    'Mai','Juni','Juli','August',
    'September','Oktober','November','Dezember',
   ],
   dayOfWeek:[
    "So.", "Mo", "Di", "Mi", 
    "Do", "Fr", "Sa.",
   ]
  }
 },
 timepicker:false,
 format:'d.m.Y'
});
$(document).ready(function () {
    $('.sub > a').click(function(){
      $('.sub ul').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
       $(this).next().slideToggle();
       }
      return false;
      $('.sub-one ul').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
       $(this).next().slideToggle();
       }
      return false;
    });
       $('.mini-menu > ul > li > a').click(function(){
	   $('.mini-menu > ul > li > a, .sub a').removeClass('active');
	   $(this).addClass('active');
	}),
       $('.sub ul li a').click(function(){
	   $('.sub ul li a').removeClass('active');
	   $(this).addClass('active');
	}),
      $('.sub-two > a').click(function(){
      $('.sub-two ul').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
       $(this).next().slideToggle();
       }
      return false;
      $('.sub-two ul').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
       $(this).next().slideToggle();
       }
      return false;
    });
       $('.mini-menu > ul > li > a').click(function(){
	   $('.mini-menu > ul > li > a, .sub-two a').removeClass('active');
	   $(this).addClass('active');
	}),
       $('.sub-two ul li a').click(function(){
	   $('.sub-two ul li a').removeClass('active');
	   $(this).addClass('active');
	})
});
//Табы для главной страницы и личного кабинета !!!Обязательно в самом низу, иначе в корзине получается полный слэш!!!
$(".verticalTab_v").easyResponsiveTabs({
    type: 'vertical', //Типы: default, vertical, accordion           
    width: 'auto', //auto или любое значение ширины
    fit: false,   // 100% пространства занимает в контейнере
    activate: function() {} // Функция обратного вызова, используется, когда происходит переключение вкладок
});
