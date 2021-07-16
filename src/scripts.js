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

// import {
//   Chart
// } from 'chart.js';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

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
  generateRepoClasses(dataSets);
  loadPageInfo();
}

async function fetchPageData() {
  const userRepoPromise = fetchData('users') 
  // .then(console.log('success'))
  // .catch(err => console.log("error message"));

  const hydrationRepoPromise = fetchData('hydration')  
    // .then(console.log('success'));
      //  .catch(err => console.log(console.log(errorMessage));

  const sleepRepoPromise = fetchData('sleep')  
    // .then(console.log('success'));
      //  .catch(err => /* do something else */);

  const apiDataSets = await Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then(values => values);

  return apiDataSets;
}

function generateRepoClasses(dataSets) {
  //TO DO: Refactor-loop through argument to dry up.
  console.log(dataSets);
  allUserData = new UserRepository(dataSets[0].userData);
  // allHydrationData = new HydrationRespository(dataSets[1].hydrationData);
  // allSleeperData = new SleepRepository(dataSets[2].sleepData);
}

async function fetchData(type) {
  const promise = await fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .then(data => data)
    // .catch(console.log("error!"))
  return promise;
}

function loadPageInfo() {
  //This will call invoke a function that loads our user card to start.
  displayUserCard();
  displayStepGoal(); 
  // diplayHydrationInfo()
    //create instance of hydration repo class
    //create instance of hydration (holds one users hydration info)
        //because we have to call methods on hydration class to get data in
        //order to display this on the dom.
  // displaysleepInfo()
    //create instance of sleep repo class
      //create instance of sleep class (holds one users sleep info)
          //because we have to call methods on sleep class to get data in
          //order to display this on the dom.
}

function displayUserCard() {
  //create instance of the userRepo.
   const user1 = allUserData.returnUserData(1)
   //create instance of user.
   const currentUser = new User(user1);
   //use that info to display properties on the dom.
   welcomeName.innerHTML = `${currentUser.returnFirstName()}`;
   address.innerHTML = `${currentUser.address}`;
   strideLength.innerHTML = `${currentUser.strideLength}`

   //display User step goal from here.
}

function displayStepGoal() {
  let stepGoalCompChart = document.getElementById('step-goal-chart')
  //.getContect('2d');
  
  //create instance of the userRepo.
  const user1 = allUserData.returnUserData(1)
  //create instance of user.
  const currentUser = new User(user1);

  console.log('currentUser.dailyStepGoal, allUserData.returnAverageStepGoal()', currentUser.dailyStepGoal, allUserData.returnAverageStepGoal(), typeof(currentUser.dailyStepGoal), typeof(allUserData.returnAverageStepGoal()))
  
  let stepGoalChart = new Chart(stepGoalCompChart, {
    type: 'bar', 
    //horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: ["Your Step Goal", "Average Step Goal"],
    datasets: [{
      label: "Daily Step Goal",
      data: [
        currentUser.dailyStepGoal, 
        allUserData.returnAverageStepGoal()
      ]
    }],
    // options: {}
    }
  });

    stepGoalCompChart.innerHTML = `${stepGoalChart}`;
}



let hydroChart = document.getElementById('hydration-chart')

//.getContect('2d');

// let weeklySleepChart = new Chart(hydroChart, {
// type: 'bar', 
// //horizontalBar, pie, line, doughnut, radar, polarArea
// data: {
// labels: ["Monday", Tuesday", "Wednesday", Thursday"],
// datasets: []
// },
// options: {}
// }

