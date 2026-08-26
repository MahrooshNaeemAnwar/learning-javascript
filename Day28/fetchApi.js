// Day 28 - Fetch API & HTTP Requests
// Note: Run in browser console (or Node 18+). Use https://jsonplaceholder.typicode.com/ for testing.

// Problem 1: Use fetch to GET data from https://jsonplaceholder.typicode.com/posts/1 and print it.
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log('post title:',data.title);
    console.log('post content:',data.body);
})

// Problem 2: Handle fetch errors using .catch().
.catch((error)=>{
    console.error('Caught error:',error);
});

// Problem 3: Use fetch with async/await to get data.
async function fetchPostData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const post=await response.json();
        console.log('Post title:',post.title);
        console.log('Post content:',post.body);

    }catch(error){
        console.error('Error:',error.message);
    }

}
fetchPostData();

// Problem 4: Send a POST request using fetch with JSON data.
const newPost={
    userId:1,
    title:'JavaScript Day28',
    body:'learning fetchAPI and HTTP requests'
};
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(newPost)
})
.then((response)=>response.json())
.then((data)=>{
    console.log('Server response:',data)
}).catch((error)=>{
    console.error('Error:',error.message)
});

// Problem 5: Send a PUT request to update data.
const updatePost={
    userId:2,
    title='New title:Day28 of learning JavaScript',
    body:'Updating post by using PUT'
}
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(updatePost)
})
.then((response)=>response.json())
.then((data)=>{
    console.log('Updated successfully',data)
}).catch((error)=>{
    console.error('Error:',error.message)
});

// Problem 6: Send a DELETE request.
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(updatePost)
})
.then((response)=>response.json())
.then((data)=>{
    console.log('Deleted successfully')
}).catch((err)=>{
    console.error('Error:',err)
});

// Problem 7: Get a list of users (https://jsonplaceholder.typicode.com/users) and print only their names.
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    data.forEach((user)=>{
        console.log(user.name)
    })
})
// Problem 8: Handle HTTP errors (like 404) in fetch. (fetch doesn't reject on HTTP errors - you need to check response.ok)
fetch('https://jsonplaceholder.typicode.com/posts/999')
.then((response)=>{
    if(!response.ok){
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
    }
    return response.json()
}).then((data)=>{
    console.log('Data:',data)
}).catch((error)=>{
    console.error('Fetch failed:',error.message)
})