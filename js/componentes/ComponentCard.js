//Funcao Cards
const criarCard=(imagem,descricao,link,id) => {
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

    return CardContainer
}

export const AddCardsContainer=({container,lista}) => {
    lista.forEach(dado => {
        const { imagem, descricao, link, id } = dado
        const cardElement = criarCard(imagem, descricao, link, id );
        container.appendChild(cardElement);
    });
}

