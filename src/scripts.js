//---------------------EVENT LISTENER--------------------------------------//
window.addEventListener('load', loadPage);
 
//---------------------GLOBAL VARIABLES--------------------------------------//
// const welcomeName = document.getElementById("welcome-user");
// const address = document.getElementById("address");
// const strideLength = document.getElementById("stride-length-text");

let allUserData;
let allHydrationData;
let allSleeperData;

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


   async function fetchData(type) {
      const root = `http://localhost:3001/api/v1/`;
      const url = `${root}${type}`;
      const promise = await fetch(url)
        .then(response => response.json())
        .then(data => data)
       
        // .catch(console.log("errror!"))
   
      return promise;
    }

    


//create a function that creates all three repo classes
//it will take in the async function apicalls and be awaited 
// then it will 

async function loadPage() {
  const dataSets = await getAPICalls();
  createRepoClasses(dataSets);
  loadPageInfo();
}

createRepoClasses(dataSets) {
  allUserData = new UserRepository(dataSets[0]);
  // allHydrationData = new HydrationRespository(dataSets[1]);
  // allSleeperData = new SleepRepository(dataSets[2]);
}

async function getAPICalls() {
const userRepoPromise = fetchData('users')
  .then(console.log('success'))
  // .catch(err => console.log("error message"));

const hydrationRepoPromise = fetchData('hydration')
  .then(console.log('success'));
    //  .catch(err => console.log(console.log(errorMessage));

const sleepRepoPromise = fetchData('sleep')
  .then(console.log('success'));
    //  .catch(err => /* do something else */);

 
const apiDataSets = await Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then((values) => {
  return values;
});

return apiDataSets;

}



// function returnAPIData(data) {
//   console.log("I will pass this data on--->", data);
// }




  





//this will return an array
//dont need .then()

// loadPage();
// });



// Step 3:

//function to create card on page and an instance of user.



 

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

