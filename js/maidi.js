subnav.onclick = function() {
				if(list.style.display == "block") {
					list.style.display = "none"
				} else {
					list.style.display = "block"
				}
			}
//		var arr = ["2次入选NBA最佳阵容一阵",
//		"3次入选NBA最佳阵容二阵",
//		"7次NBA全明星（2001-2007）",
//		"2013年8月26日宣布退役 ",
//		"2002-03赛季得分王",
//		"2003-04赛季得分王","2017年入选篮球名人堂"];
		var data = null;
//		var num = Math.floor(Math.random()*7)
		setInterval(function(){
			var num = Math.floor(Math.random()*7)
			$(".honor-1").eq(num).fadeIn().siblings().fadeOut()
//			data = Math.floor(Math.random()*7)
//			$(".honor-1").html(arr[data]).fadeToggle(700);
		},1000)
		
		$(".about li").hover(function(){
			$(this).find(".hover-li").css("top",67);
		},function(){
			$(this).find(".hover-li").css("top",-68)
		})
		$(".Email").click(function(){
			$(".Email").css({"background":"rosybrown"})
		})
		$(".shoer").click(function(){
			window.location = "shoes.html";
		})
		$(".home").click(function(){
			window.location = "homepage.html";
		})
		$(".snig").click(function(){
			window.location = "Loginpage.html";
		})