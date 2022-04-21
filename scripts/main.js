/* let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
} */

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/icon.jpg') {
        myImage.setAttribute('src', 'images/icon2.jpg');
    } else {
        myImage.setAttribute('src', 'images/icon.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('What is your name?');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hi,' + myName;
    }

}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi,' + storedName;
}


myButton.onclick = function () {
    setUserName();
}
