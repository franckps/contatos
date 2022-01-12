function submitForm(formId, method) {
  const formObj = document.getElementById(formId);
  method = method ? method : formObj.method;
  const action = formObj.action;
  let config = {
    method,
  };
  const erros = [];
  console.log({ method, action });
  if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
    const inputElements = formObj.getElementsByTagName('input');
    inputObj = {};
    for (inputElement of inputElements) {
      if (!!inputElement.name) {
        if (!!inputElement.required) {
          if (!inputElement.value)
            erros.push({
              type: 'requiredField',
              message: `O campo '${inputElement.name}' deve ser preenchido!`,
            });
        }
        if (!!inputElement.value) {
          if (!!inputElement.maxLength && inputElement.maxLength > 0) {
            console.log(inputElement.maxLength);
            if (inputElement.value.length > inputElement.maxLength)
              erros.push({
                type: 'maxLength',
                message: `O campo '${inputElement.name}' não está correto!`,
              });
          }
          if (!!inputElement.minLength && inputElement.minLength >= 0) {
            console.log(inputElement.minLength);
            if (inputElement.value.length < inputElement.minLength)
              erros.push({
                type: 'minLength',
                message: `O campo '${inputElement.name}' não está correto!`,
              });
          }
        }
        inputObj[inputElement.name] = inputElement.value;
      }
    }
    if (erros.length > 0) {
      console.log(erros);
      const message = erros.map((elm) => elm.message).join('\n');
      return alert(message);
    }
    config.headers = {
      'content-type': 'application/json; charset=UTF-8',
    };
    config.body = JSON.stringify(inputObj);
  }
  console.log(formObj);
  fetch(action, config)
    .then((data) => data.json())
    .then((res) => {
      console.log({ message: res.message });
      alert(res.message);
    });
}

function formatPhone(phone) {
  return phone
    .replace(/[^0-9]/gi, '')
    .replace(/([0-9]{1,2})([0-9]{0,5})([0-9]{0,4})/, '($1) $2-$3');
}

function formatDate(date) {
  return date
    .replace(/[^0-9]/gi, '')
    .replace(/([0-9]{1,2})([0-9]{0,2})([0-9]{0,4})/, '$1/$2/$3');
}
