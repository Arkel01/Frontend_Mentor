let btn = document.getElementsByClassName('buy-button')[0];
btn.addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = '#1c4434';
    event.target.style.cursor = "pointer";
}, false);
btn.addEventListener("mouseleave", function (event) {
    event.target.style.backgroundColor = '#3c8067';
}, false);