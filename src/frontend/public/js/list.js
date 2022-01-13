function findByName(name) {
  const liElements = document.querySelectorAll('.contact-list li');
  for (liElm of liElements) {
    const algumNome = liElm.querySelector('.data strong').innerText;
    if (new RegExp(name.split('').join('.*'), 'i').test(algumNome))
      liElm.style.display = 'inherit';
    else liElm.style.display = 'none';
  }
}
