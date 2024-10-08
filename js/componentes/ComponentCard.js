//Cards pagina home 
const criarCard=(imagem,descricao,link,id)=>{
    const CardContainer = document.createElement('div');
    CardContainer.classList.add('card');

    //adicionar id ao card
    CardContainer.id=id;

    CardContainer.innerHTML=`
            <span class="card-overlay">
                <div class="card-image">
                    <img src=${card.imagem} alt="imagem ${card.descricao}" >
                </div>
            </span>
            <div class="descricao-content" id="descricao-artigo">
                <p><a href=${card.link}>${card.descricao}</a></p>
            </div>
    `;

    return CardContainer
}

function addCardsContainer(container,lista){
    lista.forEach(dado=>{
        const cardEelement = criarCard(dado);
        container.appendChild(cardEelement);
    });
}

