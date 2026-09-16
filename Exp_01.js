// Javascript -> inside browser
// node.js -> outside browser

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('greet', (name) => {
//     console.log(`Hello ${name}! Welcome to node.js`);
// });

// myEmitter.on('exit', () => {
//     console.log("Application closed");
// });

// myEmitter.emit('greet', '2nd year');
// myEmitter.emit('exit');

// const {EventEmitter}=require('events');

// class Button extends EventEmitter{}

// const Button=new Button();
// Button.on('click',()=> {console.log('Button clicked!')});

// Button.on('mouseover'), ()=> {console.log('Mouse over button!')};

// Button.emit('click');
// Button.emit('mouseover');                  // event trigger / envoke / call


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}! Welcome to Node.js`);
});

myEmitter.on('exit', () => {
    console.log('Application closed');
});

myEmitter.emit('greet', '2nd year');
myEmitter.emit('exit');

class Button extends EventEmitter {}

const button = new Button();
button.on('click', () => {
    console.log('Button clicked!');
});

button.on('mouseover', () => {
    console.log('Mouse over button!');
});

button.emit('click');
button.emit('mouseover');