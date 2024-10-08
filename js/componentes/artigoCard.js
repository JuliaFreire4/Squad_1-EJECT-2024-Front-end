// Componete externo --ComponentCard.js --->
const artigos = [
    {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/forum/img_artigo.jpeg',
        link: '#'
    },
     {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/forum/img_artigo2.jpeg',
        link: '#'

    },
     {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/forum/img_artigo3.jpeg',
        link: '#'

     }
]

const artigo_container = document.getElementById('artigo_container')

adicionarCardsAoContainer(artigo_container, artigos);

   // Inicializar o Flickity para os artigos 
   $('.artigo-container').flickity({
    cellAlign: 'right',
    contain: true,
    wrapAround: true,
    lazyLoad: 1,
    hash: true,
    prevNextButtons: false, 
    pageDots: false,
});

