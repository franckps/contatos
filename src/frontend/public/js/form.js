const phoneFields = document.querySelectorAll('input[type="phone"]');
for (phoneElm of phoneFields) {
  phoneElm.addEventListener('keyup', (evnt) => {
    evnt.target.value = formatPhone(evnt.target.value);
  });
}
