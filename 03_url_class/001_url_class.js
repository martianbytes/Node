


const myurl = new URL("https://example.com:8080/products/search?category=shoes&page=2#top")


console.log(myurl.href)
console.log("The origin is ",myurl.origin)
console.log("The protocol is ",myurl.protocol)
console.log("The hostname is ",myurl.hostname)
console.log("The port is ",myurl.port)
console.log("The search is ",myurl.search)
console.log("The searchParams is ",myurl.searchParams)
console.log("The hash is ",myurl.hash)