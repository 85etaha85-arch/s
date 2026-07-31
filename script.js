// NO runs away
function dodge() {
  noBtn.style.position = 'absolute';
  noBtn.style.left = rand() + 'px';
  yesScale += 0.07;
}

noBtn.on('enter', dodge);

yesBtn.onclick = () => {
    title.textContent = 'biliyodum kabul ediceğiniii şimdiden heyecanlandımm🥳🥳';
    // Eklemen gereken satır:
    document.querySelector('.subtitle').textContent = '(kesinlikle zorla evete basmadın😜😜)';
    rainHearts();
};