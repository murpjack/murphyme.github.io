---
layout: post
title: HTTP-requests
---

As soon as I had the epiphany that the internet is just a big old jumble sale of data exchanges, my life definitely changed for the better.  
The internet is like a jumble sale with lots of requests and responses, but without any stressful haggling!  
Let's imagine that we, the internet user are a child at the market with Mum and Dad. A common individual transaction might involve a **client**, who is a little like a parent, and the **server**, a man, possibly called Dennis, who is selling his products, which maybe a collection of books.
Hopefully this isn't too abstract and helps to explain http-requests.  

Each http-request needs a client and a server. A client is often a web browser and a server can be an application on a computer that hosts a website.  
When a browser wants to get information from somewhere else on the web it sends a **request** to a specific location (URL) and waits for a **response**, much like our child who wants something and has a parent communicate with our friend Dennis.  

For each http-request there will be a **request** and a **response**. Here are some methods for handling our interaction:  

-   **GET** - Requests data from a specified resource.  

-   **POST** - Sends data to a server to create or update a resource  

-   **PUT** - Sends data to a server to create or update a resource  
          It's different to a POST request because it is Idempotent - a put request can be made multiple times and produce the same result.   

-   **HEAD** - Asks only for information about the document.   

-   **DELETE** - Deletes data from a resource.  

-   **OPTIONS** - Describes communication options for a resource.

    note. This [video](https://youtu.be/6dVNdFwqeKs) explains more about Idempotence...and cows.




**GET** and **POST** are the most common methods in use.

Important things to remember about each method:

-  A **GET** request  
    +  can be Cached and can also be Bookmarked,
    +  remains in the browser,  
    +  should not be used for dealing with sensitive information,
    +  has length restrictions,  
    +  cannot modify data the get

-  A **POST** request  
        +  can never be Cached or Bookmarked,
        +  does not remain in the browser,  
        +  has no restrictions to data length



Hopefully this is a step towards http-request mastery. Please leave comments.
