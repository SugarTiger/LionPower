$(function() {
	// 轮播图js
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	});
	//主导航栏的点击显示与隐藏
	(function() {
		var temp = true;
		$("#back").click(function() {
			window.history.back();
		});
		$("#navMore").click(function() {
			if(temp) {
				$(".triangle").show();
				$("#h_nav").show();
			} else {
				$(".triangle").hide();
				$("#h_nav").hide();
			}
			temp = !temp;
		});
		$("#h_nav li").each(function() {
			$(this).click(function() {
				$(".triangle").hide();
				$("#h_nav").hide();
				temp = !temp;
			});
		});
	})();
	//中部导航
	$(".nav-sma div").each(function() {
		$(this).click(function() {
			$(".nav-sma p").removeClass("actives");
			$(this).find("p").addClass("actives");
			//关于我们
			$(".about-s").eq($(this).index()).css("display", "block").siblings().css("display", "none");
			//新闻中心
			$(".news_main ul").eq($(this).index()).css("display", "block").siblings().css("display", "none");
			//产品中心
			$(".product_m").eq($(this).index()).css("display", "block").siblings().css("display", "none");
			
		});
	});

});