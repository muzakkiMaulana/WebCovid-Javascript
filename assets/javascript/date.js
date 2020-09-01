const arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const date = new Date();
const tanggal = date.getDate();
const bulan = date.getMonth();
const tahun = date.getFullYear();
const dateElement = document.querySelector(".topleft");
dateElement.innerHTML = tanggal+" "+arrbulan[bulan]+" "+tahun;