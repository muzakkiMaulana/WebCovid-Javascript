let list ={
    "artikel" : [
        {
            "title" : "Tingkat Kematian Akibat Virus Corona (COVID-19)",
            "img" : "assets/image/3661486.jpg",
            "deskripsi" : `<p>Virus Corona yang menyebabkan COVID-19 bisa menyerang siapa saja.
            Menurut data yang dirilis Gugus Tugas Percepatan Penanganan COVID-19 Republik Indonesia, jumlah kasus terkonfirmasi positif hingga 18 Agustus 2020 adalah 141.370 orang dengan jumlah kematian 6.207 orang.
            Tingkat kematian (case fatality rate) akibat COVID-19 adalah sekitar 4,4%.</p>
            <p>Jika dilihat dari persentase angka kematian yang di bagi menurut golongan usia, maka lansia memiliki persentase tingkat kematian yang lebih tinggi dibandingkan golongan usia lainnya.</p>
            <p>Sedangkan berdasarkan jenis kelamin, 58,7% penderita yang meninggal akibat COVID-19 adalah laki-laki dan 41,3% sisanya adalah perempuan.</p>`
        },
        {
            "title" : "Gejala Virus Corona (COVID-19)",
            "img" : "assets/image/1.jpeg",
            "deskripsi" : `<p>infeksi virus Corona atau COVID-19 bisa menyerupai gejala flu, yaitu demam, pilek, batuk kering, sakit tenggorokan, dan sakit kepala. Setelah itu, gejala dapat hilang dan sembuh atau malah memberat. Penderita dengan gejala yang berat bisa mengalami demam tinggi, batuk berdahak bahkan berdarah, sesak napas, dan nyeri dada. Gejala-gejala tersebut muncul ketika tubuh bereaksi melawan virus Corona.</p>
            </p>Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu:<p>
                <br>1.Demam (suhu tubuh di atas 38 derajat Celsius)
                <br>2.Batuk kering
                <br>3.Sesak napas 
                <p>Ada beberapa gejala lain yang juga bisa muncul pada infeksi virus Corona meskipun lebih jarang, yaitu:</p>
                    <br>1.Diare
                    <br>2.Sakit kepala
                    <br>3.Konjungtivitis
                    <br>4.Hilangnya kemampuan mengecap rasa atau mencium bau
                Gejala-gejala COVID-19 ini umumnya muncul dalam waktu 2 hari sampai 2 minggu setelah penderita terpapar virus Corona. Guna memastikan apakah gejala-gejala tersebut merupakan gejala dari virus Corona, diperlukan rapid test atau PCR.`
        },
        {
          "title" : "Penyebab Virus Corona (COVID-19)",
          "img" : "assets/image/4.jpg",
          "deskripsi" : `
          <p>Infeksi virus Corona atau COVID-19 disebabkan oleh coronavirus, yaitu kelompok virus yang menginfeksi sistem pernapasan. Pada sebagian besar kasus, coronavirus hanya menyebabkan infeksi pernapasan ringan sampai sedang, seperti flu. Akan tetapi, virus ini juga bisa menyebabkan infeksi pernapasan berat, seperti pneumonia, Middle-East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS).</p>
          <p>Ada dugaan bahwa virus Corona awalnya ditularkan dari hewan ke manusia. Namun, kemudian diketahui bahwa virus Corona juga menular dari manusia ke manusia.</p>
          Seseorang dapat tertular COVID-19 melalui berbagai cara, yaitu:
          <ul>
              <li>Tidak sengaja menghirup percikan ludah (droplet) yang keluar saat penderita COVID-19 batuk atau bersin</li>
              <li>Memegang mulut atau hidung tanpa mencuci tangan terlebih dulu setelah menyentuh benda yang terkena cipratan ludah penderita COVID-19</li>
              <li>Kontak jarak dekat dengan penderita COVID-19</li>
          </ul>
              <p>Virus Corona dapat menginfeksi siapa saja, tetapi efeknya akan lebih berbahaya atau bahkan fatal bila terjadi pada orang lanjut usia, ibu hamil, orang yang memiliki penyakit tertentu, perokok, atau orang yang daya tahan tubuhnya lemah, misalnya pada penderita kanker.</p>
              <p>Karena mudah menular, virus Corona juga berisiko tinggi menginfeksi para tenaga medis yang merawat pasien COVID-19. Oleh karena itu, para tenaga medis dan orang-orang yang memiliki kontak dengan pasien COVID-19 perlu menggunakan alat pelindung diri (APD).</p>
          `
        },
        {
          "title" : "Diagnosis Virus Corona (COVID-19)",
          "img" : "assets/image/5.jpg",
          "deskripsi" : `
          <p>Untuk menentukan apakah pasien terinfeksi virus Corona, dokter akan menanyakan gejala yang dialami pasien dan apakah pasien baru saja bepergian atau tinggal di daerah yang memiliki kasus infeksi virus Corona sebelum gejala muncul. Dokter juga akan menanyakan apakah pasien ada kontak dengan orang yang menderita atau diduga menderita COVID-19.</p>
                                Guna memastikan diagnosis COVID-19, dokter akan melakukan beberapa pemeriksaan berikut:
                            <ul>
                                <li>Rapid test untuk mendeteksi antibodi (IgM dan IgG) yang diproduksi oleh tubuh untuk melawan virus Corona</li>
                                <li>Swab test atau tes PCR (polymerase chain reaction) untuk mendeteksi virus Corona di dalam dahak</li>
                                <li>CT scan atau Rontgen dada untuk mendeteksi infiltrat atau cairan di paru-paru</li>
                            </ul>
                            <p> Hasil rapid test COVID-19 positif kemungkinan besar menunjukkan bahwa Anda memang sudah terinfeksi virus Corona, namun bisa juga berarti Anda terinfeksi kuman atau virus yang lain. Sebaliknya, hasil rapid test COVID-19 negatif belum tentu menandakan bahwa Anda mutlak terbebas dari virus Corona.</p>
          `
        }
    ]
}

for(const i of list.artikel){
    const option = document.querySelector(".flex-row");
    option.innerHTML += `
    <div class="card">
        <div class="card-img">
            <img src="${i.img}" alt="" srcset="">
        </div>
        <div class="card-content">
            <h5>${i.title}</h5>
            <button type="button" class="collapsible"> <i class="fa fa-arrow-circle-down" aria-hidden="true"> </i> </button>
              <div class="detail">
                ${i.deskripsi}
              </div>
        </div>
    </div>`;
}

const collElement = document.getElementsByClassName("collapsible");

for (let i = 0; i < collElement.length; i++) {
  collElement[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const contactElement = document.querySelector(".contact");
contactElement.addEventListener("click", function(){
  const content = document.querySelector(".detail-contact");
  if(content.style.display === "block"){
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
})
