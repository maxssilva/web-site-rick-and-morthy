/*Criação de variáveis para que sejam alimentadas com o fetch*/

const imagem = document.getElementById('img1');
let nPersonagem1=document.getElementById('nPersonagem1');
let ePersonagem1=document.getElementById('especie1');

const imagem2=document.getElementById('img2');
let nPersonagem2=document.getElementById('nPersonagem2');
let ePersonagem2=document.getElementById('especie2');


const imagem3=document.getElementById('img3');
let nPersonagem3=document.getElementById('nPersonagem3');
let ePersonagem3=document.getElementById('especie3');

const imagem4=document.getElementById('img4')
let nPersonagem4=document.getElementById('nPersonagem4');
let ePersonagem4=document.getElementById('especie4');


//numero de personagens disponíveis na aplicação
const numeroPersonagens = 671;


//função de busca do personagem 
pegarPersonagem1 = ()=>{

    //geração de numero aleatório para seleção do personagem na api
    geradorAleatorio = () => {
        return Math.floor(Math.random() * numeroPersonagens);
    }
    const id = geradorAleatorio();
    
    
    //função de busca do personagem em api externa  
return fetch ( `https://rickandmortyapi.com/api/character/${id}`, {
    method:'GET',
    headers:{
        Accept:'application/json',
        "Content-Type": 'application/json'
    }
}).then((response)=> response.json()).then((data)=>{
    /*nesse ponto atribuimos o retorno data do json às variáveis criadas, 
    imagem, nome e espécie do personagem*/
    imagem.src = data.image;
    imagem.alt = data.name;
    nPersonagem1.innerHTML = 'Nome: '+data.name;
    ePersonagem1.innerHTML = 'Espécie: '+data.species;    
});  

//replicação da função acima para os outros 4 personagens exigidos no desafio

}
pegarPersonagem1();

pegarPersonagem2 = ()=>{
    geradorAleatorio = () => {
        return Math.floor(Math.random() * numeroPersonagens);
    }
    const id = geradorAleatorio();
    return fetch ( `https://rickandmortyapi.com/api/character/${id}`, {
        method:'GET',
        headers:{
            Accept:'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response)=> response.json()).then((data)=>{
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nPersonagem2.innerHTML = 'Nome: '+data.name; 
        ePersonagem2.innerHTML = 'Espécie: '+data.species;
    });  
    
    }

    pegarPersonagem3 = ()=>{
        geradorAleatorio = () => {
            return Math.floor(Math.random() * numeroPersonagens);
        }
        const id = geradorAleatorio();
        return fetch ( `https://rickandmortyapi.com/api/character/${id}`, {
            method:'GET',
            headers:{
                Accept:'application/json',
                "Content-Type": 'application/json'
            }
        }).then((response)=> response.json()).then((data)=>{
            imagem3.src = data.image;
            imagem3.alt = data.name;
            nPersonagem3.innerHTML = 'Nome: '+data.name; 
            ePersonagem3.innerHTML = 'Espécie: '+data.species;
        });  
        
        }

        pegarPersonagem4 = ()=>{
            geradorAleatorio = () => {
                return Math.floor(Math.random() * numeroPersonagens);
            }
            const id = geradorAleatorio();
            return fetch ( `https://rickandmortyapi.com/api/character/${id}`, {
                method:'GET',
                headers:{
                    Accept:'application/json',
                    "Content-Type": 'application/json'
                }
            }).then((response)=> response.json()).then((data)=>{
                imagem4.src = data.image;
                imagem4.alt = data.name;
                nPersonagem4.innerHTML = 'Nome: '+data.name; 
                ePersonagem4.innerHTML = 'Espécie: '+data.species;
            });  
            
            } 
//chamada das funções para busca do personagem

    pegarPersonagem1();

    pegarPersonagem2();

    pegarPersonagem3();

    pegarPersonagem4();


 