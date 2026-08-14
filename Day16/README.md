# Day 16 - DOM Basics

This folder contains `domBasics.js`, a practice file that introduces the fundamentals of the **Document Object Model (DOM)** in JavaScript.

## How to Run

This code must be executed in a **browser environment**, not in Node.js, because it relies on the `document` object. You can:

1. Open your browser's Developer Tools (F12) and paste the code into the **Console** tab.
2. Or create an HTML file that includes the required elements, load it in the browser, and run the script.

## Required HTML Elements

The script assumes your HTML page contains the following elements:

| Element                     | Purpose                                  |
| --------------------------- | ---------------------------------------- |
| `#title` (any element)      | Text is replaced via `textContent`       |
| `.para` (multiple)          | Text color changed to blue               |
| `<p>` (first one)           | Font size changed to 24px                |
| `<li>` (list items)         | Each gets a 2px black border             |
| `<body>`                    | A new div is appended here               |
| `#container` (div)          | Its `innerHTML` is replaced              |
| `#image` (image element)    | Its `src` attribute is changed           |
| `.box` (any element)        | CSS class `active` is added              |

## Topics Covered

### 1. Selecting Elements
- `getElementById('id')` — selects a single element by its ID.
- `getElementsByClassName('class')` — selects all elements with a class (returns a live HTMLCollection, iterated with a `for` loop).
- `querySelector('p')` — selects the **first** element matching a CSS selector.
- `querySelectorAll('li')` — selects **all** matching elements (returns a NodeList, iterated with `forEach`).

### 2. Modifying Content and Style
- `textContent` — changes the text inside an element.
- `style.color`, `style.fontSize`, `style.border` — modify inline CSS styles.
- `innerHTML` — sets the HTML content of an element.

### 3. Creating and Adding Elements
- `createElement('div')` — creates a new element.
- `appendChild(element)` — adds an element to the end of another element.

### 4. Working with Attributes
- Direct property assignment: `element.src = 'new.jpg'`
- `setAttribute('src', 'new.jpg')` — the more explicit, equivalent approach.

### 5. CSS Classes
- `classList.add('active')` — adds a CSS class to an element.

## Notes

- A single element can be selected and modified directly.
- Collections (`HTMLCollection`, `NodeList`) must be iterated (e.g. with `for` or `forEach`) before modifying each item.
- `setAttribute` and direct property assignment are two valid ways to change an attribute.

## Suggested Improvements

- Add null checks (e.g. `if (title)`) so the script doesn't throw if an element is missing.
- Use consistent semicolons and spacing for cleaner code.
