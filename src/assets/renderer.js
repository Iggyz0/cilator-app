let closeBtn = document.getElementById('close-btn');
let minBtn = document.getElementById('min-btn');
let maxBtn = document.getElementById('max-btn');

closeBtn.addEventListener('click', () => {
    window.api.send("toMain", "closeApp");
});

minBtn.addEventListener('click', () => {
    window.api.send("toMain", "minimizeApp");
});

maxBtn.addEventListener('click', () => {
    window.api.send("toMain", "maximizeApp");
});