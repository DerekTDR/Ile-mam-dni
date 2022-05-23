function start() {
    var dzis = new Date();
    var data = document.getElementById("data").valueAsDate;
    document.getElementById("wynik").value = Math.floor((dzis.getTime() - data.getTime()) / 1000 / 60 / 60 / 24);
}