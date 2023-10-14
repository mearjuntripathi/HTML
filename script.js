document.querySelector('#mode').addEventListener('click', () => {
    if (document.querySelector('#mode').innerHTML == '<i class="fa fa-moon-o fa-2x" style="color: white"></i>') {
        document.getElementsByTagName('body')[0].classList = 'dark';
        document.querySelector('#mode').innerHTML = `<i class="fa fa-sun-o fa-2x" style="color: yellow;"></i>`;
    } else {
        document.getElementsByTagName('body')[0].classList = 'light';
        document.querySelector('#mode').innerHTML = `<i class="fa fa-moon-o fa-2x" style="color: white"></i>`;
    }
})

window.onload = (() => {
    document.querySelector('.topic button').click();
})

let recent = [
    { "topic": "DSA NOTES", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm?tab=readme-ov-file#data-structure--algorithm" },
    { "topic": "RestAPI", "tech": "nodejs • js", "live": "", "docs": "https://github.com/mearjuntripathi/nodejs/tree/main/crud-RESTAPI" },
    { "topic": "JAVA Digital Clock", "tech": "JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Java/blob/main/DigitalClock.java" },
    { "topic": "Chat ROOM", "tech": "JAVA • socket.io", "live": "", "docs": "https://github.com/mearjuntripathi/Java/tree/main/Chat-Room" },
    { "topic": "RestAPI/ginAPI", "tech": "GOlang • ginAPI", "live": "", "docs": "https://github.com/mearjuntripathi/GOLang" },
    { "topic": "Blog Website", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/blog-writer/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/blog-writer" },
    { "topic": "Chat BOT", "tech": "HTML CSS JS", "live": "https://mearjuntripathi.github.io/chatbot/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/chatbot" }
];

let dev = [
    { "topic": "Chat Application", "tech": "HTML • CSS • JS • PHP • JQuery • mySQL", "live": "https://greatchatson.000webhostapp.com/", "docs": "https://github.com/mearjuntripathi/PHP/tree/main/chat_on" },
    { "topic": "RestAPI", "tech": "nodejs • js", "live": "", "docs": "https://github.com/mearjuntripathi/nodejs/tree/main/crud-RESTAPI" },
    { "topic": "Chat ROOM", "tech": "JAVA • socket.io", "live": "", "docs": "https://github.com/mearjuntripathi/Java/tree/main/Chat-Room" },
    { "topic": "RestAPI/ginAPI", "tech": "GOlang • ginAPI", "live": "", "docs": "https://github.com/mearjuntripathi/GOLang" },
    { "topic": "Blog Website", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/blog-writer/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/blog-writer" },
    { "topic": "Chat BOT", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/chatbot/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/chatbot" },
    { "topic": "Voice Assistent", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/dora/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/dora" },
    { "topic": "Strange video call", "tech": "HTML • CSS • JS • ScaleDrone", "live": "https://mearjuntripathi.github.io/stranger/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/stranger" },
    { "topic": "Basic Calculator", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/calculator/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/calculator" },
    { "topic": "Image to PDF Converter", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/imagetopdf/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/imagetopdf" },
    { "topic": "To-DO List", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/TO-DO%20list/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/TO-DO%20list" },
    { "topic": "Tic Tac Toe", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/tiktactoe/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/tiktactoe" },
    { "topic": "Code Editor", "tech": "HTML • CSS • JS", "live": "https://mearjuntripathi.github.io/codeeditor/", "docs": "https://github.com/mearjuntripathi/mearjuntripathi.github.io/tree/main/calculator" }
];

let dsa = [
    { "topic": "Introduction DSA", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm" },
    { "topic": "Stack", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Stack" },
    { "topic": "Queue", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Queue" },
    { "topic": "Sorting", "tech": "C++", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Sorting" },
    { "topic": "Searching", "tech": "JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Searching" },
    { "topic": "Single LinkList", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Linked%20List/single%20linkedlist" },
    { "topic": "Double LinkList", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Linked%20List/Doubly%20linkedlist" },
    { "topic": "Tree", "tech": "C++", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Tree" },
    { "topic": "Binary Tree", "tech": "C++", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Tree/Binary%20Tree" },
];

let java = [
    { "topic": "Chat ROOM", "tech": "JAVA • socket.io", "live": "", "docs": "https://github.com/mearjuntripathi/Java/tree/main/Chat-Room" },
    { "topic": "DSA NOTES", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm?tab=readme-ov-file#data-structure--algorithm" },
    { "topic": "JAVA Digital Clock", "tech": "JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Java/blob/main/DigitalClock.java" },
    { "topic": "Stack", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Stack" },
    { "topic": "Queue", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Queue" },
    { "topic": "Searching", "tech": "JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Searching" },
    { "topic": "Single LinkList", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Linked%20List/single%20linkedlist" },
    { "topic": "Double LinkList", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Linked%20List/Doubly%20linkedlist" },
    
];

let cpp = [
    { "topic": "Introduction DSA", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm" },
    { "topic": "Stack", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Stack" },
    { "topic": "Queue", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Queue" },
    { "topic": "Sorting", "tech": "C++", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Sorting" },
    { "topic": "Single LinkList", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Linked%20List/single%20linkedlist" },
    { "topic": "Double LinkList", "tech": "C++ • C • JAVA", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Linked%20List/Doubly%20linkedlist" },
    { "topic": "Tree", "tech": "C++", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Tree" },
    { "topic": "Binary Tree", "tech": "C++", "live": "", "docs": "https://github.com/mearjuntripathi/Data_Structure_Algorithm/tree/main/Tree/Binary%20Tree" },
    { "topic": "Graphics Quiz Game", "tech": "C", "live": "", "docs": "https://github.com/mearjuntripathi/Personal-content/tree/master/QUIZ%20GAME" },
    { "topic": "Dynamic Memory Allocation", "tech": "C", "live": "", "docs": "https://github.com/mearjuntripathi/Personal-content/blob/master/C/DynamicMamory.c" }
];

let nodejs = [
    { "topic": "RestAPI", "tech": "nodejs • js", "live": "", "docs": "https://github.com/mearjuntripathi/nodejs/tree/main/crud-RESTAPI" }
];

let go = [
    { "topic": "RestAPI/ginAPI", "tech": "GOlang • ginAPI", "live": "", "docs": "https://github.com/mearjuntripathi/GOLang" },
    { "topic": "gRPC chat microservice", "tech": "GOlang • gRPC", "live": "", "docs": "https://github.com/mearjuntripathi/grpc-chat-microservice" }
];

let database = [
    { "topic": "Chat Application", "tech": "HTML • CSS • JS • PHP • JQuery • mySQL", "live": "https://greatchatson.000webhostapp.com/", "docs": "https://github.com/mearjuntripathi/PHP/tree/main/chat_on" },

];

const projects = document.getElementById('projects');

function checklive(data){
    if(data == "")
        return "";
    else return `<a target="_blank" href="${data}" class="live"><i
    class="fa fa-eye"> Live website</i></a>`
}

function addProject(data){
    let project = document.createElement('div');
    project.classList.add('project');
    let info = `
    <h1 class="title">${data.topic}</h1>
                <hr>
                <p class="used-tech">
                    Used Technology: 
                    <span>
                        ${data.tech}
                    </span>
                </p>
                <div class="view">
                    `+
                    checklive(data.live)
                    +`
                    <a target="_blank"
                        href="${data.docs}"
                        class="documentation"><i class="fa fa-file"> Documentation</i></a>
                </div>
            </div>
    `;
    project.innerHTML = info;
    projects.append(project);
}

const operation = document.querySelectorAll('.topic button');

for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener('click', function () {
        document.querySelector('.active').classList.remove('active');
        projects.innerHTML = "";
        switch(operation[i].name){
            case "recent":
                operation[i].classList.add('active');
                for(let i = 0 ; i < recent.length ; i++)
                    addProject(recent[i]);
            break;

            case "dev":
                operation[i].classList.add('active');
                for(let i = 0 ; i < dev.length ; i++)
                    addProject(dev[i]);
            break;

            case "dsa":
                operation[i].classList.add('active');
                for(let i = 0 ; i < dsa.length ; i++)
                    addProject(dsa[i]);
            break;

            case "java":
                operation[i].classList.add('active');
                for(let i = 0 ; i < java.length ; i++)
                    addProject(java[i]);
            break;

            case "cpp":
                operation[i].classList.add('active');
                for(let i = 0 ; i < cpp.length ; i++)
                    addProject(cpp[i]);
            break;

            case "nodejs":
                operation[i].classList.add('active');
                for(let i = 0 ; i < nodejs.length ; i++)
                    addProject(nodejs[i]);
            break;

            case "go":
                operation[i].classList.add('active');
                for(let i = 0 ; i < go.length ; i++)
                    addProject(go[i]);
            break;

            case "database":
                operation[i].classList.add('active');
                for(let i = 0 ; i < database.length ; i++)
                    addProject(database[i]);
            break;
        }
    })
}