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

   async function fetchData(type) {
      const root = `http://localhost:3001/api/v1/`;
      const url = `${root}${type}`;
      const promise = await fetch(url)
        .then(response => response.json())
        .then(data => data)
       
        // .then(console.log("success!"))
        // .catch(console.log("errror!"))
   
      console.log(promise)
      return promise;
    }


    // const userAPIData = fetchData('users');
    // console.log("userTest results", userAPIData);
    

//Step 2: grab the data and store for each type of data needed.
//class thoughts:
// fetch(url).then((response) =>response.json.then(data) => myFunc(data)

     //put this in a function and then return this so its not globally scoped.
     
const userRepoPromise = fetchData('users')
  .then(console.log('success'))
  // .catch(err => console.log("error message"));

const hydrationRepoPromise = fetchData('hydration')
  .then(console.log('success'));
    //  .catch(err => console.log(console.log(errorMessage));

const sleepRepoPromise = fetchData('sleep')
  .then(console.log('success'));
    //  .catch(err => /* do something else */);

 
const apiDataArrayPromise = Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then((values) => {
  console.log("done!");
  console.log("values", values);
  console.log("apiData at index 0", values[0])
  return values;
});
  



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


//  const users = new UserRepository(userAPIData);
//  console.log("our userRepo class instance", users)

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

