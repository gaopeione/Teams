window.onload = function() {
	var oLi = document.getElementsByClassName("we-tab-gp")[0].children;
	var oDiv = document.getElementsByClassName("we-tab-cont-gp")[0].children;
	var iNow = 0;

	function tab() {
		for(var j = 0; j < oLi.length; j++) {
			oLi[j].className = "";
			oDiv[j].className = "";
		}
		oLi[iNow].className = "we-tab-active-gp";
		oDiv[iNow].className = "we-tab-cont-active-gp";
	}
	for(var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onclick = function() {
			iNow = this.index;
			tab();
			if(iNow == 3) {
				var oSpan = document.getElementsByClassName("we-cooperation-cut-gp")[0].children;
				var oUl = document.getElementsByClassName("we-cooperation-tap-gp");
				for(var i = 0; i < oSpan.length; i++) {
					oSpan[i].index = i;
					oSpan[i].onclick = function() {
						var n = this.index;
						for(var j = 0; j < oSpan.length; j++) {
							oUl[j].style.display = "none";
							oSpan[j].style.background="#DD4012";
						}
						oSpan[n].style.background="#000";
						oUl[n].style.display = "block";
					}
				}
			}

		}
	}
}