const square = document.querySelectorAll('.square');
const germ = document.querySelectorAll('.germ');
const timeLeft = document.querySelector ('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('germ')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('germ')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveGerm() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveGerm()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)