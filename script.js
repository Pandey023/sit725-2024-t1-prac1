function changeText(){
    let potentialText=['Monday','Tuesday','Wed','Thur','Fri']
    let randomNmber=getRandomNumber(0,potentialText.length-1)
    let textToChangeTo=potentialText[randomNmber];
    document.getElementById('h1').innerHTML=textToChangeTo;
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}