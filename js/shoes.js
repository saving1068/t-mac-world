	$(function() {
				function show(id) {
					$(id + " li").click(function() {
						$(this).addClass("active").siblings().removeClass("active");
						$(id + " .shoepic").eq($(this).index()).show().siblings().hide();
					})
				}
				show("#maidi");
				show("#aifos");
				show("#Anthony");
				show("#cp3");
				show("#weide");
				show("#kate");
				show("#kebe");
				show("#js");

				function showTime(id) {
					$(id + " li").click(function() {
						$(this).addClass("active").siblings().removeClass("active");
						$(id + " .shoepic1").eq($(this).index()).show().siblings().hide();
					})
				}
				showTime("#maidi");
				showTime("#aifos");
				showTime("#Anthony");
				showTime("#cp3");
				showTime("#weide");
				showTime("#kate");
				showTime("#kebe");
				showTime("#js");

				function slion(id) {
					$(id+ " .shoe").mouseover(function() {
						$(id+ " .slion").css("display", "block");
						$(id+ " .Box").css("display", "block");
					})
					$(id+ " .shoe").mouseout(function() {
						$(id+ " .slion").css("display", "none");
						$(id+ " .Box").css("display", "none");
					})
					$(id+ " .shoe").mousemove(function() {
						var ev = event || window.event;
						var pX = ev.pageX || ev.clientX + $(window).scrollLeft();
						var pY = ev.pageY || ev.clientY + $(window).scrollTop();
						var maxWidth = $(id+ " .box").width() - $(id+" .slion").width();
						var maxHeight = $(id+ " .box").height() - $(id+" .slion").height();
						var endX = pX - $(id+ " .box").offset().left - ($(id+" .slion").width() / 2);
						var endY = pY - $(id+ " .box").offset().top - ($(id+" .slion").height() / 2);
						if(endX > maxWidth) {
							endX = maxWidth;
						} else if(endX < 0) {
							endX = 0
						}
						if(endY > maxHeight) {
							endY = maxHeight;
						} else if(endY < 0) {
							endY = 0
						}
						$(id+" .slion").css({
							"left": endX,
							"top": endY
						});
						var bigWidth = $(".Box img").width() - $(".Box").width();
						var bigHeight = $(".Box img").height() - $(".Box").height();
						var X = (endX / maxWidth) * bigWidth;
						var Y = (endY / maxHeight) * bigHeight;
						$(".Box img").css({
							"left": -X,
							"top": -Y
						});
					})
				}
				slion("#maidi");
				slion("#aifos");
				slion("#Anthony");
				slion("#cp3");
				slion("#weide");
				slion("#kate");
				slion("#kebe");
				slion("#js");
				$(".home").click(function(){
					window.location = "homepage.html"
				})
				$(".person").click(function(){
					window.location = "maidi.html"
				})
				$(".snig").click(function(){
					window.location = "Loginpage.html"
				})
			})