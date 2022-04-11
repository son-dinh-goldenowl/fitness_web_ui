$(document).ready(function(){
	$(document).on('click', '.ti-menu', function() {
		$('.link-header').toggle('3000');
	});

	$(document).on('click', '.btn-trained', function() {
		$('.modal').show();
		$('body').addClass('modal-open');
	});

	$(document).on('click', '.ti-close', function() {
		$('.modal').hide();
		$('body').removeClass('modal-open');
	});

	let arrImg = ['../assets/images/welcome2', '../assets/images/welcome3', '../assets/images/welcome1'];
	let arrTitle = ['From the moment you walk through the door you know Gym base is a unique place',
									'2222 From the moment you walk through the door you know Gym base is a unique place',
									'3333 From the moment you walk through the door you know Gym base is a unique place'];
	let arrContent = ['If you run a fitness gym, this is one slogan that can bring customers in. No one likes having to drive miles out of their way to go to the gym\
										 	It is always easier to have a gym that is actually close to home. Your body hears everything that your mind says.',
										'2222 If you run a fitness gym, this is one slogan that can bring customers in. No one likes having to drive miles out of their way to go to the gym\
										 	It is always easier to have a gym that is actually close to home. Your body hears everything that your mind says.',
										'3333 If you run a fitness gym, this is one slogan that can bring customers in. No one likes having to drive miles out of their way to go to the gym\
										 	It is always easier to have a gym that is actually close to home. Your body hears everything that your mind says.'];
	let indexSlide = 0;
	setInterval(function () {
		changeContent('.pic-welcome', arrImg, 'image', indexSlide);
		changeContent('.title-subject', arrTitle, 'string', indexSlide);
		changeContent('.content-subject', arrContent, 'string', indexSlide);
		if (indexSlide == arrImg.length -1) {
			indexSlide = 0;
		}
		indexSlide++;
	}, 5000);

	let indexClient = 0;
	$(document).on('click', '.ti-angle-right, .ti-angle-left', function() {
		let itemName = $(this).attr('class');
		let arrNameClient = ['ahmed elsayed', 'Tim', 'Dinh Son']

		$('.icon-'+indexClient+'').removeClass('icon-slide');
		if (itemName === 'ti-angle-right') {
			$('#avatar-review, #reviews, #name-clients').addClass('animation-slide-right');
			window.setTimeout(function(){$('#avatar-review, #reviews, #name-clients').removeClass('animation-slide-right');}, 500);
			indexClient++;
			if (indexClient == arrImg.length) {
				indexClient = 0;
			}
		} else {
			$('#avatar-review, #reviews, #name-clients').addClass('animation-slide-left');
			window.setTimeout(function(){$('#avatar-review, #reviews, #name-clients').removeClass('animation-slide-left');}, 500);
			indexClient--;
			if (indexClient < 0) {
				indexClient = arrImg.length - 1;
			}
		}
		$('.icon-'+indexClient+'').addClass('icon-slide');
		changeContent('#avatar-review', arrImg, 'image', indexClient);
		changeContent('#reviews', arrContent, 'string', indexClient);
		changeContent('#name-clients', arrNameClient, 'string', indexClient);
	});

	function changeContent(name, arr, type, i) {
		if (type === 'image') {
			$(name).fadeIn('slow', function () {
				$(this).attr('src',arr[i]);
			});
		} else {
			$(name).fadeIn('slow', function () {
				$(this).text(arr[i]);
			});
		}
	}
});
