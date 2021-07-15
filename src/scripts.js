//---------------------EVENT LISTENER--------------------------------------//
window.addEventListener('load', loadPage);
 
//---------------------GLOBAL VARIABLES--------------------------------------//
const welcomeName = document.querySelector(".welcome-user");
const address = document.querySelector(".address");
const strideLength = document.querySelector(".stride-length-text");

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
import User from './User';

async function loadPage() {
  const dataSets = await getAPICalls();
  console.log("dataSets", dataSets);
  const repos = await createRepoClasses(dataSets);
  loadPageInfo();
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
    console.log(values);
      return values;
  });

  return apiDataSets;
}

function createRepoClasses(dataSets) {
  allUserData = new UserRepository(dataSets[0].userData);
  // allHydrationData = new HydrationRespository(dataSets[1].hydrationData);
  // allSleeperData = new SleepRepository(dataSets[2].sleepData);
}

async function fetchData(type) {
  const root = `http://localhost:3001/api/v1/`;
  const url = `${root}${type}`;
  const promise = await fetch(url)
    .then(response => response.json())
    .then(data => data)
    // .catch(console.log("errror!"))

  return promise;
}

function loadPageInfo() {
  //This will call invoke a function that loads our user card to start.
  createUserCard();
}

function createUserCard() {
   const user1 = allUserData.returnUserData(1)
   const currentUser = new User(user1);
   welcomeName.innerHTML = `${currentUser.returnFirstName()}`;
   address.innerHTML = `${currentUser.address}`;
   strideLength.innerHTML = `${currentUser.strideLength}`
}









