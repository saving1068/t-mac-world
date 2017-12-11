var subnav = document.getElementById("subnav");
			var warp = document.getElementById("warp");
			var list = document.getElementById("list");
			var cousor = document.getElementById("cousor");
			var left = document.getElementById("left");
			var rigth = document.getElementById("right");
			var anbtn = document.getElementById("anbtn");
			var num = 0;
			subnav.onclick = function() {
				if(list.style.display == "block") {
					list.style.display = "none"
				} else {
					list.style.display = "block"
				}
			}
			cousor.onclick = function() {
				left.style.left = -1000 + "px";
				rigth.style.right = -1000 + "px";
				cousor.style.display = "none";
				anbtn.style.display = "block";
			}
			window.onscroll = function(){
				if($(window).scrollTop()>500){
					$("#shoes").stop().slideDown();
					$("#back").show();
				}
				if ($(window).scrollTop()<800) {
						$("#back").hide()
					}
			}
			$(function() {
				function show1() {
					if($(".mul").css('display') == "block") {
						$(".mul").hide();
					} else {
						$(".mul").show()
					}
				}
				setInterval(show1, 500);
				//TAB
				function showtime(id) {
					var num = 0;
					var timer = null;
					var newLi = $("#myMul li").eq(0).clone();
					$("#myMul").append(newLi);
					var len = $("#myMul li").length;
					$("#myMul").css("width", len * 500);
					$("#leftBtn").click(function() {
						num--;
						move();
					})
					$("#rightBtn").click(function() {
						num++;
						move();
					})

					function move() {
						if(num < 0) {
							num = len - 2;
							$("#myMul").css("left", -(len - 1) * 1000);

						}
						if(num > len - 1) {
							num = 1;
							$("#myMul").css("left", 0)
						}
						$("#myMul").stop().animate({
							"left": -num * 500
						}, 1000)
						if(num > $("#tab li").length - 1) {
							$("#tab li").eq(0).addClass("active").siblings().removeClass("active");
						} else {
							$("#tab li").eq(num).addClass("active").siblings().removeClass("active");
						}
					}
					timer = setInterval(function() {
						num++;
						move();
					}, 2000)
					$(id).mousemove(function() {
						clearInterval(timer);
					})
					$(id).mouseout(function() {
						timer = setInterval(function() {
							num++;
							move();
						}, 1000)
					})
					$("#tab li").click(function() {
						num = $(this).index();
						move();
						clearInterval(timer);
					})
				}
				showtime($(".play"));
				$(".old-day").mouseover(function() {
					$(".player-box-1").show();
					$(".player-box").hide();
				})
				$(".best-day").mouseover(function(){
					$(".player-box-1").hide();
					$(".player-box").show();
				})
				function showtime2() {
					var timer = null;
					var subnum = 0;
					var newLi = $(".pic").clone();
					$(".bigpic").append(newLi);
					var len = $(".bigpic>li").length;
					$(".bigpic").css("width", len * 1500);
					$(".left").click(function() {
						subnum--;
						move1();
					})
					$(".right").click(function() {
						subnum++
						move1();
					})

					function move1() {
						if(subnum < 0) {
							subnum = len - 2;
							$(".bigpic").css("left", -(len - 1) * 1500);
						}
						if(subnum > len - 1) {
							subnum = 1;
							$(".bigpic").css("left", 0);
						}
						$(".bigpic").stop().animate({
							"left": -subnum * 1500
						}, 500)
					}
					timer = setInterval(function() {
						subnum++;
						move1();
					}, 2000)
					$("#pic-All").mouseover(function() {
						clearInterval(timer)
					})
					$(".left").mouseover(function() {
						clearInterval(timer)
					})
					$(".right").mouseover(function() {
						clearInterval(timer)
					})
					$("#pic-All").mouseout(function() {
						clearInterval(timer)
						timer = setInterval(function() {
							subnum++;
							move1();
						}, 2000)
					})
				}
				showtime2();
				$.ajax({
						type:"GET",
						url:"file/data.json",
						async:true,
						data:{
							
						},
						success:function(result){
							var data = result;
							var leng = $(".score").length;
							for(var i=0;i<leng;i++){
								$(".score").eq(i).html(data["one"][i]);
								$(".name").eq(i).html(data["two"][i]);
								$(".desc").eq(i).html(data["three"][i]);
								$(".photo").eq(i).html("<img src="+"img/"+data["four"][i]+"/>");
								$(".photo-2").eq(i).html("<img src="+"img/"+data["five"][i]+"/>");
								$(".name-2 span").eq(i).html(data["six"][i]);
								$(".name-2 p").eq(i).html(data["seven"][i]);
								$(".score-2").eq(i).html(data["poin"][i]);
								$(".photo-3").eq(i).html("<img src="+"img/"+data["eight"][i]+"/>");
								$(".name-3 span").eq(i).html(data["nine"][i]);
								$(".name-3 p").eq(i).html(data["ten"][i]);
								$(".score-3").eq(i).html(data["evlent"][i]);
								
								$(".score1").eq(i).html(data["one-1"][i]);
								$(".name1").eq(i).html(data["two-1"][i]);
								$(".desc1").eq(i).html(data["three-1"][i]);
								$(".photo1").eq(i).html("<img src="+"img/"+data["four-1"][i]+"/>");
								$(".photo1-2").eq(i).html("<img src="+"img/"+data["five-1"][i]+"/>");
								$(".span-1").eq(i).html(data["six-1"][i]);
								$(".p-1").eq(i).html(data["seven-1"][i]);
								$(".score-poin").eq(i).html(data["poin-1"][i]);
								$(".player-3 .photo1-2").eq(i).html("<img src="+"img/"+data["eight-1"][i]+"/>");
								$(".span-2").eq(i).html(data["nine-1"][i]);
								$(".p-2").eq(i).html(data["ten-1"][i]);
								$(".player-3 .score-2").eq(i).html(data["evlent-1"][i]);
							}
						}
				})
				$(".old-day").hover(function(){
					$(".old-day").css("border-bottom","2px solid gold");
					$(".best-day").css("border","none");
				},function(){
					$(".old-day").css("border","none");
					$(".best-day").css("border-bottom","2px solid gold");
				})
				$("#anbtn").click(function() {
					window.location = "maidi.html";
				})
				$(".pictrue li").click(function() {
					window.location = "shoes.html";
				})
				$(".snig").click(function(){
					window.location = "Loginpage.html";
				})
				$(".plaing").click(function(){
					window.location = "maiditime.html";
				})
				$(".shoer").click(function(){
					window.location = "shoes.html";
				})
				$(".person").click(function(){
					window.location = "maidi.html";
				})
				$("#back").click(function(){
					$('html,body').animate({'scrollTop':'1200'},1000)
				})
			})