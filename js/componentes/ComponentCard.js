//Funcao Cards
const criarCard=(imagem,descricao,link,id,titulo,destaque_titulo) => {
    const CardContainer = document.createElement('div');
    CardContainer.classList.add('card');


    //adicionar id ao card
    CardContainer.id = id

    if(titulo){
        CardContainer.innerHTML=`
        <span class="card-typeBackground">
            <div class="card-image-background" style="background-image: url(${imagem})";>
                <div class="titulo-card">
                    <p>${titulo}
                        <span class="text-bold-yellow-small"> ${destaque_titulo}</span>
                    </p>
                </div>
                <div class="descricao-content-interno" >
                    <p><a href=${link}>${descricao}</a></p>
                </div>
            </div>
        </span>
    `;
    } else{
        CardContainer.innerHTML=`
        <span class="card-overlay">
            <div class="card-image">
                <img src=${imagem} alt="imagem de ${descricao}" >
            </div>
        </span>
        <div class="descricao-content" >
            <p><a href=${link}>${descricao}</a></p>
        </div>
        <span>
        `;       
    }
    return CardContainer


};

export const AddCardsContainer=({container,lista}) => {
    lista.forEach(dado => {
        const { imagem, descricao, link, id,titulo,destaque_titulo} = dado
        const cardElement = criarCard(imagem, descricao, link, id, titulo,destaque_titulo);
        container.appendChild(cardElement);
    });
}

