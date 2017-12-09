var warp = document.getElementById("warp");
			var windowWidth = document.documentElement.clientWidth;
			var windowHeight = document.documentElement.clientHeight;
			warp.style.width = windowWidth + "px";
			warp.style.height = windowHeight + "px";
			window.onresize = function() {
				windowWidth = document.documentElement.clientWidth;
				windowHeight = document.documentElement.clientHeight;
				warp.style.width = windowWidth + "px";
				warp.style.height = windowHeight + "px";
			}
			var Loginframe = document.getElementById("Loginframe");
			var sign = document.getElementById("sign");
			var signinput = Loginframe.getElementsByTagName("input");
			var regbtn = document.getElementById("regbtn");
			var regPage = document.getElementById("registrationPage");
			var reginput = regPage.getElementsByTagName("input");
			var forBtn = document.getElementById("forBtn");
			var forget = document.getElementById("forgetPass");
			var forgetinput = forget.getElementsByTagName("input");
			var flag = null;
			var local = window.localStorage;
			var passs = regPage.getElementsByTagName("p");
			reginput[0].onblur = function() {
				var username = /^[\u4e00-\u9fa5\w]{3,16}$/;
				if(reginput[0].value == "") {
					//					alert("用户名不能为空！");
					passs[0].innerHTML = "用户名不能为空！"
					flag = false;
				} else if(!username.test(reginput[0].value)) {
					//					alert("用户名不合法！");
					passs[0].innerHTML = "用户名不合法！"
					flag = false;
				}
			}

			reginput[1].onblur = function() {
				//密码
				var pass = /^[a-z0-9_-]{6,18}$/;
				if(reginput[1].value == "") {
					//					alert("密码不能为空！");
					passs[1].innerHTML = "密码不能为空！"
					flag = false;
				} else if(!pass.test(reginput[1].value)) {
					//					alert("密码不合法！");
					passs[1].innerHTML = "密码不合法！"
					flag = false;
				}else{
					flag = true;
				}
				
			}
			reginput[2].onblur = function() {
				//手机号
				var phone = /^[1[3|5|7|8][0-9]\d{4,8}]/;
				if(reginput[2].value == "") {
					//					alert("手机号不能为空！");
					passs[2].innerHTML = "手机号不能为空！"
					flag = false;
				} else if(phone.test(reginput[2].value)) {
					//					alert("手机号不合法！");
					passs[2].innerHTML = "手机号不合法！"
					flag = false;
				}else{
					flag = true;
				}
			}
			regbtn.onclick = function() {
				var username = /^[\u4e00-\u9fa5\w]{3,16}$/;
				var pass = /^[a-z0-9_-]{6,18}$/;
				var phone = /^[1[3|5|7|8][0-9]\d{4,8}]/;
//				flag = true;
//				console.log(1111);
			
				if(flag) {
				//					var ajax = null;
				//					if(window.XMLHttpRequest) {
				//						ajax = new XMLHttpRequest();
				//					} else {
				//						ajax = new ActiveXObject("Micorsoft.XMLHTTP");
				//					}
				//					ajax.open("GET", "file/11-21.json", true);
				//					ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				//					ajax.onreadystatechange = function() {
				//						if(ajax.readyState == 4 && ajax.status == 200) {
				//							var data = ajax.responseText;
				//							alert(data)
				//						}
				//					}
				//					ajax.send(null)
//				console.log(22222);
					local.setItem(reginput[0].value, reginput[1].value);
					alert("成功注册，请登录");
					regPage.style.display = "none";
					Loginframe.style.left = "400" + "px";
				}
			}
			
			sign.onclick = function() {
				var username = /^[\u4e00-\u9fa5\w]{3,16}$/;
				var pass = /^[a-z0-9_-]{6,18}$/;
				var phone = /[1[3|5|7|8][0-9]\d{4,8}]/;
				flag = true;
				var arr = []; //用来存储key
				if(signinput[0].value == "") {
					alert("用户名不能为空！");
					flag = false;
				} else if(!username.test(signinput[0].value)) {
					alert("用户名不合法！");
					flag = false;
				}
				for(var j=0;j<local.length;j++){
					arr.push(local.key(j));
				}
				if(arr.indexOf(signinput[0].value) == -1){
					alert("用户名不存在");
					flag = false;
				}
				
				console.log(arr);
				//密码
				if(signinput[1].value == "") {
					alert("密码不能为空！");
					flag = false;
				} else if(!pass.test(signinput[1].value)) {
					alert("密码不合法！");
					flag = false;
				}
				if(flag) {
//					var name = local.getItem("123456");
//					var name1 = local.getItem("abcdfeg");
//					var name2 = local.getItem("name");
					var name = signinput[0].value;
					if(signinput[0].value == name) {
						window.location = "homepage.html";
					}else {
						alert("密码有误，请检查！！！")
					}
				}
				//手机号
			}

			forBtn.onclick = function() {
				var username = /^[\u4e00-\u9fa5\w]{3,16}$/;
				var pass = /^[a-z0-9_-]{6,18}$/;
				var phone = /[1[3|5|7|8][0-9]\d{4,8}]/;
				flag = true;
				if(forgetinput[0].value == "") {
					alert("用户名不能为空！");
					flag = false;
				} else if(!username.test(forgetinput[0].value)) {
					alert("用户名不合法！");
					flag = false;
				}

				//密码
				if(forgetinput[1].value == "") {
					alert("密码不能为空！");
					flag = false;
				} else if(!pass.test(forgetinput[1].value)) {
					alert("密码不合法！");
					flag = false;
				}
				if(flag) {
					alert("登录成功")
				}
				//手机号
			}
//			regbtn.onclick = function() {
//				var username = /^[\u4e00-\u9fa5\w]{3,16}$/;
//				var pass = /^[a-z0-9_-]{6,18}$/;
//				var phone = /^[1[3|5|7|8][0-9]\d{4,8}]/;
////				flag = true;
//				console.log(1111);
//			}
			
			$(function() {
				$("input").click(function() {
					$(this).addClass("bor").siblings().removeClass("bor")
				})
				$("#register").click(function() {
					$("#registrationPage").slideDown()
				})
				$("#forget").click(function() {
					$("#forgetPass").slideDown()
				})

			})