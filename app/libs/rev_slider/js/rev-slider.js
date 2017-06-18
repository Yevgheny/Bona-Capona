$(document).ready(function() {
	$('.revolution-slider').revolution({
		delay:4000,
		startwidth:960,
		startheight:730,
		startWithSlide:0,

		fullScreenAlignForce:"on",
		autoHeight:"off",

		shuffle:"off",

		onHoverStop:"on",

		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:3,

		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResoluition:0,

		hideThumbs:1000,
		hideTimerBar:"off",

		keyboardNavigation:"on",

		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"round",

		navigationHAlign:"right",
		navigationVAlign:"bottom",
		navigationHOffset:300,
		navigationVOffset:0,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:250,
		soloArrowLeftVOffset:150,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:250,
		soloArrowRightVOffset:150,


		touchenabled:"on",
		swipe_velocity:"0.7",
		swipe_max_touches:"1",
		swipe_min_touches:"1",
		drag_block_vertical:"false",

		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
		parallaxDisableOnMobile:"off",

		stopAtSlide:-1,
		stopAfterLoops:-1,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		hideSliderAtLimit:0,

		dottedOverlay:"twoxtwo",

		spinned:"spinner4",

		fullWidth:"off",
		forceFullWidth:"off",
		fullScreen:"off",
		fullScreenOffsetContainer:"#topheader-to-offset",
		fullScreenOffset:"0px",


		shadow:0

	});

});