// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}

	$("#useBilling").click(function(){
		var home = $("#home");
		if (this.checked){
			console.log("selected");
			$("#home").val($("#billing").val());
			$("#home").prop("disabled", true);
		}
		
		else{
			console.log("unselected");
			$("#home").val("");
			$("#home").prop("disabled", false);
		}

	})

	