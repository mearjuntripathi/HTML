document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});


let audio = new Audio('./assets/tune/welcome.mp3');
window.onload = () => {
    startConfetti();
    welcomeSong();
}

function welcomeSong() {
    audio.play()
        .then(() => {
            console.log('WelCome sir for play game');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

let container = document.querySelector('.welcome-container');
function startGame(btn) {
    stopConfetti();
    let div = document.createElement('div');
    div.classList.add('options');
    let btn1 = document.createElement('button');
    // let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    btn1.innerHTML = '<a href="twoPlayer.html">Two Player</a>';
    // btn2.innerText = 'Online Multiplayer';
    btn3.innerHTML = '<a href="computer.html">Play Against Computer</a>';
    div.appendChild(btn1);
    // div.appendChild(btn2);
    div.appendChild(btn3);
    container.removeChild(btn);
    container.appendChild(div);
}

let mute = document.getElementById('mute');
mute.addEventListener('click', () => {
    if (mute.value == 'play') {
        welcomeSong()
        mute.value = "pause";
        mute.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
    else {
        audio.pause();
        mute.value = "play";
        mute.innerHTML = '<i class="fa fa-volume-mute"></i>';
    }
})

// window.onbeforeunload = function () {
//     return "Do You want to exit";
// };