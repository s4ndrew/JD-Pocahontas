document.getElementById('celebrateBtn').addEventListener('click', function() {
    const confetti = document.getElementById('confetti');
    const message = document.getElementById('birthdayMessage');
    const wish = document.getElementById('birthdayWish');


    message.textContent = "¡Felicidades, Pocahontas! 🎉";
    wish.textContent = "Que este cumpleaños sea el comienzo de un año lleno de grandes logros y sueños cumplidos. ¡Disfruta tu día! 😙​";


    confetti.classList.remove('hidden');
    confetti.style.opacity = 1;

   
    setTimeout(() => {
        confetti.style.opacity = 0;
        setTimeout(() => {
            confetti.classList.add('hidden'); 
        }, 500);
    }, 3000);
});