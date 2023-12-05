
  const elemento = document.querySelector('.modal__matricula');
  const este = document.querySelector('.modal__body');

  elemento.addEventListener('mouseenter', () => {
    elemento.classList.remove('modal__matricula1');
  });

  elemento.addEventListener('mouseleave', () => {
    elemento.classList.add('modal__matricula1');

  });



  const navIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav1__menu');

  navIcon.addEventListener('click', () => {
      navMenu.classList.toggle("spred");
  });

  navMenu.addEventListener('click', ()=>{
      navMenu.classList.remove("spred")
  })
