window.onload = function() {
	var oBtn = document.getElementById('xxk-lmh').children;
	var oDiv = document.getElementById('box-lmh').children;
	var oHea = document.getElementById('xxka-lmh').children;
	var iNow = 0;
	for(var i = 0; i < oBtn.length; i++) {
		oBtn[i].index = i;
		oBtn[i].onclick = function() {
			iNow = this.index;
			tab();
			for(var a = 0; a < oDiv.length; a++) {
				oDiv[a].style.display = 'none';
				oDiv[iNow].style.display = 'block';
			}
		}
	}

	function tab() {
		for(var i = 0; i < oBtn.length; i++) {
			oBtn[i].className = '';
		}
		oBtn[iNow].className = 'active';
	}

	for(var j = 0; j < oHea.length; j++) {
		oHea[j].index = j;
		oHea[j].onclick = function() {
			for(var i = 0; i < oHea.length; i++) {
				oHea[i].className = "";
			}
			oHea[this.index].className = 'activea';
		}
	}

}