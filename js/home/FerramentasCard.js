import { AddCardsContainer } from "../componentes/ComponentCard.js";

const ferramentas = [
    {
        descricao: "Desenhos para colorir",
        imagem:'img/home/ferramentas/ferramenta1.png',
        link: '#',
        id:"ferramenta"
    },
     {
        descricao: "Cartões didáticos",
        imagem:'img/home/ferramentas/ferramenta2.jpeg',
        link: '#',
        id:"ferramenta"
    },
     {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/ferramentas/ferramenta3.jpeg',
        link: '#',
        id:"ferramenta"
     }
]

const ferramenta_container = document.getElementById('ferramenta-container')

if(ferramenta_container){
    AddCardsContainer({container: ferramenta_container, lista: ferramentas});
    
 // Inicializar o Flickity 
 $('#ferramenta-container').flickity({
    cellAlign: 'right',
    contain: true,
    wrapAround: true,
    hash: true,
    prevNextButtons: false, 
    pageDots: false,
});

}

