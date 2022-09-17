function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
        grecaptcha.execute('6LfwbwEiAAAAABupdD2xAU4GlQ-BHBzihGwl99v5', { action: 'submit' }).then(function (token) {
            console.log(token)
            // Add your logic to submit to your backend server here.
        });
    });
}