const fs = require('fs').promises;

async function writeFile() {
    try{
        await fs.writeFile('promise.txt','Hello Students');
        console.log('File created and data written successfully!');
    }
    catch(error){
        console.log('Error',error);
    }
}

writeFile();

// Read File

async function readFile() {
    try{
        const data = await fs.readFile('promise.txt','utf-8');
        console.log(data);
    }
    catch(error){
        console.error('Error',error);
    }
}
readFile();

// rename

async function renameFile() {
    try{
        await fs.rename('promise.txt','promise_new.txt');
        console.log('File renamed successfully!');
    }
    catch(error){
        console.log('Error',error);
    }
}
renameFile();

async function appendFile() {
    try{
        await fs.appendFile('promise.txt','\nWelcome to FSD training');
        console.log('Data append successfully!');
    }
    catch(error){
        console.log('Error',error);
    }
}
appendFile();