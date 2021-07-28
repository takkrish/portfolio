// PLAIN JAVASCRIPT

const skills = document.querySelectorAll('article.skill');

skills.forEach((skill) => {
	const percetage = skill.querySelector('.percentage').innerHTML,
		progressBar = skill.querySelector('.progressBar');

	progressBar.style.width = percetage;
});

const menuIcon = document.querySelector('#menu');
const ul = document.querySelector('header nav ul');
const listItems = document.querySelectorAll('header nav ul li');

menuIcon.addEventListener('click', function () {
	this.classList.toggle('active');
	this.querySelectorAll('i').forEach((item) => {
		item.classList.toggle('show');
	});
	ul.classList.toggle('active');
});

listItems.forEach((listitem) => {
	listitem.addEventListener('click', function () {
		ul.classList.remove('active');
		menuIcon.classList.remove('active');
		menuIcon.querySelectorAll('i').forEach((item) => {
			item.classList.toggle('show');
		});
	});
});

// JQUERY

$(document).ready(function () {
	// SMOOTH SCROLL
	$('nav a').click(function (e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: $(this.hash).offset().top,
			},
			{
				duration: 800,
				easing: 'swing',
			}
		);
	});

	// SCROLL BASED TRANSITIONS

	$(window).scroll(function () {
		if (window.scrollY > 80) {
			$('nav').addClass('active');
		} else {
			$('nav').removeClass('active');
		}

		const scrollBarLocation = $(this).scrollTop();
		$('nav a').each(function () {
			const sectionOffset = $(this.hash).offset().top - 50;

			if (sectionOffset <= scrollBarLocation) {
				$('nav a').removeClass('active');
				$(this).addClass('active');
			}
		});
	});

	// EMAIL ME

	$('#MailMePersonally').on('click', function () {
		window.open('mailto:takrishtak2002@gmail.com');
	});

	// MESSAGE

	$('#form').on('submit', function (e) {
		e.preventDefault();
		const sendersName = $('input#name').val();
		const sendersEmail = $('input#email').val();
		const sendersMessage = $('textarea#message').val();
		const subject = 'From Your Portfolio';
		window.open(
			`mailto:takrishtak2002@gmail.com?subject=${subject}&body=Sender: ${sendersName} ,%0D%0AEmail: ${sendersEmail} ,%0D%0A${sendersMessage}`
		);
	});
});
