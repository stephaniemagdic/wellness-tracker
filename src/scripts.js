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

//fectch user data only to populate the new User Repository

//reusable function to fetch APIData
    function fetchData(type) {
      const root = http://localhost:3001/api/v1/;
      const url = `${root}type`;

      const promise = fetch(url)
        .then(response => response.json());
        console.log("response", response)
        console.log("promise", promise)
      return promise;
    }

//Step 2: grab the data and store for each type of data needed.
//class thoughts:
// fetch(url).then((response) =>response.json.then(data) => myFunc(data)

     //put this in a function and then return this so its not globally scoped.
     const userRepoPromise = fetchData(users)
     .then(data => console.log(data))
     .catch(err => console.log("error message"));


   const hydrationRepoPromise = fetchData(hydration)
     .then(data => console.log(data))
     .catch(err => console.log(console.log(errorMessage));


   const sleepRepoPromise = fetchData(hydration)
     .then(data => console.log(data))
     .catch(err => /* do something else */);

 
const APIDataArray = Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then((values) => {
console.log("done!");
//this will return an array
//dont need .then()
loadPage();
});

