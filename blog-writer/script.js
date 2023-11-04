let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let imageButton = document.getElementById("createImage");
let embadedCode = document.getElementById("embadeCode");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let saveButton = document.getElementById("save");
let openButton = document.getElementById("open");

//List of fontlist
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
    "Pacifico", // Cursive font
    "Dancing Script", // Cursive font
    "Great Vibes", // Cursive font
    "Lobster", // Cursive font
    "Bangers", // Cursive font
    "Comic Sans MS", // Cursive and bold
    "Brush Script MT", // Cursive and bold
    "Lucida Calligraphy", // Cursive and bold
    "Monotype Corsiva", // Cursive and bold
    "Pinyon Script", // Cursive font
    "Quicksand", // Bold
    "Exo", // Bold
    "Montserrat", // Bold
    "Raleway", // Bold
    "Open Sans", // Bold
];

//Initial Settings
const initializer = () => {
    //function calls for highlighting buttons
    //No highlights for link, unlink,lists, undo,redo since they are one time operations
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    //create options for font names
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    //fontSize allows only till 7
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    //default size
    fontSizeRef.value = 3;
};

//main logic
const modifyText = (command, defaultUi, value) => {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

//link
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    //if link has http then pass directly else add https
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

imageButton.addEventListener("click", () => {
    let alt = prompt('Please enter image alt text:');
    if (alt !== null) {
        let url = prompt('Please enter image URL:');
        if (url !== null) {
            let width = prompt('Enter image width:', 'auto');
            if (width !== null) {
                let imgTag = '<img src="' + (url.length > 0 ? url : '') + '"' +
                    (width !== 'auto' ? ' width="' + width + '"' : '') +
                    (alt.length > 0 ? ' alt="' + alt + '"' : '') +
                    '>';
                document.execCommand('insertHTML', false, imgTag);
            }
        }
    }
});

document.querySelector('#embedVideo').addEventListener('click', () => {
    let videoCode = prompt('Enter the YouTube video embed code:');
    if (videoCode !== null) {
        // You can further validate the videoCode to ensure it's a valid YouTube embed code.
        insertContentInDiv(videoCode);
    }
});

window.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'b' || event.key === 'B')) {
        event.preventDefault();
        document.querySelector('#bold').click();
    }
    if ((event.ctrlKey || event.metaKey) && (event.key === 'i' || event.key === 'I')) {
        event.preventDefault();
        document.querySelector('#italic').click();
    }
    if ((event.ctrlKey || event.metaKey) && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
        document.querySelector('#underline').click();
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'l' || event.key === 'L')) {
        event.preventDefault();
        document.querySelector('#justifyLeft').click();
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'e' || event.key === 'E')) {
        event.preventDefault();
        document.querySelector('#justifyCenter').click();
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'r' || event.key === 'R')) {
        event.preventDefault();
        document.querySelector('#justifyRight').click();
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'f' || event.key === 'F')) {
        event.preventDefault();
        document.querySelector('#justifyFull').click();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === '+') {
        event.preventDefault();
        document.querySelector('#superscript').click();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === '=') {
        event.preventDefault();
        document.querySelector('#subscript').click();
    }
    if ((event.ctrlKey || event.metaKey) && (event.key === 'o' || event.key === 'o')) {
        event.preventDefault();
        document.querySelector('#open').click();
    }
    if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
        document.querySelector('#save').click();
    }
});


//Highlight clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            //needsRemoval = true means only one button should be highlight and other would be normal
            if (needsRemoval) {
                let alreadyActive = false;

                //If currently clicked button is already active
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                //Remove highlight from other buttons
                highlighterRemover(className);
                if (!alreadyActive) {
                    //highlight clicked button
                    button.classList.add("active");
                }
            } else {
                //if other buttons can be highlighted
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};



saveButton.addEventListener("click", () => {
    // Function to save content as HTML
    if(confirm(`Do You want to save ${document.getElementById('fileName').value} file`)){
        const content = writingArea.innerHTML; // Get the content from the editor
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Saved Rich Text</title>
        </head>
        <body>
            ${content}
        </body>
        </html>
        `;
    
        // Create a Blob with the HTML content
        const blob = new Blob([htmlContent], { type: "text/html" });
    
        // Create a link to download the Blob as an HTML file
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = document.getElementById('fileName').value;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
});

// open a existing file to modify
openButton.addEventListener("click", () => {
    console.log("hi");
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
    
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const fileContent = event.target.result;
                const textInput = document.getElementById('text-input');
                textInput.innerHTML = fileContent;
                append = true;
            };
            reader.readAsText(file);
    }});
  
});


window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};

window.onload = initializer;

console.log(`   _____                  __                   ___________          .__                      __    .__      .__ 
  /  _  \\   _______      |__|  __ __    ____   \\__    ___/ _______  |__| ______   _____    _/  |_  |  |__   |__|
 /  /_\\  \\  \\_  __ \\     |  | |  |  \\  /    \\    |    |    \\_  __ \\ |  | \\____ \\  \\__  \\   \\   __\\ |  |  \\  |  |
/    |    \\  |  | \\/     |  | |  |  / |   |  \\   |    |     |  | \\/ |  | |  |_> >  / __ \\_  |  |   |   Y  \\ |  |
\\____|__  /  |__|    /\\__|  | |____/  |___|  /   |____|     |__|    |__| |   __/  (____  /  |__|   |___|  / |__|
        \\/           \\______|              \\/                            |__|          \\/               \\/      `);