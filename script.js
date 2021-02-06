const holes = document.querySelectorAll('.board__hole');
let time = 1200;
let time2 = 500;
let score = 0;
let play = document.querySelector('.play');
const splat = document.getElementById('splat');
const laugh = document.getElementById('laugh');
const victory = document.getElementById('victory');

function generateMole() {
    let mole = Math.floor(Math.random() * holes.length);
    
    while (holes[mole].classList.toggle('board__mole')) {
         mole = Math.floor(Math.random() * holes.length);
    }
    holes[mole].classList.toggle('board__mole')
    laugh.pause();
    laugh.currentTime = 0;
    laugh.play();
    setTimeout(holes[mole].classList.toggle('board__mole'), time2);
  
    
    }



holes.forEach(element => {
    element.addEventListener('click', (event) => {
        whack(event);
    })
})



function whack(e) {
    if (e.target.classList.contains('board__mole')) {
        const scoreBoard = document.querySelector('h1');
        e.target.classList.toggle('board__mole');
        time /= 10;
        time2 /= 2;
        score++
        scoreBoard.textContent = `Score: ${score}`;
        splat.pause();
        splat.currentTime = 0;
        splat.play();
        if (score === 40) {
            victory.play();
            alert('You WIN!!!!')
            clearInterval(interval)
            holes.forEach(element => {
                element.classList.remove('board__mole')

                
            })

        }

                


    }
}


play.addEventListener('click', () => {

    const interval = setInterval(generateMole, time);
})



