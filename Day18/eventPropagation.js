// Day 18 - Event Object & Propagation
// Note: Run this in a browser console with an HTML file.

// Problem 1: Create a parent div and a child button. Add click events to both. Observe the order of alerts (bubbling).
// Note: Problem 2 adds stopPropagation() on the same #child, which blocks bubbling here. To observe bubbling,
// test Problem 1 and Problem 2 on separate HTML pages or separate elements.
document.getElementById('parent').addEventListener('click',()=>console.log('parent button clicked'));
document.getElementById('child').addEventListener('click',()=>console.log('child button clicked'));
// Problem 2: Use stopPropagation to prevent the parent's event from firing when the child is clicked.
document.getElementById('parent').addEventListener('click' , ()=>console.log('parent'));
document.getElementById('child').addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('child only');
});
// Problem 3: Use event.target to identify which element was clicked inside a container.
document.getElementById('parent').addEventListener('click', (e) => {
    console.log('clicked on:',e.target.tagName);
});

// Problem 4: Use event.currentTarget to get the element the listener is attached to.
document.getElementById('parent').addEventListener('click', (e) =>{
    console.log('currentTarget:', e.currentTarget.id);
});

// Problem 5: Use event delegation: add one click listener to a parent and handle clicks on multiple children.
document.getElementById('list').addEventListener('click', (e) =>{
    if(e.target.classList.contains('item')){
        console.log('clicked on:',e.target.textContent);
    }
});
// Problem 6: Prevent default behavior of an anchor tag using preventDefault.
document.querySelector('a').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('Link Default Behavior Stopped');
});
// Problem 7: Log the event type, clientX, and clientY coordinates when a user clicks anywhere on the page.
document.addEventListener('click', (e)=>{
    console.log('Type:',e.type,'| X:',e.clientX, '| Y:',e.clientY);
});