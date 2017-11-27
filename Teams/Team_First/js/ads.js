var returnHtml = "<span class='mini' style=\"cursor:pointer;\">关闭</span><span class='zoom' style=\"cursor:pointer;\"></span>";
	returnHtml += "<div id='iframesrc'></div>";
//Download by http://www.jb51.net
$(function() {
	var boxWidth = 318; //宽度，兼容IE6必写；
	var boxHeight = 138; //可制空
	$("#rightlayoutShow").css({width:boxWidth})
	$("#rightlayoutShow").prepend(returnHtml);
	$("#iframesrc").html("<iframe src=\"ads.html\" scrolling=\"no\" frameborder=\"0\" width=\""+boxWidth+"\" height=\""+boxHeight+"\"></iframe>");
	
	//这里可以是Iframe Image Flash Text
	
	$("#rightlayoutShow .mini").click(function() {
		$("#iframesrc").slideUp("slow",function() {
			$("#rightlayoutShow .zoom").html("详情");
			$("#rightlayoutShow .mini").text("");
		});
		$("#rightlayoutShow .zoom").css({display:"block"});
		$("#rightlayoutShow .mini").css({display:"none"});
	}); 
	$("#rightlayoutShow .zoom").click(function() {
		$("#iframesrc").slideDown("slow",function() {
			$("#rightlayoutShow .mini").html("关闭");
			$("#rightlayoutShow .zoom").text("");
		});
		$("#rightlayoutShow .zoom").css({display:"none"});
		$("#rightlayoutShow .mini").css({display:"block"});
	});
	$(window).scroll(function() {
		callScroll("#rightlayoutShow", 10, 10 , "auto" , "absolute");
	});
	function callScroll(Sid, Stop, Sright, Swidth, Sposition) {
//		if (IEobject()) {
//			var scrollTop = $(window).scrollTop();
//		}else{
//			var scrollTop = $("#rightlayoutShow").scrollTop();
//		}
		$("#rightMessage").prepend(scrollTop);
		$(Sid).css({
			"bottom" : - (scrollTop - Stop),
			"right" : Sright,
			"width" : Swidth,
			"position" : Sposition
		});
	}
});

function IEobject() {
	if (window.XMLHttpRequest) {
		return true; //alert('Mozilla, Safari,IE7 ');
		if(!window.ActiveXObject){
			return true; //alert('Mozilla, Safari');
		} else {
			return true; //alert('IE7');
		}
	} else {
		return false; //alert('IE6');
	}
}