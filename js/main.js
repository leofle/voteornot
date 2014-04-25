$(document).ready(function(){

var l = 'licud';
var y = 'yeshatid';
var m = 'meretz';
var a = 'avoda';
var partie;
var not = $('img').not(this).removeClass;

num = licudNum = avodaNum = meretzNum = yeshNum = partieActiveNum = '95';

random = Math.ceil(Math.random() * 20);
var i = random;

function popChanger(param1) {
	if ($('span#'+param1).width() == 100) {
		$('.popup').css('display','inline-block');
		$('.pop_holder, span#'+param1+'_pop').css('display','block');
		if(param1=='licud'){
			$('#check').css('top','-113px');
		}
		if(param1=='meretz'){
			$('#check').css('top','-24px');
		}
		if(param1=='yesh'){
			$('#check').css('top','-54px');
		}
		if(param1=='avoda'){
			$('#check').css('top','-84px');
		}
		$('#check').css('left','118px');
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
			numArray[i].src = "img/licud/"+i+".jpg";
			numArray[i].src = "img/avoda/"+i+".jpg";
			numArray[i].src = "img/meretz/"+i+".jpg";
			numArray[i].src = "img/yeshatid/"+i+".jpg";
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

			if (partieNum == 1) {
				partie = a;
			}
			if (partieNum == 2) {
				partie = m;
			}
			if (partieNum == 3) {
				partie = l;
			}
			if (partieNum == 4) {
				partie = y;
			}
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

			popChanger('licud');popChanger('meretz');popChanger('avoda');popChanger('yesh');


			});





});
