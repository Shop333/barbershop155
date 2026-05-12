// Theme Toggle (Dark/Light Mode)
function toggleMode() {
  document.body.classList.toggle("light");
}

// Music Toggle dengan Error Handling (Mencegah error jika audio belum terload)
const music = document.getElementById("bgMusic");
function toggleMusic() {
  if (music) {
    if (music.paused) {
      music.play().catch(error => console.log("Autoplay dicegah oleh browser. Klik lagi!"));
    } else {
      music.pause();
    }
  }
}

// Intersection Observer for Scroll Animation
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// Testimonial Auto Slider (Smooth Transition)
let index = 0;
const slides = document.getElementById("slides");
const totalTesti = document.querySelectorAll(".testi").length;

if (slides && totalTesti > 0) {
  setInterval(() => {
    index = (index + 1) % totalTesti;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}

// Validasi Tanggal (Mencegah booking tanggal yang sudah lewat)
const inputTanggal = document.getElementById("tanggal");
if (inputTanggal) {
  const today = new Date().toISOString().split('T')[0];
  inputTanggal.setAttribute('min', today);
}

// WhatsApp Booking Integration
function sendWA() {
  const nama = document.getElementById("nama").value.trim();
  const layanan = document.getElementById("layanan").value;
  const dp = document.getElementById("dp").value;
  const tanggal = document.getElementById("tanggal").value;
  
  if(!nama || !tanggal) {
    alert("Mohon lengkapi Nama dan Pilih Tanggal booking!");
    return;
  }

  // Masukkan nomor WhatsApp Barbershop di sini (Gunakan kode negara 62)
  const phone = "628xxxxxxxxxx"; 
  
  // Format pesan yang lebih rapi
  const text = `*KONFIRMASI BOOKING BLACKCROWN*%0A` +
               `------------------------------------%0A` +
               `*Nama* : ${nama}%0A` +
               `*Layanan* : ${layanan}%0A` +
               `*Tanggal* : ${tanggal}%0A` +
               `*Status* : ${dp}%0A` +
               `------------------------------------%0A` +
               `Mohon segera dikonfirmasi ya, Admin. Terima kasih!`;
  
  const waURL = `https://wa.me/${phone}?text=${text}`;
  
  window.open(waURL, '_blank');
}
