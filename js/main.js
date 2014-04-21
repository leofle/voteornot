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


	$('#close').click(function(){
		$('.popup, .pop_holder, span#licud_pop, span#meretz_pop, span#yesh_pop, span#avoda_pop').css('display','none');
		$('.results').css('display','block');
		});



$('.show').click(function(e){
	e.preventDefault();

			random = Math.ceil(Math.random() * 20);
			var i = random;

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

				$('#licud').width(likudNum++);
				$('.show').not(this).removeClass('avoda');
				$('.show').not(this).removeClass('yeshatid');
				$('.show').not(this).removeClass('meretz');
				$('.show').not(this).removeClass('licud');
				$('.show').not(this).addClass(partie);
				$('.show').not(this).attr('src', 'img/'+partie+'/'+(i++)+'.jpg');
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
				$('.pop_holder').css('display','block');
				$('span#licud_pop').css('display','block');
				$('#check').css('top','-113px');
				$('#check').css('left','118px');
			}
			if ($('span#meretz').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder').css('display','block');
				$('span#meretz_pop').css('display','block');
				$('#check').css('top','-24px');
				$('#check').css('left','118px');
			}
			if ($('span#yesh').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder').css('display','block');
				$('span#yesh_pop').css('display','block');
				$('#check').css('top','-54px');
				$('#check').css('left','118px');
			}
			if ($('span#avoda').width() == 100) {
				$('.popup').css('display','inline-block');
				$('.pop_holder').css('display','block');
				$('span#avoda_pop').css('display','block');
				$('#check').css('top','-84px');
				$('#check').css('left','118px');
			}


			});





});
