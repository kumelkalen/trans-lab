/* Holiii acá va tu código también */
$(document).ready(function($){
	//Primer html
	$(".errorTxt2").hide();
	$(".errorTxt").hide();
	$("#iniciar-sesion").click(function(e) {
		var user = $("#email").val();
		console.log(user);
		var contraseña = $("#password").val();
		console.log(contraseña);
		//Guardar en localStorage
		localStorage.setItem(user,contraseña);
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
	//Tercer html
	$(".invalid").hide();
	$(".cont-saldo").hide();
	$("#saldo").click(function(){
		$(".borrar").empty();
		var numId = $("#bip-number").val();
		/*console.log(numId);*/
		if(numId.length != 8){
			$(".invalid").show();
			$(".cont-saldo").hide();
		}else{
			$(".invalid").hide();
			console.log(numId);
			$.getJSON('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+numId, function(resp) {
				/*$.each(resp, function(k, v) {
					console.log(k + ' : ' + v);
				}); 
				console.log(resp);*/
				var items = resp;
				console.log(items.saldoTarjeta);
				$(".cont-saldo").show();
				$(".borrar").append('<div class="col s6 offset-s3 grey darken-2 white-text cont-saldo center first-sal">SALDO ACTUAL</div>');
				$(".borrar").append('<div id="cont-saldo" class="col s6 offset-s3 amber white-text cont-saldo center"><p>'+items.saldoTarjeta+'</p></div>');
				
			});
		}
	});
	
});