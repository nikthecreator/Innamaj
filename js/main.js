$(document).ready(function () {
	$('#wrapper').fullpage({
		scrollingSpeed: 825
	});
});

// Toggle Contact page
$(document).ready(function(){
    $("#flip").click(function(){
    	$("#panel").slideToggle();
	});
});

// Rotate arow
$(".rotate").click(function () {
    $(this).toggleClass("down");
})

