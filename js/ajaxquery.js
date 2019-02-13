var status = 1;
var dataString = "status=" + status;
$.ajax({
	type: "POST",
	url: "http://rtpublicity.com.br/sites/panasonic/beautycare/php/select.php",
	data: dataString,
	crossDomain: true,
	cache: false,
	dataType: "json",
	success: function(text){
		if (text.status > 0){
			$('.status').text(text.status);
		} else{
			$('.status').text("0");
		}
	}
});/**/