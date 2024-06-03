document.getElementById('increase-btn').addEventListener('click', function() {
    changeFontSize(10);
});

document.getElementById('decrease-btn').addEventListener('click', function() {
    changeFontSize(-10);
});

function changeFontSize(sizeDifference) {
    var currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    var newSize = currentSize + sizeDifference;
    document.body.style.fontSize = newSize + 'px';
}