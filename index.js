var parte2=false;

function frases(){
    var frase = document.getElementById('frase');
    frase.setAttribute('visible','true');
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m2');
    }
    ,5000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m3');
    }
    ,10000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m4');
    }
    ,15000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m5');
    }
    ,20000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m6');
    }
    ,25000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m7');
    }
    ,30000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m8');
    }
    ,35000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m9');
    }
    ,40000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m10');
    }
    ,45000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('src','#m11');
        parte2=true;
    }
    ,50000);
}

function siguiente(){
    if(parte2){
        window.location.href = './video.html';
    }
    else{
        window.alert("Primero termina esta parte");
    }
}
function anterior(){
    window.location.href = './';
}