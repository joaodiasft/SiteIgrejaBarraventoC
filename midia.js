const typeButtons = document.querySelectorAll('.type-button');
const typeSections = document.querySelectorAll('.type-section');

function handleTypeSelection() {
    // Remove a classe 'active' de todos os botões
    typeButtons.forEach(button => button.classList.remove('active'));

    // Adiciona a classe 'active' apenas ao botão clicado
    this.classList.add('active');

    // Obtém o tipo selecionado
    const selectedType = this.getAttribute('data-type');

    typeSections.forEach(section => {
        if (section.id === selectedType || selectedType === 'all') {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Adiciona um event listener a cada botão para lidar com a seleção
typeButtons.forEach(button => button.addEventListener('click', handleTypeSelection));


