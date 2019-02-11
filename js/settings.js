$('.resposta1').on('change', function() {
	var nomeCliente = $("#resposta1").val();

	if(nomeCliente != ""){
		$('.nomeCliente').text(nomeCliente);
	}
});

$('.resposta3').inputmask({
		mask: ["(99) 9999-9999", "(99) 99999-9999"],
		keepStatic: true
	});

$('.resposta12').inputmask("decimal", {
	    groupSeparator: ',',
	    placeholder: '0.00',
	    numericInput: true,
	    autoGroup: true
    });
$('.resposta13').inputmask("decimal", {
	    groupSeparator: ',',
	    placeholder: '0.00',
	    numericInput: true,
	    autoGroup: true
    });
$('.resposta14').inputmask("decimal", {
	    groupSeparator: ',',
	    placeholder: '0.00',
	    numericInput: true,
	    autoGroup: true
    });
$('.resposta15').inputmask("decimal", {
	    groupSeparator: ',',
	    placeholder: '0.00',
	    numericInput: true,
	    autoGroup: true
    });

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