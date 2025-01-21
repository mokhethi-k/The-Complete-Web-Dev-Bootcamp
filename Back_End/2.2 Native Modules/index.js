
const fs = require('fs');
/*Uncomment this code to create a file of your own*/
// const data = "Hello, This is the message from NOde JS!";

// const filePath = 'data.txt';

// fs.writeFile(filePath, data, (err) => {
//     if (err) throw err;
//     console.log("File was saved successfully!!!");
// });


/*The code below shows two methods in which we can read the files */
fs.readFile("./data.txt", (err, data) =>{
    if (err) throw err;
    console.log(data); //Logging the buffer as it is
});

fs.readFile("./data.txt", "utf8", (err, data) =>{
    if (err) throw err;
    console.log(data); //Logging the contents of the buffer
});