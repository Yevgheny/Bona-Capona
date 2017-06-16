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
	$('a[href^="#l"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
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
		items: 1
	});

	$('#slider-1').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	$('.ev-p-events__slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		items: 1
	});


});
$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();

$(document).ready(function () {

	var $tabs = $('#horizontalTab');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-2');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-3');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-4');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-5');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-6');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-7');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-8');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-9');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	var $tabs = $('#horizontalTab-10');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	$('#b-f__zoom-gallery').magnificPopup({

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

	$('#ab-p-tab-1__zoom-gallery').magnificPopup({

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

	$('#ab-p-tab-2__zoom-gallery').magnificPopup({

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

	$('#ab-p-tab-3__zoom-gallery').magnificPopup({

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

	$('#ab-p-tab-4__zoom-gallery').magnificPopup({

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

	$('#ab-p-tab-5__zoom-gallery').magnificPopup({

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

	$('#ab-p-tab-6__zoom-gallery').magnificPopup({

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
//function
	switchAccordion = function(e) {

		console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed')) {
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
		thisQuestion.classList.toggle('is-collapsed');
		thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');

		thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
			accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
		}
		if(pointerSupported){
			accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
		}
		accordionToggles[i].addEventListener('click', switchAccordion, false);
	}

})();

$(document).ready(function () {

	myCh.addEventListener('change', changeListener);

	function changeListener() {
		var id = this.id;
		var selects = document.querySelectorAll('[data-to-disable]');
		for(var i=0; i<selects.length; i++) {
			console.log(selects[i].disabled)
			selects[i].disabled = !selects[i].disabled;
		}
	}
});

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

