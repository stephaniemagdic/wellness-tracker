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

//---------------------EVENT LISTENER--------------------------------------//
window.addEventListener('load', loadPage);
 
//---------------------GLOBAL VARIABLES--------------------------------------//
let allUserData;
let allHydrationData;
let allSleeperData;
const welcomeName = document.querySelector(".welcome-user");
const address = document.querySelector(".address");
const strideLength = document.querySelector(".stride-length-text");

async function loadPage() {
  const dataSets = await fetchPageData();
  await generateRepoClasses(dataSets);
  loadPageInfo();
}

async function fetchPageData() {
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

function generateRepoClasses(dataSets) {
  //TO DO: Refactor-loop through argument to dry up.
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
  displayUserCard();
}

function displayUserCard() {
   const user1 = allUserData.returnUserData(1)
   const currentUser = new User(user1);
   welcomeName.innerHTML = `${currentUser.returnFirstName()}`;
   address.innerHTML = `${currentUser.address}`;
   strideLength.innerHTML = `${currentUser.strideLength}`
}

