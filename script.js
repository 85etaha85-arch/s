const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');
const canvas = document.getElementById('cat');
const ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 150;

// Kedi / Karakter Çizimi ve Animasyonu için Görsel/Çizim Alanı
function drawCat(expression) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Kedi Kafa Arka Planı (Siyah Kedi Şekli)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(100, 75, 45, 0, Math.PI * 2);
    ctx.fill();

    // Kulaklar
    ctx.beginPath();
    ctx.moveTo(65, 50);
    ctx.lineTo(50, 20);
    ctx.lineTo(85, 45);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(135, 50);
    ctx.lineTo(150, 20);
    ctx.lineTo(115, 45);
    ctx.fill();

    // Yüz İfadesi (Normal veya Mutlu)
    if (expression === 'happy') {
        // Kalp Gözler
        ctx.fillStyle = '#ff4d4d';
        ctx.font = '20px Arial';
        ctx.fillText('❤️', 80, 70);
        ctx.fillText('❤️', 110, 70);
    } else {
        // Normal Gözler
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(85, 70, 6, 0, Math.PI * 2);
        ctx.arc(115, 70, 6, 0, Math.PI * 2);
        ctx.fill();
    }

    // Ağız
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(100, 85, 10, 0, Math.PI);
    ctx.stroke();
}

// İlk açılışta normal kedi
drawCat('normal');

function dodge() {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 100 - 50;
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', dodge);
noBtn.addEventListener('click', dodge);

// Kalp Yağmuru Efekti
function rainHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-20px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.zIndex = '1000';
        heart.style.transition = 'top 3s linear, opacity 3s linear';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = window.innerHeight + '20px';
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 200);
}

yesBtn.onclick = () => {
    title.textContent = 'Biliyodum kabul edeginiiii🥰😘';
    
    // İstediğin eklenti: Yippee yazısının altında küçük parantezli yazı
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // Mutlu kedi yüzü
    drawCat('happy');

    // Butonları gizle
    document.querySelector('.buttons').style.display = 'none';
    
    // Kalp yağmurunu başlat
    rainHearts();
};