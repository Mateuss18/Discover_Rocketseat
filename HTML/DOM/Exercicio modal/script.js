const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.addEventListener('click', function abrir(){
    modalWrapper.classList.remove('invisible')
})

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey && !modalWrapper.classList.contains('invisible')){
        console.log('esc')
        modalWrapper.classList.add('invisible')
    }
}) 