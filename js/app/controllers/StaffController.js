function StaffController() {
	this.name = 'Mendel';
	this.email = 'mendel@email.com';
	this.phone = 123;
}

angular
	.module('app')
	.controller('StaffController', StaffController);