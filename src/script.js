const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset-btn');

// Load skor dari LocalStorage
let score = parseInt(localStorage.getItem('totalPahala')) || 0;
scoreDisplay.innerText = score;

// Senarai Item Ibadah
const daftarPahala = [
    { nama: "Alhamdulillah", tipe: "zikir", poin: 10 },
    { nama: "Subhanallah", tipe: "zikir", poin: 10 },
    { nama: "Allahu Akbar", tipe: "zikir", poin: 10 },
    { nama: "Astaghfirullah", tipe: "zikir", poin: 10 },
    { nama: "Solat Fardhu", tipe: "solat", poin: 100 },
    { nama: "Solat Sunat", tipe: "solat", poin: 50 },
    { nama: "Solat Berjamaah", tipe: "solat", poin: 120 },
    { nama: "Baca Al-Quran", tipe: "rare", poin: 200 },
    { nama: "Puasa Sunnah", tipe: "rare", poin: 300 },
    { nama: "Zakat & Sedekah", tipe: "rare", poin: 400 },
      // system item
    { nama: "islam", tipe: "agama", poin: 99221 },
    { nama: "Allah", tipe: "agama", poin: 10000000 },
      // New system
    { nama: "Allah swt", tipe: "tuhan", poin: 34500000 },
];

function spawnItem() {
    const data = daftarPahala[Math.floor(Math.random() * daftarPahala.length)];
    
    const item = document.createElement('div');
    item.className = `item ${data.tipe}`;
    item.innerHTML = `<span>${data.nama}</span>`;

    // Posisi rawak
    const maxX = gameArea.clientWidth - 150;
    const maxY = gameArea.clientHeight - 60;
    item.style.left = Math.random() * maxX + "px";
    item.style.top = Math.random() * maxY + "px";

    // Klik untuk dapat pahala
    item.onclick = () => {
        score += data.poin;
        scoreDisplay.innerText = score;
        localStorage.setItem('totalPahala', score);
        
        // Kesan visual ringkas semasa klik
        item.style.transform = "scale(1.5)";
        item.style.opacity = "0";
        setTimeout(() => item.remove(), 100);
    };

    gameArea.appendChild(item);

    // Item hilang sendiri jika tidak diklik dalam 2.5 saat
    setTimeout(() => {
        if (item.parentElement) item.remove();
    }, 5900);
}

setInterval(spawnItem, 2000);