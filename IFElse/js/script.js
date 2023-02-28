let button = document.getElementById('botao');
var click = true;

button.addEventListener("click", function () {
    if (click){
        document.body.style.background = '#35E6F3';
        click=false;
    
    }else{
    document.body.style.background = '#FFFFFF';
    click=true;
    }

});
