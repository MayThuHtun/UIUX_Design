$(document).ready(function() {
	$('label[for=source]').change(function() {
		if(this.value == 'Zawgyi') {
			$('#source').css("font-family", "Zawgyi-One")
			element.log("Source is Zawgyi-One');
		}
		if(this.value == 'Unicode') {
			$('#source').css("font-family", "Pyidaungsu");
		}
		if(this.value == 'WinMyanmar'){
			$('#source').css("font-family", "Win-Innwa");
		}
	});

	$('label[for=source]').change(function(){
		if(this.value == 'Zawgyi') {
			$("#destination").css("font-family", "Zawgyi-One");
			element.log("Desination is Zawgyi-One");
		}
		else if (this.value == 'Unicode') {
			$("#destination").css("font-family", "Pyidaungsu");
		}
		if (this.value == 'WinMyanmar'){
			$("#destination").css("font-family"), "Win-Innwa");
		}
	});
});
I
