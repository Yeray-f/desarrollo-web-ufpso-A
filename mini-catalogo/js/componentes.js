document.addEventListener("DOMContentLoaded", function(){

fetch("componentes/header/header.html")
.then(res => res.text())
.then(data =>{
document.getElementById("header").innerHTML = data;
});

fetch("componentes/footer/footer.html")
.then(res => res.text())
.then(data =>{
document.getElementById("footer").innerHTML = data;
});

});