# Day 28 - Fetch API & HTTP Requests

Practice file for JavaScript **Fetch API** and **HTTP Requests**. All examples are tested against the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API.

> **Note:** This file can run in the browser console or Node 18+.

---

## Problems Covered

### Problem 1: GET Request (Promise)
Fetch post data using `fetch()` and print it to the console.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log('post title:', data.title);
    console.log('post content:', data.body);
  })
```

### Problem 2: Error Handling (.catch)
Handle fetch errors using `.catch()`.

```js
.catch((error) => {
  console.error('Caught error:', error);
});
```

### Problem 3: GET Request (async/await)
Same GET request but using `async/await` syntax.

```js
async function fetchPostData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log('Post title:', post.title);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```

### Problem 4: POST Request
Send a `POST` request with JSON data to create a new post.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  Method: 'POST',
  headers: { 'content_type': 'application/json' },
  body: JSON.stringify(newPost)
})
```

### Problem 5: PUT Request
Send a `PUT` request to update an existing post.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  Method: 'PUT',
  headers: { 'content_type': 'application/json' },
  body: JSON.stringify(updatePost)
})
```

### Problem 6: DELETE Request
Send a `DELETE` request to remove a post.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  Method: 'DELETE',
  headers: { 'content_type': 'application/json' },
  body: JSON.stringify(updatePost)
})
```

### Problem 7: Get Users List (Array Loop)
Fetch the users list and print only their names using a `forEach` loop.

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      console.log(user.name);
    });
  })
```

### Problem 8: HTTP Error Handling (response.ok)
Handle HTTP errors (like 404) manually in fetch. `fetch` only rejects on network errors, not on HTTP status codes, so you must check `response.ok`.

```js
fetch('https://jsonplaceholder.typicode.com/posts/999')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error('Fetch failed:', error.message);
  });
```

---

## Key Concepts

| Concept | Description |
|---------|-------------|
| `fetch()` | Built-in browser function for making HTTP requests |
| `.then()` | Runs when the Promise resolves |
| `.catch()` | Handles errors |
| `async/await` | Cleaner syntax for working with Promises |
| `response.json()` | Parses the response body as a JSON object |
| `response.ok` | Boolean — `true` if status is 200–299, `false` otherwise |
| `JSON.stringify()` | Converts an object to a JSON string (used in request body) |

---

## HTTP Methods Used

| Method | Purpose |
|--------|---------|
| `GET` | Read data (default) |
| `POST` | Create a new resource |
| `PUT` | Update an existing resource |
| `DELETE` | Remove a resource |

---

## API Used

**JSONPlaceholder** — Free fake REST API for testing and prototyping.
- Posts: `https://jsonplaceholder.typicode.com/posts`
- Users: `https://jsonplaceholder.typicode.com/users`
