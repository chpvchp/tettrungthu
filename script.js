// Form gửi lời chúc
document.getElementById('wishForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;
    const thankyou = document.getElementById('thankyou');
    thankyou.innerHTML = `Cảm ơn <b>${name}</b>! Lời chúc của bạn đã được gửi: "${msg}" 🎉`;
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});

// Lantern floating random bottom position
const lanterns = document.querySelectorAll('.lantern');
lanterns.forEach(l => {
    l.style.bottom = Math.random()*100 + 'px';
});

// Tạo hiệu ứng sao nhấp nháy
const starfield = document.getElementById('starfield');
for(let i=0; i<100; i++){
    const star = document.createElement('div');
    star.className = 'star';
    star.style.position = 'absolute';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.top = Math.random()*100 + '%';
    star.style.left = Math.random()*100 + '%';
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${1+Math.random()*2}s infinite alternate`;
    starfield.appendChild(star);
}

// CSS animation cho sao
const style = document.createElement('style');
style.innerHTML = `
@keyframes twinkle {
    0% {opacity:0;}
    100% {opacity:1;}
}`;
document.head.appendChild(style);
