function Animer()
{
console.log("j'entre")
var cible; 
var jouer;
cible = document.querySelector('.calque1');
jouer = cible.animate([
{transform: 'translate(0)'},
{transform: 'translate(100px, 75px)'},
{transform: 'translate(210px, 200px)'}
], 1000);
jouer.addEventListener('finish', function(){
cible.style.transform = 'translate(210px, 200px)';

});
}
function Animer2(){
var cible2; 
var jouer2;
cible2 = document.querySelector('.calque2');
jouer2 = cible2.animate([
{transform: 'translate(0px)'},
{transform: 'translate(0px, 75px)'},
{transform: 'translate(0px, 200px)'}
], 1000);
jouer2.addEventListener('finish', function(){
cible2.style.transform = 'translate(0px, 200px)';

});
}

function Animer3(){
    var cible3; 
    var jouer3;
    cible3 = document.querySelector('.calque3');
    jouer3 = cible3.animate([
    {transform: 'translate(0px)'},
    {transform: 'translate(0px, 75px)'},
    {transform: 'translate(-10px, 100px)'}
    ], 1000);
    jouer3.addEventListener('finish', function(){
    cible3.style.transform = 'translate(-10px, 100px)';
    
    });
    }

    function Animer4(){
        var cible4; 
        var jouer4;
        cible4 = document.querySelector('.calque4');
        jouer4 = cible4.animate([
        {transform: 'translate(0px)'},
        {transform: 'translate(-75px, 75px)'},
        {transform: 'translate(-220px, 100px)'}
        ], 1000);
        jouer4.addEventListener('finish', function(){
        cible4.style.transform = 'translate(-220px, 100px)';
        
        });
        }

        function Animer5(){
            var cible5; 
            var jouer5;
            cible5 = document.querySelector('.boite2');
            jouer5 = cible5.animate([
            {transform: 'translate(0px)'},
            {transform: 'translate(-175px, 75px)'},
            {transform: 'translate(-330px, 100px)'}
            ], 1000);
            jouer5.addEventListener('finish', function(){
            cible5.style.transform = 'translate(-330px, 100px)';
            
            }) ;
            setTimeout(function() {
                // on récupère l'élément
                var elmt = document.getElementById("img");
                

                // on modifie son style
                elmt.style.display = "inline";
               
                }, 1500);
            }