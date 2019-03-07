$(document).ready(function(){
	//社会招聘切换效果
	$(".nav-job-menu-btn").on("click",function(){
		//切换标签的显示
		$(".nav-job-menu-btn").removeClass("on");
		$(this).addClass("on");
		//切换内容显示
		var catId = $(this).attr("data-cid");
		var articleIdStr = "#article-" + catId ;
		$(".f_main").hide();
		$(articleIdStr).show();
	});

	//校园招聘切换效果

	$(".campus_navmenu").on("click",function(){
		//切换标签的显示
		$(".campus_navmenu").removeClass("active");
		$(this).addClass("active");
		var catId = $(this).attr("data-cid");
		var catIdStr = "#cat-" + catId ;
		$(".slide-nav-menu").removeClass("active");
		$(catIdStr).addClass("active");

		//切换内容显示
		var articleIdStr = "#article-" + catId ;
		$(".campus_job").hide();
		$(articleIdStr).show();
	});
});