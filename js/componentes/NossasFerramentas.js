import { AddCardsContainer } from "./ComponentCard.js";

const NossasFerramentas = [
    {
        titulo: "atividades criativas",
        descricao: "Lorem ipsum dolor sit amet",
        imagem:'img/home/ferramentas/ferramenta1.png',
        link: '#',
        id:"nossa-ferramenta"
    },
    
]

const texto_nossa_ferramenta = document.getElementById('texto-nossa-ferramenta');
const texto_destaque_nossa_ferramenta = document.getElementById('texto-bold-nossa-ferramenta');
const nossa_ferramenta_container = document.getElementById('nossa-ferramenta-card');

if(nossa_ferramenta_container){
    AddCardsContainer({container: nossa_ferramenta_container, lista: NossasFerramentas});
    
 // Inicializar o Flickity 
 $('#nossa-ferramenta-card').flickity({
    cellAlign: 'right',
    contain: true,
    wrapAround: true,
    hash: true,
    prevNextButtons: false, 
    pageDots: false,
});

}

