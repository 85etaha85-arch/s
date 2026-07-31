const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.querySelector('.title');

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
    title.textContent = 'Yippee! i love you';
    
    // İstediğin eklenti: Yippee yazısının altında küçük parantezli yazı
    let subNote = document.createElement('div');
    subNote.className = 'subtitle-note';
    subNote.textContent = '(kesinlikle zorla evete basmadın😜😜)';
    title.after(subNote);

    // Butonları gizle
    document.querySelector('.buttons').style.display = 'none';
    
    // rainHearts(); fonksiyonu varsa buraya eklenebilir
};