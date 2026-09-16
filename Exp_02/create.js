const fs = require('fs');

// Create file
fs.writeFileSync(
    'example.txt',
    'This is my exp 1 in fsd workshop',
    'utf-8'
);

console.log('create file was successful');

// Append data
fs.appendFileSync(
    'example.txt',
    '\nThis is the new file',
    'utf-8'
);

console.log('append file successfully');

// Read file
const data = fs.readFileSync('example.txt', 'utf-8');

console.log('File content is:');
console.log(data);

// Create folder
fs.mkdirSync('sample folder', { recursive: true });

console.log('a new folder is created');

// Check file exists
if (fs.existsSync('seacastudent.txt')) {
    console.log('file exist');
} else {
    console.log('file not found, need to create this file');

    fs.writeFileSync('seacastudent.txt', '');

    console.log('file created successfully');
}