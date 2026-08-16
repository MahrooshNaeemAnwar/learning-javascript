# Day 18 - Event Object & Propagation

This folder contains `eventPropagation.js`, a practice file that explores the **Event Object** and **Event Propagation** (bubbling, stopping, and delegation) in JavaScript.

## How to Run

This code must be executed in a **browser environment**, not in Node.js, because it relies on the `document` object and DOM elements.

1. Create (or open) an HTML file that contains the required elements below, and load `eventPropagation.js` via a `<script>` tag.
2. Open the page in your browser, click on the elements, and check the browser's **Console** (F12) for the `console.log` outputs.

## Required HTML Elements

The script assumes your HTML page contains the following elements:

| Element                          | Purpose                                      |
| -------------------------------- | -------------------------------------------- |
| `#parent` (div)                  | Outer container that observes bubbling       |
| `#child` (button)                | Inner button nested inside `#parent`         |
| `#list` (div)                    | Container with children having class `item`  |
| `a` (anchor tag)                 | Link whose default navigation is prevented   |
| `body`                           | Any click logs event type + coordinates      |

## Topics Covered

### 1. Event Bubbling
- When `#child` is clicked, the event also triggers `#parent`'s listener because events bubble up from the target to the root. The order of the alerts shows this bubbling behavior.

### 2. stopPropagation()
- `event.stopPropagation()` stops the event from traveling further up the DOM, so clicking `#child` only logs `child only` and the parent listener does **not** fire.

### 3. event.target vs event.currentTarget
- `event.target` — the element that was actually clicked (deepest element).
- `event.currentTarget` — the element the listener is attached to.

### 4. Event Delegation
- One listener is added to `#list`, and clicks on any child with the class `item` are handled via `event.target`, avoiding the need for a listener on each child.

### 5. preventDefault()
- `event.preventDefault()` stops the browser's default behavior. Here it prevents an anchor tag from navigating to a new page.

### 6. Event Object Properties
- `event.type` — the type of event fired (e.g. `click`).
- `event.clientX` / `event.clientY` — the mouse pointer's coordinates relative to the viewport.

## Notes

- `eventPropagation.js` is only a reference file; the exact HTML is not included, so you must provide the elements listed above.
- Use `stopPropagation()` carefully — it can also block other handlers that rely on bubbling (e.g. document-level listeners).
- Event delegation is more efficient than attaching many listeners when you have a large list of similar items.

## Suggested Improvements

- Replace the inline arrow functions with named functions for better reuse.
- Try passing `true` as the third argument of `addEventListener` to observe the **capturing** phase.
