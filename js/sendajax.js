
var resposta1 	= decodeURI(getUrlVars()["resposta1"]);
var resposta2 	= decodeURI(getUrlVars()["resposta2"]);
var resposta3 	= decodeURI(getUrlVars()["resposta3"]);
var resposta4 	= decodeURI(getUrlVars()["resposta4"]);
var resposta5 	= decodeURI(getUrlVars()["resposta5"]);
var resposta5a 	= decodeURI(getUrlVars()["resposta5a"]);
var resposta6 	= decodeURI(getUrlVars()["resposta6"]);
var resposta7 	= decodeURI(getUrlVars()["resposta7"]);
var resposta8 	= decodeURI(getUrlVars()["resposta8"]);
var resposta9 	= decodeURI(getUrlVars()["resposta9"]);
var resposta10 	= decodeURI(getUrlVars()["resposta10"]);
var resposta11 	= decodeURI(getUrlVars()["resposta11"]);
var resposta11a = decodeURI(getUrlVars()["resposta11a"]);
var resposta12 	= decodeURI(getUrlVars()["resposta12"]);
var resposta12a = decodeURI(getUrlVars()["resposta12a"]);
var resposta13 	= decodeURI(getUrlVars()["resposta13"]);
var resposta13a = decodeURI(getUrlVars()["resposta13a"]);
var resposta14 	= decodeURI(getUrlVars()["resposta14"]);
var resposta14a = decodeURI(getUrlVars()["resposta14a"]);
var resposta15 	= decodeURI(getUrlVars()["resposta15"]);
var resposta15a = decodeURI(getUrlVars()["resposta15a"]);
 

$("#enviarpesquisa").click(function () {

	var flagTela11 = "";

	if($('input[name=resposta15]').val().length === 0) {
		flagTela11 = "Por favor, informe quanto você pagaria no <strong>Irrigador Bucal</strong>.";
	}
	else{
		if(!($('input:radio[name=resposta15a]').is(':checked'))){
			flagTela11 = "<strong>Por favor, informe se pagaria o valor sugerido.</strong><br>";
		}
		else{
			flagTela11 = "";			
		}
	}

	if (flagTela11 != "") {
		Swal.fire({
			title: '<strong>OPS...</strong>',
			type: 'error',
			html: flagTela11,
			showCloseButton: true,
			focusConfirm: false,
			confirmButtonAriaLabel: 'OK',
		});
	}
	else{
		var resposta1 	= $("#resposta1").val();
		var resposta2 	= $("#resposta2").val();
		var resposta3 	= $("#resposta3").val();
		var resposta4 	= $('input[name=resposta4]:checked').val();
		var resposta5 	= $('input[name=resposta5]:checked').val();
		var resposta5a 	= $("#resposta5a").val();
		var resposta6 	= $('input[name=resposta6]:checked').val();
		var resposta7 	= $('input[name=resposta7]:checked').val();
		var resposta8 	= $('input[name=resposta8]:checked').val();
		var resposta9 	= $('input[name=resposta9]:checked').val();
		var resposta10 = [];
		$.each($("input[name='resposta10']:checked"), function(){            
			resposta10.push($(this).val());
		});
		var resposta11 	= $('input[name=resposta11]:checked').val();
		var resposta11a = $("#resposta11a").val();
		var resposta12 	= $("#resposta12").val();
		var resposta12a = $('input[name=resposta12a]:checked').val();
		var resposta13 	= $("#resposta13").val();
		var resposta13a = $('input[name=resposta13a]:checked').val();
		var resposta14 	= $("#resposta14").val();
		var resposta14a = $('input[name=resposta14a]:checked').val();
		var resposta15 	= $("#resposta15").val();
		var resposta15a = $('input[name=resposta15a]:checked').val();

		var dataString = "resposta1=" + resposta1 + "&resposta2=" + resposta2 + "&resposta3=" + resposta3 + "&resposta4=" + resposta4 + "&resposta5=" + resposta5 + "&resposta6=" + resposta6 + "&resposta7=" + resposta7 + "&resposta8=" + resposta8 + "&resposta9=" + resposta9 + "&resposta10=" + resposta10 + "&resposta11=" + resposta11 + "&resposta11a=" + resposta11a + "&resposta12=" + resposta12 + "&resposta12a=" + resposta12a + "&resposta13=" + resposta13 + "&resposta13a=" + resposta13a + "&resposta14=" + resposta14 + "&resposta14a=" + resposta14a + "&resposta15=" + resposta15 + "&resposta15a=" + resposta15a + "&update=";

		//console.log(dataString);

		$.ajax({
			type: "POST",
			url: "http://rtpublicity.com.br/sites/panasonic/beautycare/php/insert.php",
			data: dataString,
			crossDomain: true,
			cache: false,
			dataType: "json",
			success: function(text){
				console.log(text);
				if (text.status == "success"){

					$('.tela-1').hide();
					$('.tela-2').hide();
					$('.tela-3').hide();
					$('.tela-4').hide();
					$('.tela-5').hide();
					$('.tela-6').hide();
					$('.tela-7').hide();
					$('.tela-8').hide();
					$('.tela-9').hide();
					$('.tela-10').hide();
					$('.tela-final').fadeIn(1000);
					$('.tela-erro').hide();
					setTimeout(function(){
					   window.location.reload(1);
					}, 10000);

				} else if (text.status == "error") {

					$('.tela-1').hide();
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
					$('.tela-erro').fadeIn(1000);
					setTimeout(function(){
					   window.location.reload(1);
					}, 20000);
				}
			}
		});/**/
	}

});
