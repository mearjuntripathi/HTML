// Selects the main chat container where messages will be displayed
const chatBox = document.querySelector('.chat');
let API_KEY; // Stores the API key entered by the user

// Event listeners for window focus and blur events, updating the document title based on window state
window.addEventListener("blur", () => {
    document.title = "Need a help?";
});

window.addEventListener("focus", () => {
    document.title = "D.O.R.A.";
});

// Prompt user for OpenAI API key on page load; store if valid, otherwise prompt for exit or reload
window.addEventListener('load', () => {
    const API = prompt("Enter your OPEN AI API-KEY");

    if (API === "" || API == null) {
        alert("Sorry you can't use our chatbot");
        confirm("Do you want to exit?") ? window.location.replace('/') : location.reload();
    } else {
        alert("Your API key is set. Enjoy your chat!");
        API_KEY = API;
    }
});

// Event listener for input in the query field; toggles between the send and mic buttons based on input content
document.getElementById("query").addEventListener("input", () => {
    if (document.getElementById('query').value.length > 0) {
        document.getElementById('send').style.display = 'block';
        document.getElementById('mic').style.display = 'none';
    } else {
        document.getElementById('send').style.display = 'none';
        document.getElementById('mic').style.display = 'block';
    }
});

// Event listener to handle "Enter" key press in query field; triggers send button if input is present
document.getElementById("query").addEventListener("keypress", (event) => {
    if (event.key === "Enter" && document.getElementById('query').value.length > 0) {
        event.preventDefault();
        document.getElementById("send").click();
    } else if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('query').value = "";
    }
});

// Event listener for the mic button; activates speech recognition and inputs recognized speech into query field
document.getElementById('mic').addEventListener('click', () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Sorry, Speech recognition is not supported by your browser. Please use Chrome or enable it in your browser.");
    }
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

// Function to create a new chat message div; takes the message content and class name (e.g., sender or receiver)
const createChatDiv = (message, className) => {
    const chatDiv = document.createElement('div');
    chatDiv.classList.add(className);
    let chatContent = `<p></p>`;
    chatDiv.innerHTML = chatContent;
    chatDiv.querySelector("p").textContent = message;
    return chatDiv;
};

// Function to generate a response using the OpenAI API, sending user input and receiving chatbot response
const genrateResponse = (message, response) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": message }]
        })
    };

    // Fetch response from OpenAI API and handle display or errors
    fetch(API_URL, requestOption)
        .then(res => res.json())
        .then(data => {
            response.innerHTML = `<span>${marked(data.choices[0].message.content)}</span>`;
        })
        .catch((err) => {
            response.innerHTML = `<span class='error'><p>Oops! Something went wrong</p>${marked(err.message)}</span>`;
        })
        .finally(() => {
            chatBox.scrollTo(0, chatBox.scrollHeight);
        });
};

// Event listener for the send button; handles sending user messages and initiating response generation
document.getElementById('send').addEventListener('click', () => {
    let query = document.getElementById('query').value.trim();
    chatBox.append(createChatDiv(query, "send-mess"));
    chatBox.scrollTo(0, chatBox.scrollHeight);
    document.getElementById('query').value = "";

    setTimeout(() => {
        const response = createChatDiv("thinking . . .", "receive-mess");
        chatBox.append(response);
        genrateResponse(query, response);
    }, 600);

    document.getElementById('send').style.display = 'none';
    document.getElementById('mic').style.display = 'block';
});
