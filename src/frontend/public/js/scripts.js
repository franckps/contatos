function submitForm(formId, method) {
  const formObj = document.getElementById(formId);
  method = method ? method : formObj.method;
  const action = formObj.action;
  let config = {
    method,
  };
  console.log({ method, action });
  if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
    const inputElements = formObj.getElementsByTagName('input');
    inputObj = {};
    for (inputElement of inputElements) {
      if (!!inputElement.name) {
        inputObj[inputElement.name] = inputElement.value;
      }
    }
    config.headers = {
      'content-type': 'application/json; charset=UTF-8',
    };
    config.body = JSON.stringify(inputObj);
  }
  console.log(formObj);
  fetch(action, config)
    .then((data) => data.json())
    .then((res) => console.log({ res }));
}
