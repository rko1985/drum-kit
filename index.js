
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for(var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        console.log(this.innerHTML);
        this.style.color = "white";
    });

}

// audio = new Audio('/sounds/tom-1.mp3');
// audio.play();