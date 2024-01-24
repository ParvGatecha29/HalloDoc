const btn1 = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

btn1.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
});

var myModal = new bootstrap.Modal(document.getElementById('modal'));
window.onload = function () {
    if (sessionStorage.getItem('#modal') !== 'true') {
        myModal.show();
        sessionStorage.setItem('#modal', 'true');
    }
}

function upload(file){
    var name = file.files[0].name;
    var span = document.getElementById("upload");
    span.innerHTML = name;
} 