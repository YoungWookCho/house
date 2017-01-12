require([
	"common",
], function() {
	var adder=260;
	var listResult=0;

	$(".best-arrow-left").on("click", function() {
		if (listResult+adder >= 0) {
			listResult=0;
			$(".best-list>ul").animate({left: listResult+"px"});
			return;
		}
		listResult+=adder;
		$(".best-list>ul").animate({left: listResult+"px"});
	});

	$(".best-arrow-right").on("click", function() {
		var lastPosition = ($(".best-list>ul>li:last-child").position().left+250);
		var viewLength = $(".best-list").outerWidth();
		if ( -(lastPosition-viewLength) >= listResult-adder ) {
			listResult=-(lastPosition-viewLength);
			$(".best-list>ul").animate({left: listResult+"px"});

			return;
		}
		listResult-=adder;
		$(".best-list>ul").animate({left: listResult+"px"});
	});

	$(".select-type>ul>li").on("click", function() {
		var select = $(this).parent("ul");
		$(".label-checker").removeClass("checked");
		select.find("li").removeClass("checked");
		$(this).find(".label-checker").addClass("checked");
		$(this).addClass("checked");
	});
});
