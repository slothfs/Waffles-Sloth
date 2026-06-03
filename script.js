
function sayHello() {
    var msg = document.getElementById("msg");
    msg.innerText = "hello from sloth waffles";
}
function addFact() {
    var newFact = document.createElement("li");
    newFact.innerText = "waffles taste better with syrup";
    var list = document.getElementById("facts");
    list.appendChild(newFact);
}

function hideShow() {
    var img = document.getElementById("aboutImg");
    if (img.style.display == "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}


function toggleTheme() {
    var body = document.body;
    if (body.style.background == "black") {
        body.style.background = "#fff3d6";
        body.style.color = "#222";
    } else {
        body.style.background = "black";
        body.style.color = "white";
    }
}

function waffleCheck() {
    alert("yes waffles are great");
}
function handleToppingInput(input) {
    var output = document.getElementById("liveOutput");
    output.innerText = "You chose: " + input.value;
}