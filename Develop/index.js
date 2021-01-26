// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            message: 'Title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Table of Contents',
            name: 'tableContents',
        },
        {
            type: 'input',
            message: 'Installation',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'License',
            name: 'license'
        },
        {
            type: 'input',
            message: 'Contributing',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests',
        },
        {
            type:'input',
            message: 'Questions',
            name: 'questions',
        }

    ]).then(function(response){
        console.log(response)
        fs.writeFile('readme.md', generateMarkdown(response),function(err){
            if (err){
                console.log(err)}
                else {
                    console.log("success")

                }
            
        })
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile('readMe.md', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// .then(function(response){
//     console.log(response)
//     fs.writeFile('readme.md', generateMarkdown(response),function(err){
//         if (err){
//             console.log(err)}
//             else {
//                 console.log("success")

//             }
        
//     })
// })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
