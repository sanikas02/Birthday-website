// Get name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get('name') || "Dear";

// Set birthday message
document.getElementById('birthdayMsg').textContent = `Happy Birthday, ${name}! 🎉`;

// Set personalized paragraph
document.getElementById('paragraph').textContent =
    `Dear ${name}, wishing you all the happiness in the world. You deserve the best today and always. Enjoy your special day to the fullest!`;


//the second para
const secondPara = document.createElement('p');
secondPara.textContent = `May your birthday be filled with laughter, joy, and unforgettable moments. Here's to another year of amazing adventures and cherished memories. Happy Birthday once again, ${name}! 🎂🎈`;
document.querySelector('.content').appendChild(secondPara);


// Balloons
const balloonColors = ['#ff69b4', '#ffd700', '#87ceeb', '#cd9732ff', '#ff6347', '#a4508b', '#5f0a87','#8cd569','#990fff'];
const balloons = document.getElementById('balloons');
for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.animationDuration = `${4 + Math.random() * 4}s`;
    balloons.appendChild(balloon);
}

// Stars
const starColors = ['#ffd700', '#ffffff', '#87ceeb', '#ff69b4', '#a4508b','#87ffcd','#99bffc'];
const stars = document.getElementById('stars');
for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${4 + Math.random() * 4}s`;
    star.style.background = starColors[Math.floor(Math.random() * starColors.length)];
    stars.appendChild(star);
}

// Glitter
const glitter = document.getElementById('glitter');
for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'glitter';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${1 + Math.random()}s`;
    glitter.appendChild(sparkle);
}

// Optional: Play music on user interaction for mobile autoplay policy
// Add your song URL to the <audio> element in your HTML, for example:
// <audio id="music" src="your-song-url.mp3"></audio>

document.body.addEventListener('click', () => {
    const music = document.getElementById('music');
    if (music && music.paused) music.play();
});

// Add birthday cake image
const birthdayCard = document.createElement('div');
birthdayCard.className = 'birthday-card';

const cakeImg = document.createElement('img');
cakeImg.src = 'stories-ys8qztLjJyg-unsplash.jpg';
cakeImg.alt = 'Birthday Cake';
cakeImg.className = 'cake-img';

birthdayCard.appendChild(cakeImg);
document.querySelector('.content').insertBefore(birthdayCard, document.getElementById('birthdayMsg').parentNode);