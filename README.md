Apr-21

1. Understanding of HTML, CSS and introduction of JS.

Q. What is HTML?
-> Hypertext Markup Language. It's a language used to create (design + develop) Webpages (websites). It is for Front End.

HTML Tags
<html> -> Opening Tag
</html> -> Closing Tag (Ending Tag)
<p>Hello everyone</p>


Task -> Write Hello World in HTML.

Q. What is the difference between a head tag and a body tag?
-> Head is used to have the header content (Such as title, CSS links, meta, favicon). Body is used to contain the data which will be shown in the browser. Head is the first block of the page.


Developer Console. (Inspector, Developer Tools).
-> It's built inside the browser only, used to inspect the source code of any website.
1. Right Click > Inspect.
2. F12 (Fn + F12) OR Shift + Ctrl + I
3. Menu > More > Developer Tools.

Elements inside HTML.

1. What is difference between HTML Elements and HTML Tags?

<p>Hello World</p>
Tag -> <p>
Element -> Opening Tag + Content + Closing Tag -> <p>Hello World</p>

Types of Tags
Self Closing -> <br /> <img /> <hr /> <input />
Separate Closing -> <head></head> <body></body> <b></b> <i></i> <div></div> <span></span> <script>

a. Paragraph tag <p> -> Regular text display.
b. Heading tag <h1> to <h6> -> Used to show the heading (h1 is biggest, h6 is smallest).
c. division tag <div> -> Used to divide the content of the webpage into different parts.
d. Table tag <table> -> Used to show the data in a structured way (in terms of rows and columns, like a matrix).

thead -> Header of the table.
tbody -> Body of the table.
tfoot -> Footer of the table.

tr -> Creates a new ROW.
th -> Put a cell in the header.
td -> Put a cell in the regular body/footer.

input tag -> Used to take input from the user.
input types:

text
color
number

Documentation -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

Website -> https://developer.mozilla.org

Assignment
Try to build your own webpage.
It can include things like
-> Your name
-> Your profile picture
-> Education background (Marks maybe?)
-> Personal Background
-> Phone Number / Email

Further Reading
-> https://colorhunt.co
-> https://www.lambdatest.com/blog/how-to-use-css-breakpoints-for-responsive-design/


---
# Apr-22

Q. What is CSS?
-> Cascading Style Sheet is used to style the webpages and websites. (Look and feel).

Ref -> https://developer.mozilla.org/en-US/docs/Web/CSS

Task in hand for today:
-> Building a College Admission Form using HTML and CSS.

-> Name
-> Phone Number
-> Email
-> Date of Birth
-> Address
-> Parents Name (Father and Mother)
-> Class 10th Marks and Class 12th Marks
-> School Name (12th)
-> Gender
-> Guardian Name
-> Guardian Phone Number
-> Interests




Feedback (Idea)

Live Server
-> It will AUTO refresh the browser.
-> Makes development easy.

- Comments
-> These are part of the code which the computer will not execute but they are helpful for human understanding.

- placeholder
-> Used as a helper text to tell which input we are expecting.

- CSS Selector?
-> Like a set of rules. Any element which matches this rule, will get the style applied. (Selects the element, based on some certain conditions).

Tag Type Selector -> Select based on the tag.
Class Selector -> Select by the class.

Assignment:
-> Change the stye a bit more
-> Font
-> Size
-> Background Color / image
-> Pseudo properties -> Hover, animation.

Custom Font -> https://fonts.google.com/



# Apr 23

-> Intro to JS
-> Variables
-> Data types
-> Functions
-> Object and Arrays
-> promises and fetch.
-> Intro to react.


Download -> Node JS -> https://nodejs.org/en/download/


Q. What is Javascript?
-> Java NOT EQUAL TO Javascript.
-> It is a programming language used to add functionality to any website or webpage.

Output in JS
-> console.log("Hello World!");

Q. What are variables?
-> Variables are containers to store some data. This data can change in the future as well.

Q. What is the container where I can assign once and never update?
-> constant -> It does not change.

How to do these in JS.
-> let <variable_name> = <value>
-> const <constant_name> = <value>


const college_name = "KITS";
console.log("Hello");
console.log(college_name);

Datatypes in JS
-> number
-> strings
-> boolean
-> arrays and objects

Further Reading -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

Q. Taking an input.
prompt("Hint")

Q. functions in JS

function <function_name> (<parameters>) {
  //The set of instructions
}

//Better
const <function_name> = (<parameter>) => {
 return <value>
}


Q. What is the difference between an argument and a parameter?

-> parameters are given in the function definition. Argument is in the function invocation. (When we call the function, we pass the arguments.)
-> When we write a function definition, we take the parameters.


