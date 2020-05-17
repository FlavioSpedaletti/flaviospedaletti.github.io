jQuery(document).ready(function($){

	// hide messages 
	$("#error, #sent-form-msg").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		$("#sent-form-msg").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == ""){
			$("#error").fadeIn().html("Digite seu nome.");
			$("input#name").focus();
			return false;
		}
		
		// email
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().html("Digite seu e-mail.");
			$("input#email").focus();
			return false;
		}
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			$("#error").fadeIn().html("Digite um e-mail v&aacute;lido.");
			$("input#email").focus();
			return false;
		}
		
		// web
		var web = $("input#web").val();
		/*if(web == ""){
			$("#error").fadeIn().html("Digite seu site.");
			$("input#web").focus();
			return false;
		}*/
		
		// comments
		var comments = $("#comments").val();
		if (comments.length<1) {
			$("#error").fadeIn().html("Achei que voc&ecirc; queria me escrever algo...");
			$("#comments").focus();
			return false;
		}
		
		// send mail php
		var sendMailUrl = 'mail.php';
		
		//to, from & subject
		var to = 'flavio.hfs@gmail.com';
		var from = $("#from").val();
		var subject = 'Contato - flaviospedaletti.com.br';
		
		// data string
		var dataString = 'name='+ name
						+ '&email=' + email        
						+ '&web=' + web
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;						         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#sent-form-msg").show();	
	 }
	
    return false;
});

