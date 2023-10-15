This README provides an overview of the HTML, CSS, and JavaScript code provided. The code appears to be a web application for displaying and interacting with a list of animals. Below, you'll find a breakdown of the code structure and functionality.
Project Structure

The project consists of three main files: index.html, style.css, and script.js. The HTML file defines the structure and content of the web page, while the CSS file controls the styling, and the JavaScript file adds functionality and interaction.
HTML (index.html)

    The HTML file contains the basic structure of the web page.
    It includes a title, a link to an external CSS file (style.css), and a script reference to script.js.
    The main content is within the <body> element, which contains a section for displaying animals' information.

JavaScript (script.js)

    The JavaScript code adds dynamic functionality to the web page. It fetches data from an external source and populates the web page with animal information.
    The code listens for the "DOMContentLoaded" event, ensuring the JavaScript executes after the page has loaded.
    It defines an array of animal data, each with a name, image URL, and votes count.
    The fetchAndListAnimals function populates the animal list by making an API call to a local server (http://localhost:3000/characters). It then generates HTML elements for each animal and attaches event listeners to them.
    The fetchAndListAnimal function is used to fetch and display individual animal details (image and votes) when an animal is selected from the list.

 <!-- LICENSE -->
MIT License

Copyright (c) [2023] [James Kinyanjui]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
