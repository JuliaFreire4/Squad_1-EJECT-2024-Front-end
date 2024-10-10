//Funcao Cards
const criarCard=(imagem,descricao,link,id,titulo,destaque_titulo) => {
    const CardContainer = document.createElement('div');
    CardContainer.classList.add('card');


    //adicionar id ao card
    CardContainer.id = id;

    CardContainer.innerHTML=`
            <span class="card-overlay">
                <div class="card-image">
                    <img src=${imagem} alt="imagem de ${descricao}" >
                </div>
            </span>
            <div class="descricao-content" >
                <p><a href=${link}>${descricao}</a></p>
            </div>
    `;

    if(titulo){
        CardContainer.innerHTML`
        <span class="card-overlay">
            <div class="card-image-background">
                <img src=${imagem} alt="imagem de ${descricao}" >    
                <div class="titulo-card">
                    <p>${titulo}
                    <span> ${destaque_titulo}</span>
                    </p>
                </div>
                <div class="descricao-content-interno" >
                    <p><a href=${link}>${descricao}</a></p>
                </div>
            </div>
        </span>
    
    `;

    }
    return CardContainer
}

export const AddCardsContainer=({container,lista}) => {
    lista.forEach(dado => {
        const { imagem, descricao, link, id,titulo} = dado
        const cardElement = criarCard(imagem, descricao, link, id, titulo);
        container.appendChild(cardElement);
    });
}

