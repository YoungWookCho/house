require([
	"common",
], function() {
	var adder=260;
	var listResult=0;

	$(".arrow-left").on("click", function() {
		if (listResult+adder >= 0) {
			listResult=0;
			$(".common-list>ul").animate({left: listResult+"px"});
			return;
		}
		listResult+=adder;
		$(".common-list>ul").animate({left: listResult+"px"});
	});

	$(".arrow-right").on("click", function() {
		var lastPosition = ($(".common-list>ul>li:last-child").position().left+250);
		var viewLength = $(".common-list").outerWidth();
		if ( -(lastPosition-viewLength) >= listResult-adder ) {
			listResult=-(lastPosition-viewLength);
			$(".common-list>ul").animate({left: listResult+"px"});

			return;
		}
		listResult-=adder;
		$(".common-list>ul").animate({left: listResult+"px"});
	});

	$(".select-type>ul>li").on("click", function() {
		var select = $(this).parent("ul");
		$(".label-checker").removeClass("checked");
		select.find("li").removeClass("checked");
		$(this).find(".label-checker").addClass("checked");
		$(this).addClass("checked");
	});
});
