var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('.resposta3').mask(SPMaskBehavior, spOptions);

$('.resposta12').mask('000.000.000.000.000,00', {reverse: true});
$('.resposta13').mask('000.000.000.000.000,00', {reverse: true});
$('.resposta14').mask('000.000.000.000.000,00', {reverse: true});
$('.resposta15').mask('000.000.000.000.000,00', {reverse: true});

$('.resposta11').on('change', function() {
	var resposta11 = $('input[name=resposta11]:checked').val();
	if (resposta11 == "Outros") {
		$('.pergunta11').slideDown();
		$( ".resposta11a" ).focus();
	}
	else{
		$('.pergunta11').slideUp();		
	}
});
$('.resposta12').on('change', function() {
	$('.pergunta12').slideDown();
});
$('.resposta13').on('change', function() {
	$('.pergunta13').slideDown();
});
$('.resposta14').on('change', function() {
	$('.pergunta14').slideDown();
});
$('.resposta15').on('change', function() {
	$('.pergunta15').slideDown();
});