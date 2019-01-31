
$('.tela-1').show();
$('.tela-2').hide();
$('.tela-3').hide();
$('.tela-4').hide();
$('.tela-5').hide();
$('.tela-6').hide();
$('.tela-7').hide();
$('.tela-8').hide();
$('.tela-9').hide();
$('.tela-10').hide();
$('.tela-final').hide();
$('.tela-erro').hide();

$('.ir-tela-2').click(function () {
	$('.tela-1').hide();
	$('.tela-2').fadeIn(1500);
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();

	$( ".resposta1" ).focus();
});
$('.ir-tela-3').click(function () {
	function validateEmail($email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( $email );
	}
	var flagTela3 = "";

	/*if($('input[name=resposta1]').val().length === 0) flagTela3 += "<strong>Nome</strong><br>";
	if($('input[name=resposta3]').val().length === 0) flagTela3 += "<strong>Telefone</strong><br>";

	if($('input[name=resposta2]').val().length === 0){
		flagTela3 += "<strong>E-mail</strong>";
	}else{
		if(!validateEmail($('input[name=resposta2]').val())) flagTela3 += "<strong>E-mail digitado não é válido</strong>";
	}/**/


	if (flagTela3 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').fadeIn(1000);
		$('.tela-4').hide();
		$('.tela-5').hide();
		$('.tela-6').hide();
		$('.tela-7').hide();
		$('.tela-8').hide();
		$('.tela-9').hide();
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html:
			'Por favor, revise as informações dos campos abaixo:' +
			'<br><br>' + flagTela3,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-4').click(function () {

	var flagTela4 = "";

	if(!($('input:radio[name=resposta4]').is(':checked'))) flagTela4 += "<strong>Sexo</strong><br>";
	if(!($('input:radio[name=resposta5]').is(':checked'))) flagTela4 += "<strong>Idade</strong><br>";

	if (flagTela4 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').fadeIn(1000);
		$('.tela-5').hide();
		$('.tela-6').hide();
		$('.tela-7').hide();
		$('.tela-8').hide();
		$('.tela-9').hide();
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html:
			'Por favor, revise as informações dos campos abaixo:' +
			'<br><br>' + flagTela4,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-5').click(function () {

	var flagTela5 = "";

	if(!($('input:radio[name=resposta6]').is(':checked'))) flagTela5 += "<strong>Escova de Dente</strong><br>";
	if(!($('input:radio[name=resposta7]').is(':checked'))) flagTela5 += "<strong>Aparador de Pelos do Nariz</strong><br>";
	if(!($('input:radio[name=resposta8]').is(':checked'))) flagTela5 += "<strong>Barbeador</strong><br>";
	if(!($('input:radio[name=resposta9]').is(':checked'))) flagTela5 += "<strong>Irrigador Bucal</strong><br>";

	if (flagTela5 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').hide();
		$('.tela-5').fadeIn(1000);
		$('.tela-6').hide();
		$('.tela-7').hide();
		$('.tela-8').hide();
		$('.tela-9').hide();
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html:
			'Por favor, informe a nota do(s) produto(s) abaixo: ' +
			'<br><br>' + flagTela5,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-6').click(function () {

	var flagTela6 = true;

	if(!($('input:checkbox[name=resposta10]').is(':checked'))) flagTela6 = false;

	if (flagTela6) {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').hide();
		$('.tela-5').hide();
		$('.tela-6').fadeIn(1000);
		$('.tela-7').hide();
		$('.tela-8').hide();
		$('.tela-9').hide();
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html:
			'Por favor, selecione pelo menos <strong>um</strong> dos produtos exibidos.',
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-7').click(function () {

	var flagTela7 = "";

	if(!($('input:radio[name=resposta11]').is(':checked'))){
		flagTela7 = "Por favor, informe o que te atraiu no produto.";
	}
	else{
		var resposta11 = $('input:radio[name=resposta11]:checked').val();
		if(resposta11 == "Outros"){
			if($('input[name=resposta11a]').val().length === 0) flagTela7 = "<strong>Por favor, informe quais outros motivos te atraiu no produto.</strong><br>";
		}
		else{
			flagTela7 = "";			
		}
		
	}

	if (flagTela7 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').hide();
		$('.tela-5').hide();
		$('.tela-6').hide();
		$('.tela-7').fadeIn(1000);
		$('.tela-8').hide();
		$('.tela-9').hide();
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
		$( ".resposta12" ).focus();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html: flagTela7,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-8').click(function () {

	var flagTela8 = "";
	
	if($('input[name=resposta12]').val().length === 0) {
		flagTela8 = "Por favor, informe quanto você pagaria na <strong>Escova de Dente</strong>.";
	}
	else{
		if(!($('input:radio[name=resposta12a]').is(':checked'))){
			flagTela8 = "<strong>Por favor, informe se pagaria o valor sugerido.</strong><br>";
		}
		else{
			flagTela8 = "";			
		}
	}

	if (flagTela8 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').hide();
		$('.tela-5').hide();
		$('.tela-6').hide();
		$('.tela-7').hide();
		$('.tela-8').fadeIn(1000);
		$('.tela-9').hide();
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
		$( ".resposta13" ).focus();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html: flagTela8,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-9').click(function () {


	var flagTela9 = "";
	
	if($('input[name=resposta13]').val().length === 0) {
		flagTela9 = "Por favor, informe quanto você pagaria no <strong>Aparador de Pelos do Nariz</strong>.";
	}
	else{
		if(!($('input:radio[name=resposta13a]').is(':checked'))){
			flagTela9 = "<strong>Por favor, informe se pagaria o valor sugerido.</strong><br>";
		}
		else{
			flagTela9 = "";			
		}
	}

	if (flagTela9 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').hide();
		$('.tela-5').hide();
		$('.tela-6').hide();
		$('.tela-7').hide();
		$('.tela-8').hide();
		$('.tela-9').fadeIn(1000);
		$('.tela-10').hide();
		$('.tela-final').hide();
		$('.tela-erro').hide();
		$( ".resposta14" ).focus();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html: flagTela9,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});
$('.ir-tela-10').click(function () {


	var flagTela10 = "";
	
	if($('input[name=resposta14]').val().length === 0) {
		flagTela10 = "Por favor, informe quanto você pagaria no <strong>Barbeador</strong>.";
	}
	else{
		if(!($('input:radio[name=resposta14a]').is(':checked'))){
			flagTela10 = "<strong>Por favor, informe se pagaria o valor sugerido.</strong><br>";
		}
		else{
			flagTela10 = "";			
		}
	}

	if (flagTela10 == "") {
		$('.tela-1').hide();
		$('.tela-2').hide();
		$('.tela-3').hide();
		$('.tela-4').hide();
		$('.tela-5').hide();
		$('.tela-6').hide();
		$('.tela-7').hide();
		$('.tela-8').hide();
		$('.tela-9').hide();
		$('.tela-10').fadeIn(1000);
		$('.tela-final').hide();
		$('.tela-erro').hide();
		$( ".resposta15" ).focus();
	}
	else{
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html: flagTela10,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
});


$('.voltar-tela-2').click(function () {
	$('.tela-1').hide();
	$('.tela-2').fadeIn(1000);
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
});
$('.voltar-tela-3').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').fadeIn(1000);
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
});
$('.voltar-tela-4').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').fadeIn(1000);
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
});
$('.voltar-tela-5').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').fadeIn(1000);
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
});
$('.voltar-tela-6').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').fadeIn(1000);
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
});
$('.voltar-tela-7').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').fadeIn(1000);
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
	$( ".resposta12" ).focus();
});
$('.voltar-tela-8').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').fadeIn(1000);
	$('.tela-9').hide();
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
	$( ".resposta13" ).focus();
});
$('.voltar-tela-9').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').fadeIn(1000);
	$('.tela-10').hide();
	$('.tela-final').hide();
	$('.tela-erro').hide();
	$( ".resposta14" ).focus();
});
$('.voltar-tela-10').click(function () {
	$('.tela-1').hide();
	$('.tela-2').hide();
	$('.tela-3').hide();
	$('.tela-4').hide();
	$('.tela-5').hide();
	$('.tela-6').hide();
	$('.tela-7').hide();
	$('.tela-8').hide();
	$('.tela-9').hide();
	$('.tela-10').fadeIn(1000);
	$('.tela-final').hide();
	$('.tela-erro').hide();
	$( ".resposta15" ).focus();
});



