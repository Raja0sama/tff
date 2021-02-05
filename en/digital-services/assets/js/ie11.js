function isIE() {
    // IE 10 and IE 11
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

let showBrowserAlert = (function () {
    console.log("IN HERE")
    if (document.querySelector('.unsupported-browser')) {
        let d = document.getElementsByClassName('unsupported-browser');

        is_IE11 = isIE();
console.log(is_IE11)
        if (is_IE11) {
            d[0].innerHTML = '<b>Unsupported Browser!</b> This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.';
            d[0].style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', showBrowserAlert);