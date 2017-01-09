require([
	"common",
], function() {
	var adder=205/2;
	var listResult=0;

	$(".arrow-left").on("click", function() {
		listResult+=adder;
		$(".common-list>ul").animate({left: listResult+"px"});
	});

	$(".arrow-right").on("click", function() {
		listResult-=adder;
		$(".common-list>ul").animate({left: listResult+"px"});
	});
});
