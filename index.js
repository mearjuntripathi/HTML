function writeAnswer() {
    var _CONTENT = [
        "a passionate software engineer!",
        "As a fresh graduate with a strong foundation",
        "Having a month of Internship Experience",
        "in Object-Oriented Programming (OOP),",
        "Data Structures and Algorithms (DSA),",
        "and Database management,",
        "Backend Development with PHP, Node/Express, Golang",
        "I'm ready to embark on a journey",
        "in the world of technology.",
        "My curiosity drives me to solve complex problems",
        "and create elegant solutions.",
        "Explore my portfolio to see how I've applied",
        "my skills and knowledge to real-world projects.",
        "Let's connect and discuss how I can contribute",
        "to your next software development endeavor.",
        ];
    // Current sentence being processed
    var _PART = 0;
    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;
    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;
    // Element that holds the text
    var _ELEMENT = document.querySelector("#message p");
    // Implements typing effect
    function Type() {
        var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;
        // If full sentence has been displayed then start to delete the sentence after some time
        if (text === _CONTENT[_PART]) {
            clearInterval(_INTERVAL_VAL);
            setTimeout(function () {
                _INTERVAL_VAL = setInterval(Delete, 20);
            }, 1000);
        }
    }
    // Implements deleting effect
    function Delete() {
        var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;
        // If sentence has been deleted then start to display the next sentence
        if (text === '') {
            clearInterval(_INTERVAL_VAL);
            // If last sentence then display the first one, else move to the next
            if (_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
            _PART_INDEX = 0;

            // Start to display the next sentence after some time
            setTimeout(function () {
                _INTERVAL_VAL = setInterval(Type, 50);
            }, 200);
        }
    }
    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);
}

window.onload = function(){
    document.getElementById('nav').classList.add('dark');
    writeAnswer();
}

document.querySelector('#mode').addEventListener('click', ()=>{
    if(document.querySelector('#mode').innerHTML ==  '<i class="fa fa-moon-o fa-2x" style="color: white"></i>'){
        document.getElementsByTagName('body')[0].classList = 'dark';
        document.getElementById('nav').classList.add('dark');
        document.getElementById('nav').classList.remove('light');
        document.querySelector('#mode').innerHTML = `<i class="fa fa-sun-o fa-2x" style="color: yellow;"></i>`
    }else{
        document.getElementsByTagName('body')[0].classList = 'light';
        document.getElementById('nav').classList.add('light');
        document.getElementById('nav').classList.remove('dark');
        document.querySelector('#mode').innerHTML = `<i class="fa fa-moon-o fa-2x" style="color: white"></i>`   
    }
})


const bars = document.querySelector('.bars');
bars.addEventListener('click',function(){
    if(bars.innerHTML == '<img src="image/profile.JPG">'){
        document.getElementById('nav').classList.add('shownav');
        bars.innerHTML = '<i class="fa fa-times"></i>';
    }
    else{
        document.getElementById('nav').classList.remove('shownav');
        bars.innerHTML = '<img src="image/profile.JPG">'
    }
})

let length = document.querySelectorAll('.nav-link li a').length;
for(let i = 0 ; i < length ; i++){
    document.querySelectorAll('.nav-link li a')[i].addEventListener('click',function(){
        if(document.getElementById('nav').className.includes('shownav'))
            bars.click();
    })
}

document.querySelector('#connect').addEventListener('click',()=>{
    if(document.querySelector('.social').className.includes('hide')){
        document.querySelector('.social').classList.remove('hide');
    }
    else{
        document.querySelector('.social').classList.add('hide');
    }
})

// Get all anchor links and their corresponding divs
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const divs = Array.from(anchorLinks, link => {
  const targetId = link.getAttribute('href').substring(1);
  return {
    link,
    div: document.querySelector('.' + targetId),
  };
});

// Function to update the active link based on scroll position
function updateActiveLink() {
  const scrollPosition = window.scrollY;
  for (const { link, div } of divs) {
    const divTop = div.offsetTop;
    const divBottom = divTop + div.clientHeight;
    if (scrollPosition >= divTop && scrollPosition < divBottom) {
      // Remove "active" class from all links
      anchorLinks.forEach(anchor => anchor.classList.remove('active'));

      // Add "active" class to the link corresponding to the current div
      link.classList.add('active');
    }
  }
}

// Add scroll event listener to update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Initial update
updateActiveLink();