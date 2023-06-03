function writeMessage() {
    var messages = [
        "It's hard to say goodbye, but I know you have to go. I'll miss you so much, but I'll always be here for you. Good luck in your new journey.",
        "I'm so grateful for the time we've had together. You've taught me so much, and I'm a better person because of you. I'll miss you every day.",
        "I know that this is a new beginning for you, and I'm excited to see what the future holds. I'm so proud of you, and I know that you'll do great things.",
        "I'm going to miss you so much. You've been such a great friend and colleague. I'll never forget the time we spent together. Good luck in your new job!",
        "I'm so sad to see you go, but I know that you're going to do great things. You're a talented and dedicated person, and I know that you'll be successful in anything you do. Good luck!",
        "Farewell is such sweet sorrow.",
        "It is not the goodbye that hurts the most, it's the flashback that comes unexpectedly.",
        "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
        "Farewells are not forever. Goodbyes are not the end. If there is love, there will always be a tomorrow.",
        "It's not the end of the world, but you might feel like it is. It's okay to feel sad, angry, or confused. Just know that you're not alone. Everyone goes through this at some point in their lives.",
        "It's okay to cry. It's okay to be sad. It's okay to feel whatever you're feeling. Just don't let those feelings consume you. Let them out, and then move on.",
        "This is just a chapter in your life. It's not the end of the book. There are many more chapters to come, and they're going to be even better than this one."
    ];

    var val = Math.floor(Math.random() * messages.length);
    var message = messages[val];
    var i = 0;
    var speed = 50;
    text.innerHTML = "";
    function typeWriter() {
        if (i < message.length) {
            text.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById('btn').style.visibility = "visible";
        }
    }
    typeWriter();
}

function fun() {
    document.getElementById('part1').style.display = "none";
    document.getElementById('part2').style.display = "block";
    console.log("done");
}  

