//assign Icons to variables
const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const hat = document.getElementById("hat");

//Initialize hat location
hat.style.position = 'absolute';
hat.style.top = '50%';
hat.style.left = '50%';
let coordHat = [50, 50]

//Initialize sad face location
let startX = Math.floor(Math.random()*75);
let startY = Math.floor(Math.random()*75);
let coordSad = [startX, startY];
sad.style.position = 'absolute';
sad.style.top = startY.toString()+'%';
sad.style.left = startX.toString()+'%';
sad.style.visibility = 'visible';

//Initialize happy face
happy.style.visibility = 'hidden';
happy.style.position = 'absolute';

function checkHatOn() {
    hatHeightAdjustment = coordHat[1] + 7;
    console.log('Checking if the hat is on', ((coordHat[0] === coordSad[0]) ? (coordSad[1] === hatHeightAdjustment) : false));
    return ((coordHat[0] === coordSad[0]) ? (coordSad[1] === hatHeightAdjustment) : false)
}

function moveHat(event) {
    // If arrow keys are pressed move the hat in the arrow direction by 1%
    switch (event.which) {
        case 38://up
            coordHat[1] -= 1;
            hat.style.top = (coordHat[1]) + '%';
            break;

        case 40://down
            coordHat[1] += 1;
            hat.style.top = (coordHat[1]) + '%';
            checkHatOn();
            break;

        case 37://left
            coordHat[0] -= 1;
            hat.style.left = (coordHat[0]) + '%';
            checkHatOn();
            break;

        case 39://right
            coordHat[0] += 1;
            hat.style.left = (coordHat[0]) + '%';
            checkHatOn();
            break;
    
        default:
            break;
    }

    //Check if the hat is on
    if(checkHatOn()) {
        happy.style.left = (coordSad[0] + '%');
        happy.style.top = (coordSad[1] + '%');
        happy.style.visibility='visible';
        sad.style.visibility='hidden';
    }
    else {
        happy.style.visibility='hidden';
        sad.style.visibility='visible';
    }

}

document.addEventListener('keydown',moveHat);
