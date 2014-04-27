$(document).ready(function(){

var l = 'licud';
var y = 'yeshatid';
var m = 'meretz';
var a = 'avoda';
partieArray = [a,m,l,y];
var partie;
var not = $('img').not(this).removeClass;
num = licudNum = avodaNum = meretzNum = yeshNum = partieActiveNum = '95';
random = Math.ceil(Math.random() * 20);
var i = random;

function popChanger(param1) {
	if ($('span#'+param1).width() == 100) {
		$('.popup').css('display','inline-block');
		$('.pop_holder, span#'+param1+'_pop').css('display','block');
		$('span#'+param1).append('<img id="check" src="img/v.gif" width="24" height="19" alt="V" style="top: -17px; left: 118px;">');
	}
}

function partieChanger() {
$('.show').not(this)
.removeClass('avoda yeshatid meretz licud')
.addClass(partie)
.attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
}

	function preloader() {
	if (document.images) {
		var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		for (var i = 1; i < numArray.length; i++) {
			numArray[i] = new Image();
			numArray[i].src = "img/"+l+"/"+i+".jpg";
			numArray[i].src = "img/"+a+"/"+i+".jpg";
			numArray[i].src = "img/"+m+"/"+i+".jpg";
			numArray[i].src = "img/"+y+"/"+i+".jpg";
		}
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		};
	}
}
addLoadEvent(preloader);

	$('#close').click(function(){
		$('.popup, .pop_holder, span#licud_pop, span#meretz_pop, span#yesh_pop, span#avoda_pop').css('display','none');
		$('.results').css('display','block');
		});


$('.show').click(function(e){
	e.preventDefault();

			partieNum = Math.ceil(Math.random() * 4);

			// if (partieNum == 1) {
			// 	partie = partieArray[0];
			// }
			// if (partieNum == 2) {
			// 	partie = partieArray[1];
			// }
			// if (partieNum == 3) {
			// 	partie = partieArray[2];
			// }
			// if (partieNum == 4) {
			// 	partie = partieArray[3];
			// }

			function pnumcalc(){
				vara = [1,2,3,4];
				varaarr = [0,1,2,3];
				for (var i = 1; i < vara.length; i++) {
					if (partieNum == vara[i]) {
						partie = partieArray[i-1];
						console.log(partieNum);
					}
				}
			}
			pnumcalc();

			if ($(this).hasClass('licud')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == l) {
					partie = y;
				}
				$('#licud').width(licudNum++);
				$('.show').not(this).removeClass('avoda yeshatid meretz licud').addClass(partie).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}
			if ($(this).hasClass('meretz')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == m) {
					partie = a;
				}
				$('#meretz').width(meretzNum++);
				$('.show').not(this).removeClass('avoda yeshatid meretz licud').addClass(partie).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}
		if ($(this).hasClass('avoda')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == a) {
					partie = l;
				}
				$('#avoda').width(avodaNum++);
				$('.show').not(this).removeClass('avoda yeshatid meretz licud').addClass(partie).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}
			if ($(this).hasClass('yeshatid')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == y) {
					partie = m;
				}
				$('#yesh').width(yeshNum++);
				$('.show').not(this).removeClass('avoda yeshatid meretz licud').addClass(partie).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}

			for (var n = 0; n < partieArray.length; n++) {
				popChanger(partieArray[n]);
			}


			});





});