Creating a simple react application

> npx create-react-app hello-react

After installation is done.

> cd hello-react (cd <project-name>)
> npm start

> localhost:3000

React is maintained by Facebook.
React has a good community.
React is lightweight (Not much code by default). (easy to get started).
React is popular.


Assignment
-> Migrate your form which we made yesterday from HTML to the React App.

# Apr-30-2022

1. More Concepts of React.

Components:
Its a collection of HTML elements with some JS.
It is reusable.

Functional Components.

//Shortcut for component -> rafce.
//Boilerplate for all the component:

import React from 'react'

const Homepage = () => {
  return (
    <div>Homepage</div>
  )
}

export default Homepage

Extension for React Shortcut - https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

JSX -> JavaScript + XML (In react, we use JavaScript + HTML)

Task -> Create an application to get the list of users from reqres and show in the frontend.

React Hooks -> They give additional functionality to the React Applications. They let you manage states and props easily.

Assignment:
Chage the li and use table.
Currently, we are showing a LIST of all the users.
Task is to change it and show th TABLE with the following information.

index, Profile Picture, First name, Last Name, Email


# May-02, 2022

Backend (NodeJS and how to write APIs).

NodeJS - An environment where we can run JS code without the need of a browser.

express - This is used to send the data from the backend. This data can be fetched by the fetch function in the frontend.

nodemon - Backend Equivalent to the Live Server for frontend.

NPM - Node Package Manager -> Used to manage the additionally installed packages.

To get started with backend,
1. `npm init`
2. `npm install express`
3. `npm install nodemon --save-dev`

To use nodemon, go to package.json file and inside scripts, write:
"dev": "nodemon ./index.js",

To start the server, use command `npm run dev`

Q. What is API?
-> Application Programming Interface -> It is a way (interface) using which two pieces of software can communicate with each other.

Query Parameter -> ?key=value&another_key=anothervalue
// ?num1=10&num2=30;


HTTP Request Methods:
1. Difference between GET and POST and where to use what?
-> When you want to get some data from the server/backend. GET.
-> When you want to SEND some data from the browser to the server/backend. POST.

Install CORS -> CORS allow to tell which frontend can access your backend API.
-> `npm install cors`

CORS -> Cross Origin Resource Sharing.
frontend -> localhost:3000
backend  -> localhost:8080

# May-04
-> Create the Project with boilerplate code.
-> CORS.
-> Wireframing -> The process of designing the website's frontend. Sketch / Drawing of how the website should look like.
-> Start with the Frotend app.


# May-05
-> Introduce Database, what is Database? What does it do? Why is it needed? Different Database Management Systems.

-> Database -> A DB is a collection of organized data. The purpose is to store and retrieve that data easily. Manage that data easily.
-> Why do we need a DB? To store some data which can be later retrieved. To organize, structure and give any relation between the various pieces of information.
DBMS -> Database Management System. 
It is a piece of software which is used simply manage any database. Manage includes a lot of things, read and write (Create Read Update Delete, CRUD), validation, data typing, security (Authorization), backup, etc.

-> What are various DB Management Systems available?
-> MySQL, Postgres, SQLite, Oracle DB, MongoDB, Firestore, MicrosoftSQLServer


-> A (piece of) Software === Set of Programs
-> ACID / BASE in DBMS.

-> Introduce MongoDB.
-> It is one of the DB Management System. It is used as a NoSQL, it feels like a JSON database.
BSON - Read more if interested.

MongoDB benefits:
-> It is in JSON, that means lesser conversion.
-> It is dynamic, Non Structured.
-> Powerful query processing.
-> Easy to scale. (Cost efficient)

Q. Is MongoDB ACID Compliant?

-> Setup and installation. (Local as well as cloud).


-> Basic operation on Mongo DB. (Connecting the Admission form).
-> Connecting Admission Form, involving Backend and Frontend changes as well.
-> Make the functionality to show the list of all students.

Username: kits_username
Password: kits_password

mongoose


# May-06, 2022
-> React Router, basic setup and working of react router.
-> npm install react-router-dom@6
-> CSS -> display: block (Take the whole available width) and display: inline (Take only the width of the content inside).


# May-09, 2022
-> Make basic Create and Read operations on MongoDB.
-> Connect the Application Form so when I submit the data, it should reflect on the DB.
-> Connect the Student List so it should show all the submissions from the databse.
-> Showing more information about the student on the student detail page.

# May-10, 2022
-> Work on the Detail Screen.
--> Show the detailed data of a single student
--> Allow updation of that student data.
-> Work on Responsiveness of the Frontend.
-> Start deployment on the internet (Hosting of our project).
-> Hosting on Netlify (https://www.netlify.com/)