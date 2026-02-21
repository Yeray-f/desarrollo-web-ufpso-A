const btn = document.getElementById("themeBtn")

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.nextContent = "Modo claro";
    } else {
        btn.nextContent = "Modo oscuro";
    }
});