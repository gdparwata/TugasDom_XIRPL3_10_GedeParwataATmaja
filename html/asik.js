const button1 = document.getElementById("btn");
const tabel1 = document.getElementById("tabel1");
const igpar = document.getElementById("igpar");
const gd = document.getElementById("gd");

const button2 = document.getElementById("btn2");
const tabel2 = document.getElementById("tabel2");
const igpra = document.getElementById("igpra");
const gp = document.getElementById("gp");

const button3 = document.getElementById("btn3");
const tabel3 = document.getElementById("tabel3");
const igsur = document.getElementById("igsur");
const gs = document.getElementById("gs");


button1.addEventListener("click", () => {
    if(tabel1.classList.contains('hidden')){
        tabel1.classList.toggle('hidden');
    }else {
        tabel1.classList.add('hidden');
    }

});

button2.addEventListener("click", () => {
    if(tabel2.classList.contains('hidden')){
        tabel2.classList.toggle('hidden');
    }else {
        tabel2.classList.add('hidden');
    }
});

button3.addEventListener("click", () => {
    if(tabel3.classList.contains('hidden')){
        tabel3.classList.toggle('hidden');
    }else {
        tabel3.classList.add('hidden');
    }
});
