//warning for clicking new game
function warning() {
    var answer = confirm("If you click ok, you will loose your progress in this current game.");
    if (answer) window.location = "index.html";
    localStorage.clear();
}
