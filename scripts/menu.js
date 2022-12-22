window.addEventListener("scroll", posicaoScroll);

function posicaoScroll(){
    if((window.innerWidth > 750)){
        if(window.scrollY > 300){
            document.getElementById("menuEscondido").style.display = 'flex';
        }
        else{
            document.getElementById("menuEscondido").style.display = 'none';
        }
    }
    
}



function openMenu(){
    document.getElementById("menuM").style.height = '40%';
    document.getElementById("topo").style.display = 'none';
}
function openMenuP(){
    document.getElementById("menuM").style.height = '40%';
    document.getElementById("topoPrincipal").style.display = 'none';
}

function closeMenu(){
    document.getElementById("menuM").style.height = '0%';
    document.getElementById("topo").style.display = 'flex';
}

function closeMenuP(){
    document.getElementById("menuM").style.height = '0%';
    document.getElementById("topoPrincipal").style.display = 'flex';
}

