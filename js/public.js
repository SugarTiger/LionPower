$(function() {
    // 轮播图js
    // 添加焦点和左右箭头
    function addOlSpan(bannerId) {
        var liImgs = $("#" + bannerId).find("ul").find("li");
        var ol = $("<ol></ol>");
        liImgs.each(function(i) {
            ol.append($("<li/>"));
        });
        var lspan = '<span id="l"></span>';
        var rsoan = '<span id="r"></span>';
        $("#" + bannerId).append(ol, lspan, rsoan);
        $("#banner ol li").eq(0).addClass("active");
        $("#l").hide();
        $("#r").hide();
    };

    function position(bannerId, imgH, imgW) {
        var poddingVal = parseInt(imgH) / parseInt(imgW) * 100 + "%";
        $("#" + bannerId).find("ul").css("padding-bottom", poddingVal);
    }

    function active() {
        $("#banner ol li").eq(i).addClass("active").siblings().removeClass("active");
        $("#banner ul li").eq(i).fadeIn(800).siblings().fadeOut(800);
    }
    // 后退
    function moveL() {
        i--;
        if (i == -1) {
            i = size - 1;
        }
        active();
    }
    // 前进
    function moveR() {
        i++;
        if (i == size) {
            i = 0;
        }
        active();
    }
    addOlSpan("banner");
    position("banner", 480, 1920);
    var i = 0;
    var size = $("#banner ol li").length;
    // 绑定左右控制
    $("#l").click(function() {
        moveL();
    });
    $("#r").click(function() {
        moveR();
    });
    // 自动轮播
    var autoMove = setInterval(moveR, 3000);
    $("#banner").hover(function() {
        clearInterval(autoMove);
        $("#l").show();
        $("#r").show();
    }, function() {
        autoMove = setInterval(moveR, 3000);
        $("#l").hide();
        $("#r").hide();
    });
    // 焦点点击
    $("#banner ol li").each(function() {
        $(this).click(function() {
            i = $(this).index();
            active();
        });
    });

    // 导航条的固定标签
    (function navAddClass() {
        var url = location.href;
        $("#nav li a").each(function() {
            var aUrl = $(this).attr("href");
            if (url.indexOf(aUrl) != -1) {
                $(this).addClass("on");
            }
        });
    })();
    // 左边选项卡
    (function() {
        $(".leftNav ul li").each(function() {
            $(this).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(".rightMain > div").eq($(this).index()).css("display", "block").siblings().css("display", "none");
            });
        });
    })();
});