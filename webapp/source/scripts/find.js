function getVerification() {
	$.post("find.getVerificationCode.action", {
		email : $("#email").val()
	}, function(data) {
		data = eval(data);
		if (data.success) {
			window.location.href="affirmPassord.action";
		} else {
			alert(data.message);
		}
	});
}
