const membros = [
    {
        nome: 'Annelise Figueiredo',
        cargo: 'Pedagoga especializada <br> em Ensino Bilingue',
        registro: "",
        imagem: 'img/home/equipe/img_annelise.png'
    },
    {
        nome: 'Isaac Lima',
        cargo: 'Psicólogo Infantil',
        registro: "CRP 0000000",
        imagem: 'img/home/equipe/img_isaac.png'
    },
    {
        nome: 'Malu Queiroz',
        cargo: 'Nutricionista Infantil',
        registro: "CRN 00000/P",
        imagem: 'img/home/equipe/img_malu.png'
    },
    {
        nome: 'Leonardo Matos',
        cargo: 'Pediatra',
        registro: "CRM/RN 000000",
        imagem: 'img/home/equipe/img_leonardo.jpeg'
    },


];
const textoEquipeCompleto=document.getElementById('texto-equipe').textContent;
const textoEquipeDestaque = document.querySelectorAll('#texto-equipe .text-bold-yellow-large');
let primeiraParteDestaque_equipe = textoEquipeDestaque[0].textContent;
let segundaParteDestaque_equipe = textoEquipeDestaque[1].textContent; 

const membrosContainer = document.getElementById('membros-container');


membros.forEach(membro => {
    const membroContent = document.createElement('div');
    membroContent.classList.add('membro-content');

    membroContent.innerHTML = `
        <div class="membro-card">
            <div class="membro-image-content">
                <span class="membro-overlay">
                    <div class="membro-card-image">
                        <img src="${membro.imagem}" class="membro-img" alt="imagem de ${membro.nome}">
                    </div>
                </span>
            </div>
            <div class="membro-info">
                <h2 class="nome-membro">${membro.nome}</h2>
                <p class="cargo-membro">${membro.cargo}</p>
                <p class="registro-membro">${membro.registro}</p>
            </div>
        </div>
    `;

    membrosContainer.appendChild(membroContent);
});

// Inicializa o Flickity após adicionar os membros
$('.equipe-container').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
});
