const LEFT_BUTTON = document.getElementById("left-button");
const RIGHT_BUTTON = document.getElementById("right-button");

LEFT_BUTTON.addEventListener("click", () => {
    triggerLeft();
})
RIGHT_BUTTON.addEventListener("click", () => {
    triggerRight();
})

function triggerLeft() {
    window.location.href = "../imperical/index.html"
}
function triggerRight() {
    window.location.href = "../creative/index.html"
}