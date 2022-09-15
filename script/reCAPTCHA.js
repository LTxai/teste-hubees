if (typeof grecaptcha === 'undefined') {
    grecaptcha = {};
}
grecaptcha.ready = function (cb) {
    if (typeof grecaptcha === 'undefined') {
        const c = '___grecaptcha_cfg';
        window[c] = window[c] || {};
        (window[c]['fns'] = window[c]['fns'] || []).push(cb);
    } else {
        cb();
    }
}

grecaptcha.ready(function () {
    grecaptcha.render("container", {
        sitekey: RECAPTCHA_SITE_KEY
    });
});

function onSubmit(token) {
    token = RECAPTCHA_SECRET_KEY
    document.getElementById("company-data").submit();
}