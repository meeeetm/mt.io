$(function(){
	$("#owl-demo4").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:false,
		autoPlay:true,
		items : 1,
	});
	$("#menumobil").click(function() {
		$("#mobilmenu").show();
		$('html, body').css({
			'overflow': 'hidden',
			'height': '100%'
		});
	});
	$(".mobilmenuclose").click(function() {
		$("#mobilmenu").hide();
		$('html, body').css({
			'overflow': 'initial',
			'height': 'initial'
		});
	});
});
$(document).ready(function() {
$("#owl-demo").owlCarousel({
navigation : true, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
      items : 15, //10 items above 1000px browser width
      itemsDesktop : [4000,15], //5 items between 1000px and 901px
      itemsDesktopSmall : [1180,14], // betweem 900px and 601px
      itemsTablet: [960,10], //2 items between 600 and 0
      itemsTabletSmall: [720,8], //2 items between 600 and 0
      itemsMobile : [590,5] // itemsMobile disabled - inherit from itemsTablet option
});
});
$(document).ready(function() {
  var owl = $("#owl-demo3");
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [4000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [990,5], // betweem 900px and 601px
      itemsTablet: [760,5], //2 items between 600 and 0
      itemsMobile : [760,5], // itemsMobile disabled - inherit from itemsTablet option
  });
  
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});
	function yorum(){
	$.ajax({
	url: "/ajax/yorum.php",
	type: "POST",
	data: $('#yorum').serialize(),
	success: function(donus){
		if(donus == "ok"){
			alert("Yorumunuz alinmistir. Onaylandiktan sonra yayinlanicaktir.");
			$('input[name=adsoyad]').val('');
			$('textarea[name=yorum]').val('');
		}else{
			alert(donus);
		}
	}
	});
	}