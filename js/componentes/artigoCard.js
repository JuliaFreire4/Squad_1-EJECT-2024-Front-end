const artigos = [
    {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/img_artigo.jpeg'
    },
     {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/img_artigo2.jpeg'
    },
     {
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem:'img/home/img_artigo3.jpeg'
     }
]

const artigo_container = document.getElementById('artigo_container')


artigos.forEach(artigo=> {
    const artigoContent = document.createElement('div');
    artigoContent.classList.add('artigo-content');

    artigoContent.innerHTML= `
            <div class="card" id="artigo-card">
                <span class="artigo-overlay">
                    <div class="artigo-card-image">
                        <img src="img/home/img_artigo.jpeg" alt="imagem do artigo" >
                    </div>
                </span>
                <div class="descricao-content" id="descricao-artigo">
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
        </div>
    `;
    artigo_container.appendChild(artigoContent)
})

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

