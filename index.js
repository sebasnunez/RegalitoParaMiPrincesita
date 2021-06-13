var parte2=0;

function frases(){
    var frase = document.getElementById('frase');
    frase.setAttribute('visible','true');
    var boton3 = document.getElementById('boton3');
    boton3.setAttribute('visible', 'false');
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
    }
    ,50000);
    setTimeout(function(){
        var frase = document.getElementById('frase');
        frase.setAttribute('visible','false');
        parte2+=1;
        if(parte2==2){
            var boton1 = document.getElementById('boton1');
            boton1.setAttribute('visible','true');
        }
    }
    ,55000);
}

function siguiente(){
    if(parte2==2){
        window.location.href = './video.html';
    }
    else{
    }
}
function anterior(){
    window.location.href = './';
}
function nextSky(){
    var cielo = document.getElementById('cielo');
    var boton2 = document.getElementById('boton2');
    boton2.setAttribute('visible','false');
    cielo.setAttribute('src', '#c2');
    parte2+=1;
    if(parte2==2){
        var boton1 = document.getElementById('boton1');
        boton1.setAttribute('visible','true');
    }
}
function playvid(){
    var v1 = document.getElementById('v1');
    v1.play();
    var botonp = document.querySelector('#botonPlay');
    botonp.setAttribute('visible','false');
    botonp.setAttribute('onclick', 'nada()');
}
function nada(){
}
function enterVR(){
    ir(navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i){
        document.querySelector('a-scene').enterVR();
    }
}
enterVR();
