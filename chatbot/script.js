
const chatBox = document.querySelector('.chat');
let API_KEY ;


window.addEventListener("blur",()=>{
    document.title = "Need a help?";
})

window.addEventListener("focus",()=>{
    document.title = "D.O.R.A.";
})

window.addEventListener('load',()=>{
    const API = prompt("Enter you OPEN AI API-KEY");

    if(API == "" || API == null){
        alert("Sorry you can't use our chat bot");
        confirm("Are you Want to exit") ? window.location.replace('/') : location.reload();
    }
    else{ 
        alert("Your API KEY is update enjoy your chat");
        API_KEY = API;
    }
})

// button mic
document.getElementById("query").addEventListener("input", () => {
    if (document.getElementById('query').value.length > 0) {
        document.getElementById('send').style.display = 'block'; // Display the send button
        document.getElementById('mic').style.display = 'none'; // Hide the mic button
    } else {
        document.getElementById('send').style.display = 'none'; // Hide the send button
        document.getElementById('mic').style.display = 'block'; // Display the mic button
    }
});

// Hit enter
document.getElementById("query").addEventListener("keypress", (event)=> {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter"  && (document.getElementById('query').value.length > 0)) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("send").click();
    }else if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById('query').value = "";
    }
  }); 

// this is a microphone operation
document.getElementById('mic').addEventListener('click', () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition)
        alert("Sorry, Speech recognition is not supported by your browser. Please use Chrome or enable it in your browser.");
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        document.getElementById('query').value = transcript;
    };

    recognition.onspeechend = () => {
        recognition.stop();
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
});


// creating a new chat div
const createChatDiv = (message,className) => {
    const chatDiv = document.createElement('div');
    chatDiv.classList.add(className);
    let chatContent = `<p></p>`;
    chatDiv.innerHTML = chatContent;
    chatDiv.querySelector("p").textContent = message;
    return chatDiv; 
}

// genrating a response
const genrateResponse = (message,response) => {
    // Important chat-gpt api key non-shareable

    const API_URL = "https://api.openai.com/v1/chat/completions";

    // const messageElement = response.querySelector("p")

    const requestOption = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user","content": message}]
        })
    }
    // we get a responce
    let emess; // check for error message
    fetch(API_URL,requestOption).then(res => res.json()).then(data=>{
        d = data;
        response.innerHTML = `<span>${marked(data.choices[0].message.content)}</span>`;
    }).catch((err)=>{
        response.innerHTML = `<span class='error'><p>Oops! Somthing went wrong</p>${marked(d.error.message)}</span>`;
    }).finally(()=>{chatBox.scrollTo(0,chatBox.scrollHeight)})


}

// sending button andling a chat button

document.getElementById('send').addEventListener('click',()=>{
    let query = document.getElementById('query').value.trim();
    chatBox.append(createChatDiv(query,"send-mess"));
    chatBox.scrollTo(0,chatBox.scrollHeight) 


    document.getElementById('query').value = "";

    setTimeout(()=>{
        // Display a tinking on chat;
        const response = createChatDiv("thinking . . .","receive-mess")
        chatBox.append(response);
        genrateResponse(query,response);
    },600);
    document.getElementById('send').style.display = 'none'; 
    document.getElementById('mic').style.display = 'block';
})


