$(document).ready(function(){

var l = 'licud';
var y = 'yeshatid';
var m = 'meretz';
var a = 'avoda';


var not = $('img').not(this).removeClass;

var num = '95';
var likudNum = '95';
var avodaNum = '95';
var meretzNum = '95';
var yeshNum = '95';
var partieActiveNum = '95';

random = Math.ceil(Math.random() * 20);
var i = random;

// for (var i = 0; i < partieArray.length; i++) {
// var partieArray = ['licud','avoda','yeshatid','meretz'];
// }

function partieChanger(partieActive) {
	$('#'+partieActive).width(partieActiveNum++);
	$('.show').not(this).removeClass('avoda, yeshatid, meretz, licud');
	$('.show').not(this).addClass(partieActive);
	$('.show').not(this).attr('src', 'img/'+partieActive+'/'+(i++)+'.jpg');
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
			$('#shp').html(partieNum);
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
				partieChanger('licud');
				// $('#licud').width(likudNum++);
				// $('.show').not(this).removeClass('avoda');
				// $('.show').not(this).removeClass('yeshatid');
				// $('.show').not(this).removeClass('meretz');
				// $('.show').not(this).removeClass('licud');
				// $('.show').not(this).addClass(partie);
				// $('.show').not(this).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}
			if ($(this).hasClass('meretz')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == m) {
					partie = a;
				}
				$('#meretz').width(meretzNum++);
				$('.show').not(this).removeClass('avoda');
				$('.show').not(this).removeClass('yeshatid');
				$('.show').not(this).removeClass('meretz');
				$('.show').not(this).removeClass('licud');
				$('.show').not(this).addClass(partie);
				$('.show').not(this).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}
		if ($(this).hasClass('avoda')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == a) {
					partie = l;
				}
				$('#avoda').width(avodaNum++);
				$('.show').not(this).removeClass('avoda');
				$('.show').not(this).removeClass('yeshatid');
				$('.show').not(this).removeClass('meretz');
				$('.show').not(this).removeClass('licud');
				$('.show').not(this).addClass(partie);
				$('.show').not(this).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}
			if ($(this).hasClass('yeshatid')) {
				if (i >= 21) {
					i = random;
				}
				if (partie == y) {
					partie = m;
				}
				$('#yesh').width(yeshNum++);
				$('.show').not(this).removeClass('avoda');
				$('.show').not(this).removeClass('yeshatid');
				$('.show').not(this).removeClass('meretz');
				$('.show').not(this).removeClass('licud');
				$('.show').not(this).addClass(partie);
				$('.show').not(this).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
			}

			if ($('span#licud').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder, span#licud_pop').css('display','block');
				$('#check').css('top','-113px');
				$('#check').css('left','118px');
			}
			if ($('span#meretz').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder, span#meretz_pop').css('display','block');
				$('#check').css('top','-24px');
				$('#check').css('left','118px');
			}
			if ($('span#yesh').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder, span#yesh_pop').css('display','block');
				$('#check').css('top','-54px');
				$('#check').css('left','118px');
			}
			if ($('span#avoda').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder, span#avoda_pop').css('display','block');
				$('#check').css('top','-84px');
				$('#check').css('left','118px');
			}


			});





});
