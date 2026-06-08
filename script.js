
function sayHello() {
    var msg = document.getElementById("msg");
    msg.innerText = "hello from sloth waffles";
}

function addFact() {
    var list = document.getElementById("facts");
    var newFact = document.createElement("li");
    newFact.innerText = "waffles taste better with syrup";
    list.appendChild(newFact);
}

function hideShow() {
    var img = document.getElementById("aboutImg");
    var current = img.style.display;
    if (current == "none") {
        img.style.display = "block";
    } 
    else {
        img.style.display = "none";
    }
}

function toggleTheme() {
    var body = document.body;
    var isDark = body.style.background == "black";
    
    if (isDark) {
        body.style.background = "#fff3d6";
        body.style.color = "#222";
    } 
    else {
        body.style.background = "black";
        body.style.color = "white";
    }
}

function waffleCheck() {
    alert("yes waffles are great");
}

function handleToppingInput(input) {
    var output = document.getElementById("liveOutput");
    var topping = input.value;
    output.innerText = "You chose: " + topping;
}

// load waffle facts from somewhere
function fetchWaffleFacts() {
    var url = 'https://api.api-ninjas.com/v1/riddles';
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var factDiv = document.getElementById("apiResults");
            var fact = data[0]?.riddle || "Waffles are awesome!";
            if (factDiv) {
                factDiv.innerText = "Fun fact loaded: " + fact;
            }
        })
        .catch(function(err) {
            console.log("API failed, using backup");
            var elem = document.getElementById("apiResults");
            if (elem) {
                elem.innerText = "Fun fact: Waffles have been around since the 15th century!";
            }
        });
}

function delayedWelcome() {
    setTimeout(function() {
        var msg = document.getElementById("msg");
        if (msg) {
            var current = msg.innerText;
            msg.innerText = current + " (delayed greeting after 2 seconds!)";
        }
    }, 2000);
}

var factIndex = 0;
var facts = [
    "Waffles originated in Belgium",
    "The first waffle iron was created in Belgium in the 1700s",
    "Americans eat like 600 million waffles per year",
    "Belgian waffles are lighter and crisper",
    "Waffle Day is August 24th",
    "They can be sweet or savory",
    "The grid thing is called pockets I think"
];

function rotatingFacts() {
    setInterval(function() {
        var elem = document.getElementById("rotatingFacts");
        if (elem) {
            var fact = facts[factIndex];
            elem.innerText = fact;
            factIndex = factIndex + 1;
            if (factIndex >= facts.length) {
                factIndex = 0;
            }
        }
    }, 5000);
}

window.onload = function() {
    fetchWaffleFacts();
    rotatingFacts();
};