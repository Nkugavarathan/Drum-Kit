let numberOfDrumButtons = document.querySelectorAll('.drum').length;

// click the button 
for(let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
       
        let buttonInner = this.innerHTML;

        makeSound(buttonInner);
        buttonAnimation(buttonInner);

    });

    //keypress
    document.addEventListener('keypress', function(event){
       makeSound(event.key); 
       buttonAnimation(event.key);
    });
}

function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.' + currentKey);

    if (activeButton) {
        activeButton.classList.add('pressed');

        setTimeout(function(){
            activeButton.classList.remove('pressed');
        }, 100); // 100ms delay before removing the class
    }
}

