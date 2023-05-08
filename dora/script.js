const content = document.querySelector('.content');
const answer = document.querySelector('.answer');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let speakData = new SpeechSynthesisUtterance();

let gen = true;

function speaks(message){
    if(gen == false){
        gen = true;
        speechSynthesis.cancel();
        return;
    }
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
        if(gen == false){
            gen = true;
            return;
        }
        if (i < txt.length) {
            answer.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

speaks("Hi I am DORA, a virtual voice Assistent, Tell me how can i help you");

document.getElementById('picture').addEventListener('click', ()=>{ recognition.start() })


document.getElementById('genrated').addEventListener('click', ()=>{
    gen = false;
    document.getElementById('genrated').style.visibility = 'hidden';
    content.innerHTML = '"Ask your question"';
    recognition.start();
})

function generateResponse(txt){
    document.getElementById('genrated').style.visibility = 'visible';
    speaks(txt);
    writeAnswer(txt);
}

recognition.addEventListener('result',(e)=>{
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('') 
    content.innerHTML = text;

    if(e.results[0].isFinal){

        if(text.toLowerCase().includes("hi dora") || text.toLowerCase().includes("hello dora")){
            generateResponse("Hi, How I can Help you");
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
            generateResponse(strTime);
        }

        else if(text.toLowerCase().includes("date")){
            let today = new Date().toISOString().slice(0, 10);
            today = "Today is "+today;
            generateResponse(today);
        }

        else if(text.toLowerCase().includes("search")){
            speaks("Okey i search here i got some solution for you"+text.replace("search", "")+"on Google");
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
                generateResponse(result);
            })
        }
        else{
            var response = "I am in development mode so sorry i can't tell you a solution of this question";
            generateResponse(response);
            content.innerHTML = '"Ask your question"';
        }
        recognition.interimResults = false;
        }
});

// recognition.addEventListener('end', ()=>{
//     recognition.start();
// })

recognition.start();


document.getElementById('copy').addEventListener('click',()=>{
    navigator.clipboard.writeText(document.getElementById('answer').innerHTML);
})