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