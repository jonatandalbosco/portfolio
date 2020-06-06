function iniciaModal(modalID) {
	const modalPop = document.getElementById(modalID);
	modalPop.classList.add('mostrar');
	modalPop.addEventListener('click', (e) => {
		if(e.target.id == modalID || e.target.className == 'fechar-pop') {
			modalPop.classList.remove('mostrar');
		}


	});
}


iniciaModal('modal-pop');