const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./generatehtml.js");
console.log(html);

var level = function(num) {
	return num > 40 ? "It's over 40!" : num;
};
module.exports = level;

inquirer
    .prompt([
        {
        type: "input",
        name: "name",
        message: "What is your Github username?",
        },
        {
        type: "checkbox",
        message: "What is your favorite color?",
        name: "stack",
        choices: [
            "Green", 
            "Blue",
            "Pink", 
            "Red", 
            // "Black",
            // "Purple"
        ]
    }

    ])

    const http = ("http");
    // const fs = ("fs");

    function onRequest (request, response){
      response.writeHead(200, {"Content-Type": "text/html"});
      fs.readFile(__dirname + "./index.html", null,  function(err, data){
        if (err){
          response.writeHead(404);
          response.write ("File not found");
        } else {
          response.write(data);
        }
        response.end();
      });
      response.end()
    };
    // .then(function(data) {

    //     var filename = data.name.toLowerCase().split(' ').join('') + ".json";
      
    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      
    //       if (err) {
    //         return console.log(err);
    //       }
      
    //       console.log("Success!");
      
    //     });
    //   });

   
      