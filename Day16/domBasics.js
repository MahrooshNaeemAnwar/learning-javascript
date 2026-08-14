// Day 16 - DOM Basics
// Note: Run this in a browser console, or create an HTML file to test.

// Problem 1: Select an element by its ID using getElementById and change its text.
const title = document.getElementById('title');
if (title) {
  title.textContent = 'New Title';
}

// Problem 2: Select elements by class name using getElementsByClassName and change their color.
const paras = document.getElementsByClassName('para');
for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = 'blue';
}

// Problem 3: Use querySelector to select the first paragraph and change its font size.
const para1 = document.querySelector('p');
if (para1) {
  para1.style.fontSize = '24px';
}

// Problem 4: Use querySelectorAll to select all list items and add a border to each.
const items = document.querySelectorAll('li');
items.forEach(li => li.style.border = '2px solid black');

// Problem 5: Create a new div element using createElement and add it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = 'New Div';
document.body.appendChild(newDiv);

// Problem 6: Set the innerHTML of a div to contain a heading and a paragraph.
const container = document.getElementById('container');
if (container) {
  container.innerHTML = '<h2>Sub Heading</h2><p> text </p>';
}

// Problem 7: Change the src attribute of an image element.
const image = document.getElementById('image');
if (image) {
  image.src = 'new.jpg';
  //OR
  image.setAttribute('src', 'new.jpg');
}

// Problem 8: Add a CSS class to an element using classList.
const box = document.querySelector('.box');
if (box) {
  box.classList.add('active');
}