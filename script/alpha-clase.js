
function continewGame() {
    const alpabet = getARandomAlpabete();
    console.log('your random alpabet', alpabet)
    const currentAlpabetElement = document.getElementById('current-alpabet');
    currentAlpabetElement.innerText = alpabet;
    setBackgroundColorById(alpabet)
}


function Play() {
    hideElementById('home-screen');
    showElementById('play-ground')
    continewGame()
}