const body = {
    title: 'Rahul', 
    body: 'bar', 
    userId: 101
}
// Post -> response
//response.writeHead -> writing header
// response.write => body
// response.writeEnd=> write the end and close the connection
async function main()  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {method: 'POST', 
            headers: {
                'User-Agent': 'undici-stream-example',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    );
    const data = await response.json();
    console.log(data);
}

main().catch(console.error)