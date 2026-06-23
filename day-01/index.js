//common js
// const filesystem = require('fs')

//ESmodule
// import filesystem from 'fs'

//filesystem CRUD operation

const fs = require("fs");

//write

// fs.writeFile(__filename, data , callbacks)
// fs.writeFile("data.txt", "this is day 01 of backend bootcamp", (error) => {
//   if (error) {
//     console.log("error = ", error);
//   } else {
//     console.log("file created");
//   }
// });


//append

// fs.appendFile("data.txt", "\nthis data is appended to data.txt file", (error) => {
//   if (error) {
//     console.log("error occur = ", error);
//   } else {
//     console.log("data appended");
//   }
// });

//copy
// fs.copyFile("data.txt", "./copy/data-copy.txt", (error) => {
//   if (error) {
//     console.log("error", error);
//   } else {
//     console.log("file copied");
//   }
// });

//unlink or delete
// fs.unlink("./copy/data-copy.txt", (error) => {
//   if (error) {
//     console.log("error", error);
//   } else {
//     console.log("file deleted");
//   }
// });

//rm or rmdir
// fs.rm("./copy/data-copy.txt", { recursive: true }, (error) => {
//   if (error) {
//     console.log("error occur", error);
//   } else {
//     console.log("file removed");
//   }
// });

// fs.rmdir("./copy", { recursive: true }, (error) => {
//   if (error) {
//     console.log("error", error);
//   } else {
//     console.log("folder removed");
//   }
// });

//read

// fs.readFile("data.txt", (error, data) => {
//   if (error) {
//     console.log("error", error);
//   } else {
//     console.log(data.toString());
//   }
// });
