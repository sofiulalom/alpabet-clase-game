function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.add('bg-orange-400')
}
function removeBackgraoundColorById(elementId) {
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.remove('bg-orange-400');
}

// this is  score and life element  function =>
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

// set score and life element function =>

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlpabete() {
    const alpatbetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alpabets = alpatbetsString.split('');
    // console.log(alpabets)

    const rendomNumber = Math.random() * 25;
    const index = Math.round(rendomNumber);
    const alpabet =alpabets[index]
    // console.log(index, alpabet)
    return alpabet;

}