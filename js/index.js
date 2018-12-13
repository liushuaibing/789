$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		/*$("#show").toggleClass("none");*/
		$("#little").slideToggle("little");
	});  
	
	var btn = document.getElementById("btn"); //按钮
			btn.onclick = function() {
				if(btn.innerHTML == "查看更多&nbsp;+") {
					$(".over").css("display", "block");
					btn.innerHTML = "关闭&nbsp;&nbsp;x";
				} else {
					$(".over").css("display", "none");
					btn.innerHTML = "查看更多&nbsp;+";
				}
			}
			
			
			var a= document.getElementById("a"); //按钮
			a.onclick = function() {
				if(a.innerHTML == "查看更多&nbsp;+") {
					$(".open").css("display", "block");
					a.innerHTML = "关闭&nbsp;x";
				} else {
					$(".open").css("display", "none");
					a.innerHTML = "查看更多&nbsp;+";
				}
			}
			var c= document.getElementById("c"); //按钮
			c.onclick = function() {
				if(c.innerHTML == "查看更多&nbsp;+") {
					$(".c").css("display", "block");
					c.innerHTML = "关闭&nbsp;x";
				} else {
					$(".c").css("display", "none");
					c.innerHTML = "查看更多&nbsp;+";
				}
			}
			var d= document.getElementById("e"); //按钮
			d.onclick = function() {
				if(d.innerHTML == "查看更多&nbsp;+") {
					$(".d").css("display", "block");
					d.innerHTML = "关闭&nbsp;x";
				} else {
					$(".d").css("display", "none");
					d.innerHTML = "查看更多&nbsp;+";
				}
			}
			
});