const entrada = document.getElementById('entrada');
const vogais = ["A", "E", 'I', "O", "U"];
let indice = 0;
let indice_maximo = 5;


document.body.addEventListener('keydown', function (event){
    console.log(event.key);
    let tecla = event.key;
    
    if (indice != indice_maximo){
        if ( (tecla >= 'a' && tecla <= 'z' || tecla >= 'A' && tecla <= 'Z') && tecla != 'Dead' && tecla != 'Enter' && tecla != "CapsLock")
        {
        indice++;
        let celula = document.getElementById('celula ' + indice);
        celula.innerHTML = tecla;
        }
    }
    if (indice == indice_maximo && tecla == 'Enter'){
        indice_maximo += 5;;

        for (let indice_local=1; indice_local < indice_maximo; indice_local++){
            let celula_local = document.getElementById('celula ' + indice_local);
            let letra_local = celula_local.innerHTML.toUpperCase();
            console.log(letra_local);
            for (let i=0; i < vogais.length; i++)
            {
                if (letra_local == vogais[i]){
                    celula_local.style.backgroundColor = 'green';
                }
            }
        }
    }
}
)

