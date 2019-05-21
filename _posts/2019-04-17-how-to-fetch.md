---
layout: post
title: How to fetch
---

This week I have been going through some old code and trying to improve page performance.  
One significant way to improve performance on a web page or application is by looking at interactions between any javascript and the DOM. This can be a way to make quick improvements to overall performance on a site.    

Google offers a tool called _testmysite_, which does just that. They let you know site speed and offer improvements.  
<https://www.thinkwithgoogle.com/intl/en-gb/feature/testmysite>

Also, JSperf (<https://jsperf.com/>) allows you to see how fast different cases perform on different browsers.  
You can find test cases for basic methods and ideas with a cursory search and adding jsperf to your query.  

This article is just a few ways to edit styles/ select elements in the DOM using javascript and css. In no particular order here are some ideas:   

1.  **Use CSS selectors to style elements**  
      Dynamically styling the odd DOM element is unavoidable. For these occasions updating we can add/remove classes and use nested or relative css selectors to control any changes.  
      **JS**  

    ```js
    const baseCurrency = "?currency=GBP";
    const url = "https://api.coinbase.com/v2/exchange-rates" + baseCurrency;  

   fetch(url)
    .then(function(response) {
      return response.json();
   })
    .then(function(data) {
    console.log(data);
    });  
    ```

      Alternatively we can achieve the same result by styling this container and pseudo using css a class.  

      **CSS**  

    ```css
    .container {  
      border: 2px solid black;  
      margin-top: 0px;  
    }  
    .container:after {  
      color: black;  
    }

    .container--error {  
      border: 2px solid red;  
      margin-top: 10px;  
    }  

    .container--error:after {  
    color: red;  
    }  
    ```

    By using class styles, stored in css, it is more clear what our is happening too.  
    Here is a list of selectors to get you started:  
    <https://www.w3schools.com/cssref/css_selectors.asp>

2.  **Select an ID, node or class and traverse**  
    According to a few jsperf tests the best way to select an element is by selecting an object by its ID or node (eg. div, or table), or class and traversing to nearby elements.  
     The reason that this is better than selecting individual elements is that there is just one interaction between the DOM and javascript script.    
    <https://javascript.info/dom-navigation>


3.  **Store references to DOM objects in variables**  
    If you plan to select an element more than than once you should consider storing a reference of it in a variable. This means that your javascript know what is looking for and where it can find it.

This article only covers a couple of ways to be more performant, and is by no means exhaustive. Please leave a comment below with any other suggestions.
