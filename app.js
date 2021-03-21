// 1a
const button1 = document.getElementById("dm");

// 1b
button1.onclick = ()=> alert (`"Cool! You can hear/understand a hummingbird and ants" `);

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseenter`, () => {
    
    alert(`"OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one"`)
   
   })
   h3.addEventListener(`mouseleave`, () => {});


// BONUS 

// 3a
const userForm = document.querySelector(`form`);

// 3b
userForm.addEventListener(`submit`, () => {
alert('Your answer has been submitted');

})

// 4a
const darkMode = document.querySelector(`#Dark Mode`);

// 4b
darkMode.addEventListener(`click`, ()=> {
    for (userForm of darkMode) {
        document.querySelector ('form').append(document.createElement(`span`).innerText = `${userForm}`);
}})

// 5a 
const reality = document.querySelector(`#MOVE TO ANOTHER REALITY`);

// 5b