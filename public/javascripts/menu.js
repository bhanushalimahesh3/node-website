$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	var test1 = about;
	console.log(typeof element);
	console.log(typeof test1);
	$('#'+element).addClass('active');
});