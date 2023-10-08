const animatedElement = document.querySelector('.dynamic-text li');
const messageEl = document.getElementById("message");

let i = 1;
const messages = [
    "a Student",
    "a Gamer",
    "an aspiring Web Developer",
    "an aspiring Game Developer"
]
animatedElement.addEventListener('animationiteration', () => {
    // console.log('Animation iteration completed');
    
    if(i != messages.length){
        
        messageEl.innerHTML = messages[i];
        i++;
        
        
    }else if(i == messages.length){
        i=0;
        messageEl.innerHTML = messages[i];
        
    }else if(messageEl.innerHTML == undefined){
        i=0;
        messageEl.innerHTML = messages[i];
    }
});