const content = document.querySelector('.content');
const answer = document.querySelector('.answer');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let speakData = new SpeechSynthesisUtterance();

function speaks(message){
    let textToSpeak = message;
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    speakData.text = textToSpeak;
    speechSynthesis.speak(speakData);
}

function writeAnswer(txt){
    var i = 0;

    var speed = 50;

    answer.innerHTML = "";

    function typeWriter() {
        if (i < txt.length) {
            answer.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}



speaks("Hi I am DORA, a virtual voice Assistent, Tell me how can i help you");


// const API_KEY = "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";
// const API_URL = "https://api.openai.com/v1/engines/text-davinci-002/jobs";

// async function generateResponse(prompt) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", API_URL, true);
//     xhr.setRequestHeader("Authorization", `Bearer ${API_KEY}`);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         resolve(response.choices[0].text);
//       }
//     };
//     xhr.send(JSON.stringify({
//       prompt: prompt,
//       max_tokens: 100,
//       n: 1,
//       stop: null,
//       temperature: 0.5,
//     }));
//   });
// }

// async function main(prompt) {
//   const response = await generateResponse(prompt);
//   console.log(response);
//   return response;
// }

recognition.addEventListener('result',(e)=>{
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('') 
    // console.log(text);
    content.innerHTML = text;
    if(e.results[0].isFinal){
        if(text.toLowerCase().includes("hi dora") || text.toLowerCase().includes("hello dora")){
            speaks("Hi, How I can Help you");
            writeAnswer("Hi, How I can Help you");
        }
        else if(text.toLowerCase().includes("time")){
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            strTime = "Is it "+strTime;
            speaks(strTime);
            writeAnswer(strTime);
        }
        else if(text.toLowerCase().includes("date")){
            let today = new Date().toISOString().slice(0, 10);
            today = "Today is "+today;
            speaks(today);
            writeAnswer(today);
        }
        // else{
        //     speaks("Sorry, I am not fully ready, I am in a development mode at this time");
        //     writeAnswer("Sorry, I am not fully ready, I am in a development mode at this time");
            
        // }
        else if(text.toLowerCase().includes("search")){
            speaks("Okey i search "+text.replace("search", "")+"on Google");
            window.open(`http://google.com/search?q=${text.replace("search", "")}`, "_blank");
        }
        else if(text.toLowerCase().includes("open")){
            if(text.toLowerCase().includes("youtube")){
                speaks("Opening Youtube");
                window.open(`http://www.youtube.com`, "_blank");
            }
            else if(text.toLowerCase().includes("instagram")){
                speaks("Opening instagram");
                window.open(`http://www.instagram.com`, "_blank");
            }
            else if(text.toLowerCase().includes("linkedin")){
                speaks("Opening linkedin");
                window.open(`http://www.linkedin.com`, "_blank");
            }
            else if(text.toLowerCase().includes("facebook")){
                speaks("Opening facebook");
                window.open(`http://www.facebook.com`, "_blank");
            }
        }else if(text.toLowerCase().includes("who is") || text.toLowerCase().includes("what is")){
            //code of wikipedia
            if(text.toLowerCase().includes("who is"))
                var title = text.replace("who is" , "");
            else var title = text.replace("what is" , "");
            var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles="+title
            
            fetch(url)
            .then(response => response.json())
            .then(response => {
                response = response.query.pages;
                var pageid = Object.keys(response)[0];
                var result = response[pageid].extract;
                speaks(result);
                writeAnswer(result);
            })
        }
        else{
            // const response = main(text);
            var response = "I am in development mode so sorry i can't tell you a solution of this question";
            speaks(response);
            writeAnswer(response);
            content.innerHTML = '"Ask your question"';
        }
        content.innerHTML = '"Ask your question"';
    }
});

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();