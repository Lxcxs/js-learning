let CurrenTime = new Date();
let hora = CurrenTime.getHours();

setInterval(() => {
    let currenTime = new Date();
    let hora = currenTime.getHours();
    let min = currenTime.getMinutes();
    let seg = currenTime.getSeconds();

    document.getElementById("hora").textContent = hora;
    document.getElementById("min").textContent = min < 10 ? "0" + min : min;
    document.getElementById("segundos").textContent = seg < 10 ? "0" + seg : seg;
}, 1000)