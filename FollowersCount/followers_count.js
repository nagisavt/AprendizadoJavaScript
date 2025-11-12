let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue(){
    if (count === 10){
        alert("Seu post do insta ganhou 10 seguidores! boa!");
    } else if (count === 20) {
        alert("Seu post no insta ganhou 20 seguidores! parabens!");
    }
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}