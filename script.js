const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');
const gifImage = document.getElementById('gif');

function dodge() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', dodge);
noBtn.addEventListener('click', dodge);

// Kalpler: 30 saniye slow-motion akış
function rainHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.fontSize = (Math.random() * 22 + 12) + 'px';
        heart.style.zIndex = '1';
        heart.style.transition = 'top 30s linear, opacity 30s linear';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = window.innerHeight + '30px';
            heart.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 30000);
    }, 250);
}

yesBtn.onclick = () => {
    title.textContent = 'Biliyodum kabul edeginiiii🥰😘';
    
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // EVET'e basınca açılan, kesinlikle hata vermeyen alternatif çalışan kedi GIF'i
    gifImage.src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif';

    document.querySelector('.buttons').style.display = 'none';
    rainHearts();
};