# Day 17 - DOM Events

This folder contains `domEvents.js`, a practice file that introduces **DOM Events** in JavaScript.

## How to Run

This code must be executed in a **browser environment**, not in Node.js, because it relies on the `document` object.

1. Open `HTML/Day17/eventReady.html` in your browser. It already loads `domEvents.js` via a `<script>` tag.
2. Interact with the page (click, hover, type, etc.) and check the browser's **Console** (F12) for the `console.log` outputs.

## Required HTML Elements

The script assumes your HTML page contains the following elements (all present in `eventReady.html`):

| Element                    | Purpose                                    |
| -------------------------- | ------------------------------------------ |
| `#click-btn` (button)      | Shows an alert on click                    |
| `#hover-box` (div)         | Background color changes on hover          |
| `#keyboard-input` (input)  | Logs the pressed key on keydown            |
| `#key-output` (span)       | Displays the last pressed key              |
| `#dbl-paragraph` (p)       | Text changes on double-click               |
| `#counter-btn` (button)    | Counter increases on each click            |
| `#counter-output` (span)   | Displays the current count                 |
| `#city-select` (select)    | Logs the selected value on change          |
| `#city-output` (span)      | Displays the selected city                 |
| `#my-form` (form)          | Stops default submit and logs the value    |
| `#form-input` (input)      | The value submitted by the form            |
| `#toggle-btn` (button)     | Toggles a class on `#toggle-box`           |
| `#toggle-box` (div)        | Shown/hidden via the `hidden` class        |

## Topics Covered

### 1. Event Listeners
- `addEventListener(event, callback)` — attaches a handler to an element. It never overrides other listeners on the same element.

### 2. Event Types Covered
- `click` — fires when an element is clicked.
- `mouseover` / `mouseout` — fire when the mouse enters / leaves an element.
- `keydown` — fires when a key is pressed inside a focused element.
- `dblclick` — fires on a double-click.
- `change` — fires when a `<select>` (or input) value changes.
- `submit` — fires when a form is submitted.

### 3. The Event Object
- `event.key` — the key that was pressed (`event` is passed automatically to the callback).
- `event.preventDefault()` — stops the browser's default behaviour (e.g. page reload on form submit).

### 4. The `this` Keyword in Handlers
- Inside a normal `function`, `this` refers to the element the listener is attached to:
  - `this.style.backgroundColor` — modify the element's inline style.
  - `this.textContent` — change the element's text.
  - `this.value` — read the current value of the element.

### 5. Working with Classes
- `classList.toggle('hidden')` — adds the class if it's missing, removes it if it's present (perfect for show/hide).

## Notes

- Always call `event.preventDefault()` in a submit handler if you don't want the page to reload.
- The `event` parameter is provided by the browser; you don't pass it manually.
- The HTML and JS are paired: `eventReady.html` loads `domEvents.js` at the end of the `<body>`.

## Suggested Improvements

- Use `event.target` instead of `this` for a more explicit way to refer to the triggered element.
- Replace the anonymous functions with named functions to make the code easier to reuse.
