function handlekeyBoradButtonPress(event) {
    const playrePress = event.key;
    // console.log('player pressd',playrePress)
    if (playrePress === 'Escape') {
        gameOver()
    }
    
    const currentAlpabetElement = document.getElementById('current-alpabet');
    const currentAlpabet = currentAlpabetElement.innerText;
    const expectedAlpabet = currentAlpabet.toLowerCase();

    
    
    if (playrePress === expectedAlpabet) {
        console.log('you get a point');
        console.log('you are crectly press', expectedAlpabet)

        // =============== Option  2. ===============================
       const currentScore =  getTextElementValueById('current-score');
        const updateScore = currentScore + 1;

        setTextElementValueById('current-score', updateScore);

            
            
            
            
        //====================== Option 1 . =======================   
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // increase the score by 1 ;
        // const newScore = currentScore + 1;


        // // show the update score 
        // currentScoreElement.innerText = newScore;
        //===================================================
        // star a new round
        
        removeBackgraoundColorById(expectedAlpabet)
        continewGame()
        
    } else {
        console.log('you missed. you lost a life')
        const currentLife = getTextElementValueById('current-life');
        const updeteLife = currentLife - 1;

        setTextElementValueById('current-life', updeteLife)

        if (updeteLife === 0) {
           
            gameOver()
        }




        // ======================== Option 1. =========================
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;

    }

  
}

document.addEventListener('keyup', handlekeyBoradButtonPress);


function continewGame() {
    const alpabet = getARandomAlpabete();
    // console.log('your random alpabet', alpabet)
    const currentAlpabetElement = document.getElementById('current-alpabet');
    currentAlpabetElement.innerText = alpabet;
    setBackgroundColorById(alpabet);

}


function Play() {
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continewGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score')
   
          
    const lastScore = getTextElementValueById('current-score');
  
    setTextElementValueById('last-score', lastScore);

    const currentAlpabbet = getElementTextById('current-alpabet');
    
    removeBackgraoundColorById(currentAlpabbet)
}