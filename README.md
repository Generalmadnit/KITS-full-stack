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