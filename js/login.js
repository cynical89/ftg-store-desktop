$( document ).ready(function() {
	$("#submitBtn").on("click", function(e) {
		e.preventDefault();
		var username = $("#user").val();
		var password = $("#pass").val();
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "http://localhost:5000/api/login/local",
			data: {username: username, password: password},
		}).done(function(result) {
			if (result.error === true) {
				alert(result.message);
				return console.error(result.message);
			}
				localStorage.setItem("user", result);
				window.location = "../pages/store.html";
		}).fail(function(err) {
			// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
		});
	});
});
