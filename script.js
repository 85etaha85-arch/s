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

// Kalpler: Bayağı yavaş (20 saniye) ve bol miktarda
function rainHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.fontSize = (Math.random() * 22 + 12) + 'px';
        heart.style.zIndex = '1';
        heart.style.transition = 'top 20s linear, opacity 20s linear'; // 20 saniye slow-motion
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = window.innerHeight + '30px';
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 20000);
    }, 200); // Bol bol kalp üretimi
}

yesBtn.onclick = () => {
    title.textContent = 'Biliyodum kabul edeginiiii🥰😘';
    
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // EVET'e basınca kesin çalışan garanti mutlu kedi GIF'i
    gifImage.src = 'https://media4.giphy.com/media/ICOgUNjpvO0PC/giphy.gif';

    document.querySelector('.buttons').style.display = 'none';
    rainHearts();
};