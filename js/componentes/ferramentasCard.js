import { AddCardsContainer } from "./ComponentCard.js";

const ferramentas = [
    {
        descricao: "Desenhos para colorir",
        imagem:'img/home/ferramentas/ferramenta1.png',
        link: '#'
    },
     {
        descricao: "Cartões didáticos",
        imagem:'img/home/ferramentas/ferramenta2.jpeg',
        link: '#'

    },
     {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/ferramentas/ferramenta3.jpeg',
        link: '#'

     }
]

const ferramenta_container=document.getElementById('ferramenta-container"')


AddCardsContainer(ferramenta_container, ferramentas);


 // Inicializar o Flickity 
 $('ferramenta-container').flickity({
    cellAlign: 'right',
    contain: true,
    wrapAround: true,
    lazyLoad: 1,
    hash: true,
    prevNextButtons: false, 
    pageDots: false,
});