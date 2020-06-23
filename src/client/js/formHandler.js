function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)
    console.log("::: Form Submitted :::")
   
    const data = { text: formText };
    fetch('/test', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `polarity: ${res.polarity},`+"<br />"+ `subjectivity: ${res.subjectivity},`+"<br />" +` text: ${res.text},`+"<br />"
               +` polarity_confidence: ${res.polarity_confidence},` +"<br />"+
                `subjectivity_confidence: ${res.subjectivity_confidence}`;
        console.log(res);
    })

    
}

export { handleSubmit }
