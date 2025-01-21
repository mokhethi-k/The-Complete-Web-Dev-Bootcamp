const fs = require("fs");
/*Uncomment this code to create a file of your own*/


// fs.writeFile("data.txt", "I am from the nativr module", (err) =>{
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