function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
   
    const data = { text: formText };
    fetch('/test', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `polarity: ${res.polarity},   subjectivity: ${res.subjectivity}`;
        console.log(res);
    })
}

export { handleSubmit }
