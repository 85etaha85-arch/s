const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');
const gifImage = document.getElementById('gif');

// NO butonunun her yere (ekranın rastgele noktalarına) kaçması için güncellenen fonksiyon
function dodge() {
    const windowWidth = window.innerWidth - 100;
    const windowHeight = window.innerHeight - 50;
    
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', dodge);
noBtn.addEventListener('click', dodge);

// Kalp yağmuru: Daha yavaş (6 saniyede düşüyor) ve daha seyrek (700 milisaniyede bir)
function rainHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-20px';
        heart.style.fontSize = (Math.random() * 15 + 12) + 'px';
        heart.style.zIndex = '1';
        heart.style.transition = 'top 6s linear, opacity 6s linear'; // Süre uzatıldı (Daha yavaş)
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = window.innerHeight + '20px';
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 700); // Aralık açıldı (Daha az sayıda kalp)
}

yesBtn.onclick = () => {
    title.textContent = 'Biliyodum kabul edeginiiii🥰😘';
    
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // EVET'e basınca çıkan o komik adam yerine tatlı, sevinen bir kedi GIF'i
    gifImage.src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif';

    document.querySelector('.buttons').style.display = 'none';
    rainHearts();
};