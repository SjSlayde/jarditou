
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const menuderoulant = document.getElementById('Sujet');//deroulante
const choix0 = document.getElementById("choix")//choissisez
menuderoulant.addEventListener('change', () => {//
    choix0.remove()
})

form.addEventListener('submit', function (e) {
e.preventDefault();
let checkvalide = true;
checkvalide &= verifiltre(/^[A-Za-z]+$/,document.getElementById("Nom"),"Nom invalide")
checkvalide &= verifiltre(/^[A-Za-z]+$/,document.getElementById("Prenom"),"Prénom invalide")
checkvalide &= checksexe(document.getElementById("Sexe"),"veuillez selectionner votre genre",document.getElementById("Sexe2")) 
// checkvalide &= verifiltre(/^[0-9]+-[0-9]+-[0-9]+$/,document.getElementById("date"),"veuillez entrer une date de naissance valide") // ceci n'est pas obligatoire 
// checkvalide &= verifiltre(/^([0-9]{5})+$/,document.getElementById("cp"),"veuillez entrer un Code Postal valide")// mais c'est fonctionnel
// checkvalide &= verifiltre(/^[A-Za-z0-9]+$/,document.getElementById("Adresse"),"veuillez entrer une adresse valide")
// checkvalide &= verifiltre(/^[A-Za-z]+$/,document.getElementById("ville"),"veuillez entrer un nom de Ville valide")
// checkvalide &= verifiltre(/^[_A-Za-z0-9.-]+@[_a-z0-9.-]+.[a-z]{2,4}$/,document.getElementById("Email"),"veuillez entrer une adresse email valide")
checkvalide &= verisujet(document.getElementById("Sujet"),"veuillez selectionner votre sujet")
checkvalide &= verifiltre(/^[A-Za-z]+$/,document.getElementById("Demande"),"veuillez ecrire votre question")
checkvalide &= checksexe(document.getElementById("validition"),"veuillez cocher la validation",document.getElementById("validition"))
console.log(checkvalide)
check =  document.getElementById("date").value
console.log(check)
if(checkvalide){
    form.submit();
    console.log("ça passe")
}
})
})
function verisujet(sujet,mde){
    if(sujet.value==false){
        alert(mde)
        return false
    }
    return true
}

function checksexe(check,mde,checksecond){
    if(check.checked == false && checksecond.checked==false){
        alert(mde)
        return false
    }
    console.log("check")
    return true 
}

function verifiltre(regex,element,mde){
    if(!regex.test(element.value)){
        alert(mde);
        element.focus();
        return false;
    }
    return true;
}