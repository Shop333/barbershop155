// Theme Toggle (Dark/Light Mode)
function toggleMode() {
  document.body.classList.toggle("light");
}

// Music Toggle
const music = document.getElementById("bgMusic");
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
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

// Testimonial Auto Slider
let index = 0;
const slides = document.getElementById("slides");
if (slides) {
  setInterval(() => {
    index = (index + 1) % 3; // Sesuaikan angka 3 dengan jumlah testimoni
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}

// WhatsApp Booking Integration
function sendWA() {
  const nama = document.getElementById("nama").value;
  const layanan = document.getElementById("layanan").value;
  const dp = document.getElementById("dp").value;
  const tanggal = document.getElementById("tanggal").value;
  
  if(!nama || !tanggal) {
    alert("Harap isi nama dan tanggal booking!");
    return;
  }

  // Ganti nomor di bawah dengan nomor WhatsApp aktif toko Anda
  const phone = "628xxxxxxxxxx"; 
  const message = `Halo BlackCrown!%0A%0ASaya ingin booking jadwal:%0A*Nama*: ${nama}%0A*Layanan*: ${layanan}%0A*Tanggal*: ${tanggal}%0A*Status*: ${dp}%0A%0AMohon konfirmasinya, terima kasih.`;
  
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}
