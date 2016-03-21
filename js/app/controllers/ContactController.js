function ContactController() {
	this.name = 'Mendel';
	this.email = 'mendel@email.com';
	this.phone = 123;
	var vm = this;
	this.changeName = function() {
		vm.name = "person";
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController);