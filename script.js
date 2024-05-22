let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

// let d = new Date()

setInterval(() => {
    let d = new Date()
    hrs.innerHTML=(d.getHours()<0?"0":"")+d.getHours();
    min.innerHTML=(d.getMinutes()<0?"0":"")+d.getMinutes();
    sec.innerHTML=(d.getSeconds()<0?"0":"")+d.getSeconds();
}, 1000);
