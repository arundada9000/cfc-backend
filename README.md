# Backend Development with JavaScript and Node.js

A complete beginner-friendly README and teaching guide for students who are starting backend development using JavaScript, Node.js, npm, Express, file system modules, REST APIs, databases, authentication, and deployment basics.

This README is designed for teachers. You can use it as a classroom outline, self-study material, or a project-based course plan.

---

## Table of Contents

1. [Course Goal](#1-course-goal)
2. [What Students Should Know First](#2-what-students-should-know-first)
3. [What is Backend Development?](#3-what-is-backend-development)
4. [Frontend vs Backend](#4-frontend-vs-backend)
5. [How the Web Works](#5-how-the-web-works)
6. [What is Node.js?](#6-what-is-nodejs)
7. [Installing Node.js and npm](#7-installing-nodejs-and-npm)
8. [Checking Installation](#8-checking-installation)
9. [Terminal Basics](#9-terminal-basics)
10. [First Node.js Program](#10-first-nodejs-program)
11. [JavaScript Revision for Backend](#11-javascript-revision-for-backend)
12. [What is npm?](#12-what-is-npm)
13. [Creating a Node.js Project](#13-creating-a-nodejs-project)
14. [Understanding package.json](#14-understanding-packagejson)
15. [npm Scripts](#15-npm-scripts)
16. [Installing Packages](#16-installing-packages)
17. [node_modules and package-lock.json](#17-node_modules-and-package-lockjson)
18. [CommonJS and ES Modules](#18-commonjs-and-es-modules)
19. [Node.js Built-in Modules](#19-nodejs-built-in-modules)
20. [File System Module: fs](#20-file-system-module-fs)
21. [Path Module](#21-path-module)
22. [OS Module](#22-os-module)
23. [HTTP Module](#23-http-module)
24. [Creating a Basic Node.js Server](#24-creating-a-basic-nodejs-server)
25. [HTTP Methods and Status Codes](#25-http-methods-and-status-codes)
26. [Introduction to Express.js](#26-introduction-to-expressjs)
27. [Creating an Express Server](#27-creating-an-express-server)
28. [Routes in Express](#28-routes-in-express)
29. [Request and Response Objects](#29-request-and-response-objects)
30. [Middleware](#30-middleware)
31. [REST API Basics](#31-rest-api-basics)
32. [CRUD Operations](#32-crud-operations)
33. [Testing APIs with Postman or Thunder Client](#33-testing-apis-with-postman-or-thunder-client)
34. [Environment Variables with dotenv](#34-environment-variables-with-dotenv)
35. [Project Folder Structure](#35-project-folder-structure)
36. [Database Introduction](#36-database-introduction)
37. [MongoDB Basics](#37-mongodb-basics)
38. [Mongoose Basics](#38-mongoose-basics)
39. [Validation Basics](#39-validation-basics)
40. [Authentication Basics](#40-authentication-basics)
41. [Password Hashing with bcrypt](#41-password-hashing-with-bcrypt)
42. [JWT Authentication](#42-jwt-authentication)
43. [Authorization](#43-authorization)
44. [Error Handling](#44-error-handling)
45. [Security Basics](#45-security-basics)
46. [CORS](#46-cors)
47. [Logging with Morgan](#47-logging-with-morgan)
48. [File Upload Basics](#48-file-upload-basics)
49. [Deployment Basics](#49-deployment-basics)
50. [Git and GitHub Basics](#50-git-and-github-basics)
51. [Teaching Roadmap](#51-teaching-roadmap)
52. [Class Assignments](#52-class-assignments)
53. [Final Project: Student Management API](#53-final-project-student-management-api)
54. [Interview Questions for Students](#54-interview-questions-for-students)
55. [Recommended Practice Plan](#55-recommended-practice-plan)

---

# 1. Course Goal

By the end of this course, students should be able to:

- Understand what backend development is.
- Install and use Node.js and npm.
- Create a Node.js project from scratch.
- Use built-in Node.js modules such as `fs`, `path`, `os`, and `http`.
- Build a basic HTTP server.
- Build REST APIs using Express.js.
- Understand request, response, routes, middleware, and status codes.
- Connect a backend application to a database.
- Perform CRUD operations.
- Use environment variables.
- Implement basic authentication using password hashing and JWT.
- Organize backend code properly.
- Build and explain a complete backend project.

---

# 2. What Students Should Know First

Before learning backend development, students should understand basic JavaScript.

Required JavaScript topics:

- Variables: `let`, `const`, `var`
- Data types: string, number, boolean, null, undefined, object, array
- Functions
- Arrow functions
- Conditions: `if`, `else`, `switch`
- Loops: `for`, `while`, `for...of`, `forEach`
- Arrays and objects
- Destructuring
- Template literals
- Callbacks
- Promises
- `async` and `await`
- Basic error handling using `try...catch`

Teacher note:

If students are weak in JavaScript, spend at least 2 to 4 classes revising JavaScript before starting Node.js.

---

# 3. What is Backend Development?

Backend development means building the server-side part of an application.

The backend is not directly visible to the user. It works behind the scenes.

A backend usually handles:

- User login and registration
- Saving data
- Reading data
- Updating data
- Deleting data
- Business logic
- Database communication
- API creation
- Authentication and authorization
- Security

Example:

When a user logs into an app:

1. The frontend sends email and password to the backend.
2. The backend checks whether the user exists.
3. The backend compares the password.
4. The backend creates a login token.
5. The backend sends a response to the frontend.

---

# 4. Frontend vs Backend

| Frontend | Backend |
|---|---|
| Runs in the browser | Runs on the server |
| User can see it | User usually cannot see it |
| Uses HTML, CSS, JavaScript, React, Vue, etc. | Uses Node.js, Express, databases, APIs, etc. |
| Handles design and user interaction | Handles data, logic, security, and APIs |
| Example: login form | Example: login verification |

Simple explanation:

- Frontend asks for data.
- Backend provides data.
- Database stores data.

---

# 5. How the Web Works

A typical web application has three main parts:

```txt
Client / Browser  --->  Backend Server  --->  Database
```

Example request flow:

```txt
User clicks "View Profile"
        |
        v
Frontend sends request to backend
        |
        v
Backend checks user information from database
        |
        v
Backend sends profile data to frontend
        |
        v
Frontend displays profile page
```

Important terms:

## Client

The client is the browser, mobile app, or frontend that sends requests.

## Server

The server receives requests, processes logic, and sends responses.

## Database

The database stores application data permanently.

## API

API means Application Programming Interface.

In backend development, an API allows the frontend to communicate with the backend.

---

# 6. What is Node.js?

Node.js is a JavaScript runtime environment.

Normally, JavaScript runs inside the browser. Node.js allows JavaScript to run outside the browser.

With Node.js, we can:

- Create backend servers
- Work with files
- Build APIs
- Connect databases
- Create command-line tools
- Build real-world backend applications

Important point:

Node.js is not a programming language. JavaScript is the language. Node.js is the environment that runs JavaScript outside the browser.

---

# 7. Installing Node.js and npm

Steps:

1. Go to the official Node.js website.
2. Download the LTS version.
3. Install it on your computer.
4. npm will be installed automatically with Node.js.

LTS means Long Term Support. It is the stable version recommended for most students.

Tools students should install:

- Node.js LTS
- npm
- VS Code
- Postman or Thunder Client
- Git
- MongoDB Compass, optional but useful

---

# 8. Checking Installation

Open terminal or command prompt.

Check Node.js version:

```bash
node -v
```

Check npm version:

```bash
npm -v
```

If both commands show version numbers, installation is successful.

Example:

```bash
node -v
v20.11.0

npm -v
10.2.4
```

The exact version can be different. That is okay.

---

# 9. Terminal Basics

Students should know basic terminal commands.

## Check current folder

```bash
pwd
```

On Windows Command Prompt:

```bash
cd
```

## List files

Mac/Linux/Git Bash:

```bash
ls
```

Windows Command Prompt:

```bash
dir
```

## Create folder

```bash
mkdir backend-class
```

## Go inside folder

```bash
cd backend-class
```

## Go back one folder

```bash
cd ..
```

## Create file

Mac/Linux/Git Bash:

```bash
touch app.js
```

Windows Command Prompt:

```bash
type nul > app.js
```

Students do not need to master the terminal in one day. Teach commands gradually while building projects.

---

# 10. First Node.js Program

Create a file named `app.js`:

```js
console.log("Hello Backend Development");
```

Run it:

```bash
node app.js
```

Output:

```txt
Hello Backend Development
```

Teaching explanation:

- `console.log()` prints output.
- `node app.js` tells Node.js to run the file.
- This JavaScript is running outside the browser.

---

# 11. JavaScript Revision for Backend

Backend development uses many JavaScript concepts. These are especially important.

## Variables

```js
const appName = "Backend Class";
let studentCount = 20;

console.log(appName);
console.log(studentCount);
```

## Objects

```js
const student = {
  name: "Ram",
  age: 20,
  course: "Backend"
};

console.log(student.name);
```

## Arrays

```js
const students = ["Ram", "Sita", "Hari"];

students.forEach(function(student) {
  console.log(student);
});
```

## Arrow Functions

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));
```

## Promises

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```

## async and await

```js
async function getData() {
  try {
    const result = await Promise.resolve("Data loaded");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

Teacher note:

Backend code often uses asynchronous programming because reading files, calling APIs, and querying databases can take time.

---

# 12. What is npm?

npm means Node Package Manager.

npm helps us:

- Install packages
- Manage project dependencies
- Run scripts
- Share packages
- Create project configuration

A package is reusable code created by developers.

Examples of popular backend packages:

| Package | Use |
|---|---|
| express | Build servers and APIs |
| nodemon | Restart server automatically during development |
| dotenv | Use environment variables |
| mongoose | Work with MongoDB |
| bcrypt | Hash passwords |
| jsonwebtoken | Create and verify JWT tokens |
| cors | Allow frontend and backend communication |
| morgan | Log HTTP requests |
| multer | Handle file uploads |

---

# 13. Creating a Node.js Project

Create a new folder:

```bash
mkdir backend-class
cd backend-class
```

Initialize npm:

```bash
npm init
```

This asks questions and creates a `package.json` file.

For quick setup:

```bash
npm init -y
```

Create main file:

```bash
touch app.js
```

On Windows Command Prompt:

```bash
type nul > app.js
```

Run file:

```bash
node app.js
```

---

# 14. Understanding package.json

`package.json` stores project information.

Example:

```json
{
  "name": "backend-class",
  "version": "1.0.0",
  "description": "Learning backend with Node.js",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Important fields:

| Field | Meaning |
|---|---|
| name | Project name |
| version | Project version |
| description | Short project description |
| main | Entry file |
| scripts | Commands we can run |
| dependencies | Packages needed in production |
| devDependencies | Packages needed only during development |

---

# 15. npm Scripts

Scripts are shortcuts for running commands.

In `package.json`:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

Run start script:

```bash
npm start
```

Run dev script:

```bash
npm run dev
```

Important:

- `npm start` is a special script.
- Other custom scripts need `npm run`.

---

# 16. Installing Packages

Install Express:

```bash
npm install express
```

Short form:

```bash
npm i express
```

Install nodemon as a development dependency:

```bash
npm install nodemon --save-dev
```

Short form:

```bash
npm i nodemon -D
```

Uninstall a package:

```bash
npm uninstall express
```

Install all dependencies from `package.json`:

```bash
npm install
```

---

# 17. node_modules and package-lock.json

## node_modules

`node_modules` contains installed package files.

Do not manually edit this folder.

Do not upload `node_modules` to GitHub.

Add this to `.gitignore`:

```txt
node_modules
.env
```

## package-lock.json

`package-lock.json` stores the exact package versions installed in the project.

Students should not delete it without reason.

---

# 18. CommonJS and ES Modules

Node.js supports two module systems.

## CommonJS

Import:

```js
const fs = require("fs");
```

Export:

```js
module.exports = someValue;
```

## ES Modules

To use ES Modules, add this to `package.json`:

```json
{
  "type": "module"
}
```

Import:

```js
import fs from "fs";
```

Export:

```js
export default someValue;
```

Teaching recommendation:

Start with CommonJS for beginners, then introduce ES Modules later.

---

# 19. Node.js Built-in Modules

Node.js has many built-in modules.

Common built-in modules:

| Module | Use |
|---|---|
| fs | Work with files |
| path | Work with file paths |
| os | Get operating system information |
| http | Create basic HTTP server |
| events | Work with events |
| url | Parse URLs |
| crypto | Cryptography utilities |
| stream | Work with streams |

Built-in modules do not need installation.

Example:

```js
const fs = require("fs");
```

---

# 20. File System Module: fs

The `fs` module is used to work with files and folders.

Import it:

```js
const fs = require("fs");
```

## 20.1 Create or Write a File Synchronously

```js
const fs = require("fs");

fs.writeFileSync("note.txt", "This is my first file.");

console.log("File created successfully");
```

Run:

```bash
node app.js
```

## 20.2 Read a File Synchronously

```js
const fs = require("fs");

const data = fs.readFileSync("note.txt", "utf-8");

console.log(data);
```

`utf-8` converts file data into readable text.

## 20.3 Append Data to a File

```js
const fs = require("fs");

fs.appendFileSync("note.txt", "\nThis is new content.");

console.log("Data added successfully");
```

## 20.4 Delete a File

```js
const fs = require("fs");

fs.unlinkSync("note.txt");

console.log("File deleted successfully");
```

## 20.5 Check if File Exists

```js
const fs = require("fs");

if (fs.existsSync("note.txt")) {
  console.log("File exists");
} else {
  console.log("File does not exist");
}
```

## 20.6 Create Folder

```js
const fs = require("fs");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

console.log("Folder ready");
```

## 20.7 Read Folder

```js
const fs = require("fs");

const files = fs.readdirSync(".");

console.log(files);
```

## 20.8 Asynchronous File Read with Callback

```js
const fs = require("fs");

fs.readFile("note.txt", "utf-8", function(error, data) {
  if (error) {
    console.log("Error reading file", error.message);
    return;
  }

  console.log(data);
});
```

## 20.9 Asynchronous File Write with Callback

```js
const fs = require("fs");

fs.writeFile("message.txt", "Hello async file", function(error) {
  if (error) {
    console.log("Error writing file", error.message);
    return;
  }

  console.log("File written successfully");
});
```

## 20.10 Promise-based fs

```js
const fs = require("fs/promises");

async function readNote() {
  try {
    const data = await fs.readFile("note.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

readNote();
```

Teacher note:

Explain three styles:

1. Synchronous: easy but blocks code.
2. Callback-based asynchronous: non-blocking but can become nested.
3. Promise-based asynchronous: modern and cleaner with `async/await`.

Class exercise:

Create a simple notes app using `fs`:

- Add a note
- Read all notes
- Delete a note
- Store notes in `notes.json`

---

# 21. Path Module

The `path` module helps work with file and folder paths safely.

Import:

```js
const path = require("path");
```

## Join Paths

```js
const path = require("path");

const filePath = path.join(__dirname, "files", "note.txt");

console.log(filePath);
```

## Get File Name

```js
const path = require("path");

const filePath = "/users/student/project/app.js";

console.log(path.basename(filePath));
```

## Get Directory Name

```js
const path = require("path");

const filePath = "/users/student/project/app.js";

console.log(path.dirname(filePath));
```

## Get Extension

```js
const path = require("path");

const filePath = "photo.png";

console.log(path.extname(filePath));
```

Why use `path.join()`?

Different operating systems use different path separators. `path.join()` handles this correctly.

---

# 22. OS Module

The `os` module gives information about the operating system.

```js
const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU architecture:", os.arch());
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem());
console.log("Home directory:", os.homedir());
```

This module is useful for system-level scripts and debugging.

---

# 23. HTTP Module

The `http` module allows us to create a basic server without Express.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

Run:

```bash
node app.js
```

Open browser:

```txt
http://localhost:3000
```

---

# 24. Creating a Basic Node.js Server

Example with different routes:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Teaching explanation:

- `req` means request.
- `res` means response.
- `req.url` tells which URL was requested.
- `res.writeHead()` sets status code and headers.
- `res.end()` finishes the response.

---

# 25. HTTP Methods and Status Codes

## HTTP Methods

| Method | Use |
|---|---|
| GET | Read data |
| POST | Create data |
| PUT | Replace data |
| PATCH | Update part of data |
| DELETE | Delete data |

## Status Codes

| Status Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 400 | Bad request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not found |
| 500 | Server error |

Example:

```js
res.statusCode = 404;
res.end("Not Found");
```

---

# 26. Introduction to Express.js

Express.js is a Node.js framework used to build servers and APIs easily.

Why use Express?

- Easier routing
- Easier middleware handling
- Cleaner API creation
- Better project structure
- Less code than raw HTTP module

Install Express:

```bash
npm install express
```

---

# 27. Creating an Express Server

Create `app.js`:

```js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Express Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Run:

```bash
node app.js
```

Install nodemon for development:

```bash
npm install nodemon --save-dev
```

Add script in `package.json`:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

Run:

```bash
npm run dev
```

---

# 28. Routes in Express

Routes define application endpoints.

```js
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
```

## Route Parameters

```js
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Student ID is ${id}`);
});
```

URL:

```txt
/students/10
```

Output:

```txt
Student ID is 10
```

## Query Parameters

```js
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Searching for ${keyword}`);
});
```

URL:

```txt
/search?keyword=node
```

---

# 29. Request and Response Objects

In Express:

```js
app.get("/example", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.query);
  console.log(req.params);

  res.send("Response sent");
});
```

## Request Object: req

Common properties:

| Property | Use |
|---|---|
| req.params | Route parameters |
| req.query | Query parameters |
| req.body | Request body |
| req.headers | Request headers |
| req.method | HTTP method |
| req.url | Requested URL |

## Response Object: res

Common methods:

| Method | Use |
|---|---|
| res.send() | Send text, HTML, or data |
| res.json() | Send JSON response |
| res.status() | Set status code |
| res.redirect() | Redirect user |
| res.sendFile() | Send file |

Example JSON response:

```js
app.get("/user", (req, res) => {
  res.json({
    name: "Ram",
    course: "Backend"
  });
});
```

---

# 30. Middleware

Middleware is a function that runs between request and response.

Request comes in:

```txt
Request -> Middleware -> Route Handler -> Response
```

Example:

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
```

Important:

`next()` passes control to the next middleware or route.

## Built-in Middleware

To read JSON body:

```js
app.use(express.json());
```

To serve static files:

```js
app.use(express.static("public"));
```

## Route-specific Middleware

```js
function checkLogin(req, res, next) {
  const isLoggedIn = true;

  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.get("/dashboard", checkLogin, (req, res) => {
  res.send("Dashboard Page");
});
```

---

# 31. REST API Basics

REST API is a common way to design backend APIs.

REST uses HTTP methods to perform actions on resources.

Example resource: students

| Action | Method | Endpoint |
|---|---|---|
| Get all students | GET | /students |
| Get one student | GET | /students/:id |
| Create student | POST | /students |
| Update student | PUT/PATCH | /students/:id |
| Delete student | DELETE | /students/:id |

Good API response example:

```json
{
  "success": true,
  "message": "Students fetched successfully",
  "data": []
}
```

---

# 32. CRUD Operations

CRUD means:

| Letter | Meaning | HTTP Method |
|---|---|---|
| C | Create | POST |
| R | Read | GET |
| U | Update | PUT/PATCH |
| D | Delete | DELETE |

Example in-memory CRUD API:

```js
const express = require("express");

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Ram", age: 20 },
  { id: 2, name: "Sita", age: 21 }
];

app.get("/students", (req, res) => {
  res.json({
    success: true,
    data: students
  });
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  res.json({
    success: true,
    data: student
  });
});

app.post("/students", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      success: false,
      message: "Name and age are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: newStudent
  });
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, age } = req.body;

  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  student.name = name || student.name;
  student.age = age || student.age;

  res.json({
    success: true,
    message: "Student updated successfully",
    data: student
  });
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const studentExists = students.some((item) => item.id === id);

  if (!studentExists) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  students = students.filter((item) => item.id !== id);

  res.json({
    success: true,
    message: "Student deleted successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Class exercise:

Create CRUD APIs for:

- Books
- Products
- Todos
- Employees

---

# 33. Testing APIs with Postman or Thunder Client

Students should test APIs using Postman or Thunder Client.

## GET Request

URL:

```txt
http://localhost:3000/students
```

## POST Request

URL:

```txt
http://localhost:3000/students
```

Body type: JSON

```json
{
  "name": "Hari",
  "age": 22
}
```

Headers:

```txt
Content-Type: application/json
```

## PUT Request

```json
{
  "name": "Updated Name",
  "age": 25
}
```

## DELETE Request

```txt
http://localhost:3000/students/1
```

Teaching note:

Make students test every endpoint manually before moving to database integration.

---

# 34. Environment Variables with dotenv

Environment variables store sensitive or changeable information.

Examples:

- Port number
- Database URL
- JWT secret
- API keys

Install dotenv:

```bash
npm install dotenv
```

Create `.env` file:

```txt
PORT=5000
DATABASE_URL=mongodb://localhost:27017/backend_class
JWT_SECRET=mysecretkey
```

Use it in code:

```js
require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Important:

Never upload `.env` to GitHub.

Add to `.gitignore`:

```txt
.env
node_modules
```

---

# 35. Project Folder Structure

For small projects:

```txt
backend-project/
  app.js
  package.json
  .env
  .gitignore
```

For bigger projects:

```txt
backend-project/
  src/
    config/
      db.js
    controllers/
      studentController.js
    middlewares/
      authMiddleware.js
      errorMiddleware.js
    models/
      studentModel.js
    routes/
      studentRoutes.js
    utils/
      generateToken.js
    app.js
    server.js
  .env
  .gitignore
  package.json
  README.md
```

## Meaning of folders

| Folder | Purpose |
|---|---|
| config | Database and app configuration |
| controllers | Request handling logic |
| models | Database schema/models |
| routes | API routes |
| middlewares | Middleware functions |
| utils | Helper functions |

---

# 36. Database Introduction

A database stores data permanently.

Without a database, data stored in arrays is lost when the server restarts.

Common database types:

## SQL Databases

Examples:

- MySQL
- PostgreSQL
- SQLite

Data is stored in tables.

## NoSQL Databases

Examples:

- MongoDB
- Redis

MongoDB stores data in documents similar to JSON.

For beginners using Node.js, MongoDB is often easy to start with because it works naturally with JavaScript objects.

---

# 37. MongoDB Basics

MongoDB terms:

| MongoDB Term | Meaning |
|---|---|
| Database | Collection of data |
| Collection | Similar to a table |
| Document | Similar to a row or object |
| Field | Data property |

Example document:

```json
{
  "name": "Ram",
  "age": 20,
  "course": "Backend"
}
```

MongoDB can be used locally or in the cloud with MongoDB Atlas.

Common MongoDB operations:

| Operation | Meaning |
|---|---|
| insertOne | Add one document |
| find | Get documents |
| findOne | Get one document |
| updateOne | Update one document |
| deleteOne | Delete one document |

---

# 38. Mongoose Basics

Mongoose is a package that helps Node.js work with MongoDB.

Install Mongoose:

```bash
npm install mongoose
```

## Connect to MongoDB

Create `src/config/db.js`:

```js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
```

Use in `server.js`:

```js
require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Create a Model

Create `src/models/studentModel.js`:

```js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
```

## Create Student

```js
const Student = require("../models/studentModel");

async function createStudent(req, res) {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}
```

## Get Students

```js
async function getStudents(req, res) {
  try {
    const students = await Student.find();

    res.json({
      success: true,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
```

---

# 39. Validation Basics

Validation means checking user input before saving or processing it.

Example:

```js
app.post("/students", (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and age are required"
    });
  }

  res.json({
    success: true,
    message: "Valid data"
  });
});
```

Why validation is important:

- Prevents bad data
- Improves security
- Gives better error messages
- Protects database

Advanced validation packages:

- zod
- joi
- express-validator

For beginners, start with manual validation first.

---

# 40. Authentication Basics

Authentication means checking who the user is.

Examples:

- Login
- Register
- Verify password
- Verify token

Common authentication flow:

1. User registers with name, email, and password.
2. Backend hashes the password.
3. Backend saves user in database.
4. User logs in with email and password.
5. Backend compares password.
6. Backend creates JWT token.
7. Frontend stores token.
8. Frontend sends token for protected routes.
9. Backend verifies token.
10. Backend allows or blocks access.

Important:

Never store plain text passwords.

---

# 41. Password Hashing with bcrypt

Install bcrypt:

```bash
npm install bcrypt
```

Hash password:

```js
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
```

Compare password:

```js
const bcrypt = require("bcrypt");

async function comparePassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}
```

Example:

```js
async function test() {
  const hashed = await bcrypt.hash("password123", 10);
  console.log(hashed);

  const isMatch = await bcrypt.compare("password123", hashed);
  console.log(isMatch);
}

test();
```

---

# 42. JWT Authentication

JWT means JSON Web Token.

A JWT is commonly used to keep users logged in.

Install:

```bash
npm install jsonwebtoken
```

Create token:

```js
const jwt = require("jsonwebtoken");

function generateToken(userId) {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

module.exports = generateToken;
```

Verify token:

```js
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
}

module.exports = authMiddleware;
```

Use middleware:

```js
app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected profile route",
    user: req.user
  });
});
```

---

# 43. Authorization

Authentication checks who the user is.

Authorization checks what the user is allowed to do.

Example:

- Normal user can view profile.
- Admin can delete users.

Role-based authorization middleware:

```js
function authorizeRoles(...roles) {
  return function(req, res, next) {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied"
      });
    }

    next();
  };
}

module.exports = authorizeRoles;
```

Use:

```js
app.delete("/users/:id", authMiddleware, authorizeRoles("admin"), deleteUser);
```

---

# 44. Error Handling

Errors should be handled properly.

Basic error response:

```js
res.status(500).json({
  success: false,
  message: "Something went wrong"
});
```

## Try Catch

```js
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});
```

## Global Error Middleware

```js
function errorMiddleware(error, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Server Error"
  });
}

module.exports = errorMiddleware;
```

Use it after routes:

```js
app.use(errorMiddleware);
```

---

# 45. Security Basics

Backend security basics:

- Never store plain text passwords.
- Never expose `.env` files.
- Validate user input.
- Use HTTPS in production.
- Use strong JWT secret.
- Do not reveal sensitive error details to users.
- Limit request body size when needed.
- Use CORS carefully.
- Sanitize user input.
- Keep packages updated.

Helpful packages:

```bash
npm install helmet cors express-rate-limit
```

Basic use:

```js
const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(cors());
```

---

# 46. CORS

CORS means Cross-Origin Resource Sharing.

It controls whether a frontend from one origin can access a backend from another origin.

Example:

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:5000
```

Install:

```bash
npm install cors
```

Use:

```js
const cors = require("cors");

app.use(cors());
```

More controlled setup:

```js
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
```

---

# 47. Logging with Morgan

Morgan logs HTTP requests.

Install:

```bash
npm install morgan
```

Use:

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

Example output:

```txt
GET /students 200 12.123 ms
POST /students 201 20.456 ms
```

Logging helps with debugging.

---

# 48. File Upload Basics

Multer is commonly used for file uploads in Express.

Install:

```bash
npm install multer
```

Basic example:

```js
const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    success: true,
    message: "File uploaded successfully",
    file: req.file
  });
});

app.listen(3000);
```

Form field name should be `image`.

Teacher note:

Teach file upload after students understand routes, middleware, and forms.

---

# 49. Deployment Basics

Deployment means putting your backend online so other people can access it.

Before deployment:

- Push code to GitHub.
- Add `.env` variables to hosting platform.
- Make sure `start` script exists.
- Use production database URL.
- Do not upload `node_modules`.

Example `package.json` script:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Common hosting options:

- Render
- Railway
- Fly.io
- VPS
- Cloud platforms

Deployment checklist:

```txt
[ ] Code pushed to GitHub
[ ] .env added in hosting dashboard
[ ] Start script working
[ ] Database connected
[ ] CORS configured
[ ] API tested after deployment
```

---

# 50. Git and GitHub Basics

Initialize Git:

```bash
git init
```

Check status:

```bash
git status
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial backend project"
```

Connect remote repository:

```bash
git remote add origin YOUR_REPOSITORY_URL
```

Push:

```bash
git push -u origin main
```

Create `.gitignore`:

```txt
node_modules
.env
.DS_Store
```

---

# 51. Teaching Roadmap

This roadmap can be used for a beginner backend course.

## Week 1: Introduction and Setup

Topics:

- What is backend development?
- Frontend vs backend
- How the web works
- Install Node.js, npm, VS Code
- First Node.js program
- Terminal basics

Practice:

- Print text using Node.js
- Create simple files and folders
- Run JS files with Node.js

## Week 2: JavaScript Revision for Backend

Topics:

- Objects and arrays
- Functions
- Callbacks
- Promises
- async/await
- try/catch

Practice:

- Create functions for student data
- Filter arrays
- Use async/await examples

## Week 3: npm and Modules

Topics:

- npm init
- package.json
- Installing packages
- nodemon
- CommonJS modules
- Local modules

Practice:

- Create calculator module
- Create student helper module
- Install and use a package

## Week 4: File System and Core Modules

Topics:

- fs
- path
- os
- Reading and writing files
- JSON file storage

Practice:

- Notes app using fs
- Store data in JSON file

## Week 5: HTTP Server

Topics:

- HTTP module
- Request and response
- URLs
- Status codes
- HTTP methods

Practice:

- Create server with home, about, contact routes
- Return JSON response

## Week 6: Express.js

Topics:

- Express installation
- Express server
- Routes
- req and res
- Middleware
- JSON body parsing

Practice:

- Create Express server
- Create multiple routes
- Create custom middleware

## Week 7: REST API and CRUD

Topics:

- REST API design
- GET, POST, PUT, DELETE
- Status codes
- API response format

Practice:

- Student CRUD API using array
- Product CRUD API using array

## Week 8: Database and MongoDB

Topics:

- Database basics
- MongoDB basics
- Mongoose
- Schema and model
- Connect backend to database

Practice:

- Student API with MongoDB
- Save and fetch data from database

## Week 9: Authentication

Topics:

- Register
- Login
- Password hashing
- JWT token
- Protected routes

Practice:

- User registration API
- User login API
- Profile route with token

## Week 10: Project Structure and Error Handling

Topics:

- MVC folder structure
- Controllers
- Routes
- Models
- Middleware
- Error handling

Practice:

- Refactor project into proper folders

## Week 11: Security and Deployment

Topics:

- dotenv
- CORS
- Helmet
- GitHub
- Deployment basics

Practice:

- Deploy backend API
- Test deployed API

## Week 12: Final Project

Topics:

- Complete backend project
- Presentation
- Code review
- Debugging

Practice:

- Build final project
- Explain API endpoints
- Submit GitHub repository

---

# 52. Class Assignments

## Assignment 1: First Node App

Create `app.js` that prints:

- Student name
- Course name
- Current date

## Assignment 2: Calculator Module

Create a local module with:

- add
- subtract
- multiply
- divide

## Assignment 3: File System Notes App

Use `fs` to:

- Add note
- Read note
- Append note
- Delete note

## Assignment 4: Basic HTTP Server

Create routes:

- `/`
- `/about`
- `/contact`
- `/api/students`

## Assignment 5: Express Routes

Create Express routes for:

- Home
- Students
- Courses
- Teachers

## Assignment 6: Student CRUD API

Build full CRUD using an array.

## Assignment 7: MongoDB CRUD API

Build full CRUD using MongoDB and Mongoose.

## Assignment 8: Authentication API

Create:

- Register API
- Login API
- Protected profile API

---

# 53. Final Project: Student Management API

Final project goal:

Build a backend API for managing students.

## Features

- Register user
- Login user
- Create student
- Get all students
- Get one student
- Update student
- Delete student
- Protected routes
- MongoDB database
- Proper folder structure
- Error handling
- Environment variables

## Required Packages

```bash
npm install express mongoose dotenv bcrypt jsonwebtoken cors helmet morgan
npm install nodemon --save-dev
```

## Suggested Folder Structure

```txt
student-management-api/
  src/
    config/
      db.js
    controllers/
      authController.js
      studentController.js
    middlewares/
      authMiddleware.js
      errorMiddleware.js
    models/
      userModel.js
      studentModel.js
    routes/
      authRoutes.js
      studentRoutes.js
    utils/
      generateToken.js
    app.js
  server.js
  .env
  .gitignore
  package.json
  README.md
```

## API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/profile | Get profile |

### Student Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/students | Create student |
| GET | /api/students | Get all students |
| GET | /api/students/:id | Get one student |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |

## Example .env

```txt
PORT=5000
MONGO_URI=mongodb://localhost:27017/student_management
JWT_SECRET=change_this_secret
```

## Example app.js

```js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management API is running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.use(errorMiddleware);

module.exports = app;
```

## Example server.js

```js
require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Example Student Model

```js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
```

## Final Submission Requirements

Students should submit:

- GitHub repository link
- README with setup instructions
- API endpoint list
- Screenshots from Postman or Thunder Client
- Short explanation of project structure

---

# 54. Interview Questions for Students

Basic questions:

1. What is backend development?
2. What is Node.js?
3. Is Node.js a programming language?
4. What is npm?
5. What is `package.json`?
6. What is the difference between dependencies and devDependencies?
7. What is `node_modules`?
8. Why should `node_modules` not be pushed to GitHub?
9. What is the use of `fs` module?
10. What is the difference between synchronous and asynchronous code?
11. What is Express.js?
12. What is middleware?
13. What are `req` and `res`?
14. What is a REST API?
15. What are HTTP methods?
16. What is the difference between GET and POST?
17. What is a status code?
18. What is MongoDB?
19. What is Mongoose?
20. What is a schema?
21. What is authentication?
22. What is authorization?
23. Why should passwords be hashed?
24. What is JWT?
25. What is dotenv?
26. What is CORS?
27. What is deployment?

Practical questions:

1. Create an Express server.
2. Create a GET route.
3. Create a POST route.
4. Read data from `req.body`.
5. Create middleware.
6. Connect MongoDB using Mongoose.
7. Create a Mongoose schema.
8. Create a protected route using JWT.

---

# 55. Recommended Practice Plan

Daily practice for students:

## Day 1

- Install Node.js
- Run first Node program
- Practice terminal commands

## Day 2

- Revise JavaScript objects, arrays, functions
- Practice callbacks and promises

## Day 3

- Learn npm
- Create package.json
- Install packages

## Day 4

- Practice modules
- Create local module

## Day 5

- Practice fs module
- Create notes app using files

## Day 6

- Create HTTP server
- Learn status codes and methods

## Day 7

- Create Express server
- Build basic routes

## Day 8

- Learn middleware
- Parse JSON body

## Day 9

- Build CRUD API using array

## Day 10

- Connect MongoDB
- Build CRUD API using database

## Day 11

- Add authentication

## Day 12

- Final project practice

---

# Bonus: Simple Backend Learning Order

For absolute beginners, teach in this order:

```txt
1. JavaScript basics
2. Node.js introduction
3. npm and package.json
4. Modules
5. fs module
6. path and os modules
7. http module
8. Express.js
9. Routes
10. Middleware
11. REST API
12. CRUD
13. Database
14. Authentication
15. Security
16. Deployment
17. Final project
```

---

# Final Note for Students

Backend development becomes easier with practice.

Do not only watch tutorials. Build small projects again and again.

Start simple:

- File-based notes app
- Basic server
- Student API using array
- Student API using database
- Authentication project

Then combine everything into one complete backend project.

Happy coding!
