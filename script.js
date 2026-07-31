const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');
const gifImage = document.getElementById('gif');

// NO butonunun ilk açılışta üst üste binmesini önleyip rastgele kaçmasını sağlayan mantık
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

// Kalpler: Çok yavaş (12 saniye) ve bol miktarda (her 250 milisaniyede bir)
function rainHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.zIndex = '1';
        heart.style.transition = 'top 12s linear, opacity 12s linear'; // 12 saniyede yavaşça süzülür
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = window.innerHeight + '30px';
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 12000);
    }, 250); // Sık aralıklarla bolca kalp üretir
}

yesBtn.onclick = () => {
    title.textContent = 'Biliyodum kabul edeginiiii🥰😘';
    
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // EVET'e basınca kesin çalışan mutlu kedi GIF'i
    gifImage.src = 'https://i.ibb.co/3yk7v78/cat-happy.gif';
    // Yedek garanti link:
    // gifImage.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3pwa3B3M3pwa3B3M3pwa3B3M3pwa3B3M3pwa3B3M3pwa3B3JmJlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ICOgUNjpvO0PC/giphy.gif';

    document.querySelector('.buttons').style.display = 'none';
    rainHearts();
};