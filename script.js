const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');
const gifImage = document.getElementById('gif');

// (İsteğe bağlı) Orijinal videodaki kalp yağmuru fonksiyonu
function rainHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-20px';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
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
    }, 300);
}

function dodge() {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 100 - 50;
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', dodge);
noBtn.addEventListener('click', dodge);

yesBtn.onclick = () => {
    title.textContent = 'Biliyodum kabul edeginiiii🥰😘';
    
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // Evete basınca çıkacak hata vermeyen mutlu GIF
    gifImage.src = 'https://media.giphy.com/media/T1WqKkLY753dZghbu6/giphy.gif';

    document.querySelector('.buttons').style.display = 'none';
    rainHearts();
};