const toggleModall = () => {
  document.querySelector('.modall')
  .classList.toggle('modal-hiddenl');
};
document.querySelector('.buttonl')
.addEventListener('click', toggleModall);
document.querySelector('.back')
.addEventListener('click', toggleModall);
const toggleModalj = () => {
  document.querySelector('.modalj')
  .classList.toggle('modal-hiddenj');
};
document.querySelector('.buttonj')
.addEventListener('click', toggleModalj);
document.querySelector('.home')
.addEventListener('click', toggleModalj);