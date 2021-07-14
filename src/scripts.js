// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';

//new Promise(resolve, reject)

    function fetchData(type) {
      const root = `http://localhost:3001/api/v1/`;
      const url = `${root}${type}`;
      const promise = fetch(url)
        .then(response => response.json()
        )
       
        // .then(console.log("success!"))
        // .catch(console.log("errror!"))
      return promise;
    }

    const userTest = fetchData('users');
    console.log(userTest);
    

//Step 2: grab the data and store for each type of data needed.
//class thoughts:
// fetch(url).then((response) =>response.json.then(data) => myFunc(data)

     //put this in a function and then return this so its not globally scoped.
     
  //    const userRepoPromise = fetchData(users)
  //    .then(data => console.log(data))
  //    .catch(err => console.log("error message"));


  //  const hydrationRepoPromise = fetchData(hydration)
  //    .then(data => console.log(data))
  //    .catch(err => console.log(console.log(errorMessage));


  //  const sleepRepoPromise = fetchData(hydration)
  //    .then(data => console.log(data))
  //    .catch(err => /* do something else */);

 
// const apiDataArray = Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then((values) => {
// console.log("done!");


//this will return an array
//dont need .then()

// loadPage();
// });

//---------------------EVENT LISTENER--------------------------------------//
   //event listener on load .. get API DATA <--this needs to be rethought
 
//---------------------GLOBAL VARIABLES--------------------------------------//
// const welcomeName = document.getElementById("welcome-user");
// const address = document.getElementById("address");
// const strideLength = document.getElementById("stride-length-text");

// Step 3:

//function to create card on page and an instance of user.


//  const users = new UserRespository(userRepo);

//  const user1 = users.returnUserData(1)
//  //destructure
//  const currentUser = new User(user1);

//  function loadPage() {
//    loadUserCard(currentUser);
//  }


//  function loadUserCard(userObj) {


//  welcomeName.innerHTML = `${userObj.returnFirstName()}`;
//  address = `${userObj.address}`

//  }

