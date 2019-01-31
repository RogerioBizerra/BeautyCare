var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};
$('.resposta1').on('change', function() {
	var nomeCliente = $("#resposta1").val();

	if(nomeCliente != ""){
		$('.nomeCliente').text(nomeCliente);
	}
});

$('.resposta3').mask(SPMaskBehavior, spOptions);

$('.resposta12').mask('000.000.000.000.000,00', {reverse: true});
$('.resposta13').mask('000.000.000.000.000,00', {reverse: true});
$('.resposta14').mask('000.000.000.000.000,00', {reverse: true});
$('.resposta15').mask('000.000.000.000.000,00', {reverse: true});

$('.resposta11').on('change', function() {
	var resposta11 = $('input:radio[name=resposta11]:checked').val();
	if (resposta11 == "Outros") {
		$('.pergunta11').slideDown();
		$( ".resposta11a" ).focus();
	}
	else{
		$('.pergunta11').slideUp();		
	}
});/**/

$('.pergunta12').click(function () {
	$('.pergunta12a').slideDown();
});

$('.pergunta13').click(function () {
	$('.pergunta13a').slideDown();
});

$('.pergunta14').click(function () {
	$('.pergunta14a').slideDown();
});

$('.pergunta15').click(function () {
	$('.pergunta15a').slideDown();
});