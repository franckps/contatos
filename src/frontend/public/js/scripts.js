function submitForm(formId) {
    const formObj = document.getElementById(formId)
    const inputElements = formObj.getElementsByTagName("input")
    inputObj = {}
    for(inputElement of inputElements) {
        if(!!inputElement.name) {
            inputObj[inputElement.name] = inputElement.value
        }
    }
    console.log(formObj)
    fetch('http://localhost:3000/create-contact/',{
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(inputObj),
        method: 'POST'
    }).then(data => data.json()).then(res => console.log({ res }))
}