let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/group-of-black-girls.png') {
      myImage.setAttribute('src','images/black-girls-2.png');
    } else {
      myImage.setAttribute('src','images/group-of-black-girls.png');
    }
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    function setUserName() {
        let myName = prompt('Abiola');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.textContent = 'Mozilla is cool, ' + myName;
        }
      }
      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }
      myButton.onclick = function() {
        setUserName();
      }