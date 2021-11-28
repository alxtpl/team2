(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-franshize-open]'),
      closeModalBtn: document.querySelector('[data-franshize-close]'),
      modal: document.querySelector('[data-franshize]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();