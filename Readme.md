# QuickCall

## What is QuickCall?
#### QuickCall empowers you to effortlessly define server-side functions and seamlessly invoke them on the client end, all without the need for explicit API definitions. This streamlined approach allows for efficient and direct communication between server and client, reducing the development overhead associated with traditional API setup.


## What you can do with this?
#### Elevate your coding experience with QuickCall, a compact powerhouse for seamless backend integration. Effortlessly call functions and define callbacks, simplifying your workflow without sacrificing precision. Dive into a world of efficiency and clarity—QuickCall redefines simplicity in coding.


## Motivation:

1. **Simplify API Definition:**
   - Eliminate the need for verbose API definitions.
   - Why spend extra time and effort defining APIs when QuickCall allows you to focus on functionality?

2. **Efficiency in Code:**
   - Reduce the complexity of fetching data from the backend.
   - Write concise and readable code without sacrificing performance.

3. **Seamless Client-Side Calls:**
   - Enable direct client-side invocation of server-side functions.
   - Why go through the hassle of writing separate client-side and server-side code when QuickCall facilitates direct function calls?

4. **Enhanced Reusability:**
   - Reuse backend functions seamlessly by wrapping them, with no need for explicit assignment to routes.
   - Why reinvent the wheel? With QuickCall, maximize the reuse of backend functions, leading to cleaner and more modular code.

## Goal:

1. **Streamlined Focus:**
   - Concentrate solely on the task at hand; QuickCall takes care of the networking intricacies.
   - Stay productive and focused on your application's logic while QuickCall manages the communication.

2. **Simplified Client-Server Interaction:**
   - Achieve a client-like experience when invoking server functions.
   - QuickCall bridges the gap between client and server, making the interaction as seamless as if the function were part of the client-side code.

3. **Effortless Integration:**
   - Integration made easy – no need to worry about complex networking setups.
   - QuickCall provides a straightforward mechanism for integrating backend functionality, allowing you to save time and resources.

4. **Code Consistency:**
   - Maintain code consistency by calling backend functions just like client-side functions.
   - Enjoy a unified coding experience across both client and server, leading to cleaner and more maintainable code.


##
### Client Side Example
```js
import QcClient from "quickcall"

const qc = QcClient("http://localhost:3002") // init the QuickCall Client

qc.sum(20, 30)
.then(output => console.log("output", output)) // output will be 50

```


### Server Side Example - Nodejs
```js
// importing the module
const express = require('express')
const cors = require("cors")
const app = express()
const port = 3002
var bodyParser = require('body-parser')

app.use(cors("*"))
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies


// Importing and initializing QuickCall for Server
const QcWrapper = require("quickcall").Server(app)



QcWrapper(sum) // important: wrapping the Sum function so that the QuickCall client can make the call
function sum(a, b){ // defining the function
    return a + b // return the sum of a+b to the client
}



// starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```


# Upcoming Feature Highlights

1. **Callback Function as an Argument:**
   - Elevate the extensibility of your code by seamlessly passing callback functions as arguments, fostering dynamic and adaptable behavior.

2. **Returning Callback Functions:**
   - Embrace modularity and encapsulation with the ability for functions to return callback functions, promoting a structured and maintainable codebase.

3. **Robust Error Handling:**
   - Ensure the resilience and stability of your application by incorporating a robust error-handling mechanism, allowing for effective management of unforeseen scenarios.