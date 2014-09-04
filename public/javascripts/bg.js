$(window).load(function() {
	//Randomize image
	var bg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
	$('#bg').css({'background-image': 'url(../images/' + bg[Math.floor(Math.random() * bg.length)] + ')'});
	
	//Hack to load navbar and bg at once
	$('#bg').fadeIn(730);
	
	//Descriptions for bg
	var bg_id = $('#bg').css('background-image');
	bg_id = /(.*)\/([1-8]).jpg/.exec(bg_id);
	bg_id = bg_id ? bg_id[2] : "";
	
	if (bg_id == '1') {
		$('#desc').prepend('Sentinel Dome, Yosemite National Park - ');
	} else if (bg_id == '2') {
		$('#desc').prepend('Deep Cove, North Vancouver - ');
	} else if (bg_id == '3') {
		$('#desc').prepend('Whistler Mountain Peak, Whistler - ');
	} else if (bg_id == '4') {
		$('#desc').prepend('Downtown Manhattan, Brooklyn - ');
	} else if (bg_id == '5') {
		$('#desc').prepend('Philadelphia, Pennsylvania - ');
	} else if (bg_id == '6') {
		$('#desc').prepend('Montreal, Quebec - ');
	} else if (bg_id == '7') {
		$('#desc').prepend('Random stop on California State Route 1, California - ');
	} else if (bg_id == '8') {
		$('#desc').prepend('Yosemite Valley, Yosemite National Park - ');
	}
});