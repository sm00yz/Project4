import { checkForURL } from './URLChecker'

function handleSubmit(event) {
    event.preventDefault();
     
    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    var isValidURL=Client.checkForURL(formText);
    console.log(isValidURL);
    console.log("::: Form Submitted :::")
   
   if(isValidURL){
     
     const data = { text: formText };
    fetch('http://localhost:8081/test', {
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
}else console.log("Wrong input please enter a valid url");

    
}

export { handleSubmit }
