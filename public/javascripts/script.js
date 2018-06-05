function openModal(id){
  var modal = document.querySelector('#'+id);
  console.log(modal);
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', function(e) {
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
}