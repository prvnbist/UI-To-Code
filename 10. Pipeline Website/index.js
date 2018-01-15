$(window).on('load', () => {
	//Image Slideshow
	const link = 'https://goo.gl/',
		img1 = link + 'WQXx48',
		img2 = link + 'c5SBer',
		img3 = link + 'pKDwKV',
		img4 = link + 'dAtpvz',
		img = [img1, img2, img3, img4];
	var i = 2;
	setInterval(() => {
		$('#slideImg').fadeOut(800, () => {
			$('#slideImg').attr('src', img[i]);
			i++;
			if (i == 4)
				i = 0;
		}).fadeIn(800);
	}, 5000);
});