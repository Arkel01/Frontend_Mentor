document.getElementById('thank-you-card').style.display='none';
let current_selected_button = undefined;

let submit_button = document.getElementById('submit-button');
submit_button.addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'hsl(25, 97%, 53%)';
    event.target.style.cursor = "pointer";
}, false);
submit_button.addEventListener("mouseleave", function (event) {
    event.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    event.target.style.color = 'white';
}, false);
submit_button.addEventListener("click", function (event) {
    if(current_selected_button) {
        document.getElementById('choose-card').remove();
        document.getElementById('thank-you-card').style.display = 'flex';
        document.getElementById('choice').textContent = 'You selected ' + current_selected_button.textContent + ' out of 5';
    }
})

let rating_buttons = document.getElementsByClassName('rating');

for(btn of rating_buttons){
    btn.addEventListener("mouseenter", function (event) {
        if (current_selected_button != event.target) {
            event.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
            event.target.style.color = 'white';
        }
        event.target.style.cursor = "pointer";
    }, false);
    btn.addEventListener("mouseleave", function (event) {
        if(current_selected_button!=event.target) {
            event.target.style.backgroundColor = '#2a333c';
            event.target.style.color = '#77808e';
        }
    }, false);
    btn.addEventListener("click", function (event) {
        event.target.style.backgroundColor = '#7c8798';
        event.target.style.color = 'white';
        if(current_selected_button) {
            current_selected_button.style.backgroundColor = '#2a333c';
            current_selected_button.style.color = '#77808e';
        }
        current_selected_button = event.target;
    })
}
