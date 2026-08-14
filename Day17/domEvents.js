// Day 17 - DOM Events
// Note: Run this in a browser (open HTML/Day17/eventReady.html), DON'T use Node.js.

// Problem 1: Add a click event to a button that shows an alert "Button Clicked!".

const clickBtn = document.getElementById("click-btn");
if (clickBtn) {
    clickBtn.addEventListener("click", function () {
        alert("Button Clicked!");
    });
}


// Problem 2: Add a mouseover event to a div that changes its background color.

const hoverBox = document.getElementById("hover-box");
if (hoverBox) {
    hoverBox.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#66ffd4";
    });
    hoverBox.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    });
}

// Problem 3: Add a keydown event to an input field that logs the pressed key

const keyboardInput = document.getElementById("keyboard-input");
if (keyboardInput) {
    keyboardInput.addEventListener("keydown", function (event) {
        console.log("Pressed key:", event.key);
        const keyOutput = document.getElementById("key-output");
        if (keyOutput) {
            keyOutput.textContent = event.key;
        }
    });
}


// Problem 4: Add a double-click event to a paragraph that changes its text.

const dblParagraph = document.getElementById("dbl-paragraph");
if (dblParagraph) {
    dblParagraph.addEventListener("dblclick", function () {
        this.textContent = "Double-click hua! Text change ho gaya.";
    });
}


// Problem 5: Create a counter button: each click increases the count and displays it.
let count = 0;
const counterBtn = document.getElementById("counter-btn");
if (counterBtn) {
    counterBtn.addEventListener("click", function () {
        count++;
        this.textContent = "Count: " + count;
        const counterOutput = document.getElementById("counter-output");
        if (counterOutput) {
            counterOutput.textContent = count;
        }
    });
}

// Problem 6: Add a change event to a dropdown (select) that logs the selected value.
const citySelect = document.getElementById("city-select");
if (citySelect) {
    citySelect.addEventListener("change", function () {
        const selectedCity = this.value;
        console.log("Selected city:", selectedCity);
        const cityOutput = document.getElementById("city-output");
        if (cityOutput) {
            cityOutput.textContent = selectedCity;
        }
    });
}


// Problem 7: Add a submit event to a form that prevents default submission and logs the input values.

const myForm = document.getElementById("my-form");
if (myForm) {
    myForm.addEventListener("submit", function (event) {
        event.preventDefault(); // page reload ruk jata hai
        const inputValue = document.getElementById("form-input").value;
        console.log("Submitted value:", inputValue);
    });
}


// Problem 8: Toggle a class on an element when a button is clicked (show/hide).
const toggleBtn = document.getElementById("toggle-btn");
const toggleBox = document.getElementById("toggle-box");
if (toggleBtn && toggleBox) {
    toggleBtn.addEventListener("click", function () {
        toggleBox.classList.toggle("hidden");
    });
}
