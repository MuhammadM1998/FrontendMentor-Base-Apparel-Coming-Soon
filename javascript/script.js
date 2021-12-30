'use strict';

const form = document.querySelector('.form');
const emailWrapper = document.querySelector('.email-wrapper');
const emailInput = document.querySelector('.email');
const warningIcon = document.querySelector('.email__warning-icon');
const warningMsg = document.querySelector('.email__warning-msg');
const sumbitBtn = document.querySelector('.submit');

const checkEmail = function (e) {
	e.preventDefault();
	emailInput.classList.remove('email--invalid');
	warningIcon.classList.remove('email__warning-icon--active');
	warningMsg.classList.remove('email__warning-msg--active');

	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const emailValue = emailInput.value;
	const test = emailValue.match(regex);
	if (!test) {
		emailInput.classList.add('email--invalid');
		warningIcon.classList.add('email__warning-icon--active');
		warningMsg.classList.add('email__warning-msg--active');
	}
};
form.addEventListener('submit', checkEmail);
emailInput.addEventListener('blur', checkEmail);
