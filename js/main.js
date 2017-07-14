/* Holiii acá va tu código también */
$(document).ready(function(){
	//Primer html
	$(".errorTxt2").hide();
	$(".errorTxt").hide();
	$("#iniciar-sesion").click(function(e) {
		var user = $("#email").val();
		console.log(user);
		var contraseña = $("#password").val();
		console.log(contraseña);
		//Validación email
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		if(user.length = 0 || validateEmail(user) == false){
			$(".errorTxt").show();
		}
		if(contraseña.length = 0 || contraseña.length < 5){
			$(".errorTxt2").show();
		}else{
			e.preventDefault();
			location.href = "opciones.html";
		}
	});
	//segundo html
	/*$(".slide").hide();
	$(".button-collapse").click(function(){
		$(".slide").toggle();
	});*/
});