require('dotenv').config()


const token = process.env.RECAPTCHA_SECRET_KEY

function onSubmit(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
        grecaptcha.execute('6LfwbwEiAAAAABupdD2xAU4GlQ-BHBzihGwl99v5', { action: 'submit' }).then(function (token) {
            // Add your logic to submit to your backend server here.
        });
    });
}


// function onSubmit(token) {
//     document.getElementById("company-data").submit();
// }

onSubmit(token)