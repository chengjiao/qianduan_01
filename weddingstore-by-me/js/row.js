$.fn.row = function(e){
	/*$(".row").show();*/
	$(".wedding-middle li").bind("mouseover",function(){	
		$(this).children(".row").fadeIn(t.intervar);
	}).bind("mouseleave",function(){	
		$(this).children(".row").fadeOut(t.intervar);
	});
	var t = {
		intervar : 250
	};

/*	$(".figure-img").bind("mouseover",function(){
		$(this).next(".figure-bg").show();
	}).bind("mouseleave",function(){
		$(this).next(".figure-bg").hide();
	})*/
}