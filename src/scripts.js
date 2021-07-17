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
import UserSleepData from './UserSleepData';
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
  displayHydrationData()
  displaySleepData();
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
  
  let stepGoalChartDisplay = new Chart(stepGoalCompChart, {
    type: 'doughnut', 
    //horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: ["Your Step Goal", "Average Step Goal"],
    datasets: [{
      label: "Daily Step Goal",
      data: [
        currentUser.dailyStepGoal, 
        allUserData.returnAverageStepGoal()
      ],
      backgroundColor: ["#3e95cd", "#8e5ea2"],
    }],
    //TO DO: data labels: true! put numbers there so data is easy to read.
    // options: {} //
    }
  });

    stepGoalCompChart.innerHTML = `${stepGoalChartDisplay}`;
}


function displayHydrationData() {
// let hydroChart = document.getElementById('hydration-chart')

//.getContect('2d');

// let weeklyHydroChart = new Chart(hydroChart, {
  //water today

  //water for the week.
// type: 'bar', 
// //horizontalBar, pie, line, doughnut, radar, polarArea
// data: {
// labels: ["Monday", Tuesday", "Wednesday", Thursday"],
// datasets: []
// },
// options: {}
// }
}

function displaySleepData() {

  const user1 = allUserData.returnUserData(1)
  const currentUser = new User(user1);

  //user's hydration data




 //STEP 1 SLEEP DASHBOARD
 const user1Data = allSleepData.returnUserData(currentUser.id);
 const user1SleepData = new UserSleepData(UserSleepData);

 displayDailySleepData(user1SleepData);


//STEP 2 SLEEP DASHBOARD
displayWeeklySleepData(user1SleepData)


//STEP 3..
// For a user, their all-time average sleep quality and all-time average number of hours slept

// bubble chart : 2 bubbles for where they are average all time and where
// other users are.

}

//STEP 1 of SLEEP DATA DASHBBOARD:

function displayDailySleepData(user) {
  let dailySleepDataChart = document.getElementById('step-goal-chart')
  //.getContect('2d');
  
  let dailySleepDataChartDisplay = new Chart(dailySleepDataChart, {
    type: 'horizontalBar', 
    //horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: ["Hours Slept", "Sleep Quality"],
    datasets: [{
      label: "By Day",
      data: [
        user.returnHoursSlept(),
        user.returnSleepQuality()
      ],
      backgroundColor: ["#3e95cd", "#8e5ea2"],
    }],
    //TO DO: data labels: true! put numbers there so data is easy to read.
    // options: {} //
    }
  });

    stepGoalCompChart.innerHTML = `${dailySleepDataChartDisplay}`;
}

function displayWeeklySleepData(user) {
  //combine next two:
  //   For a user, their sleep data for the latest day (hours slept and quality of sleep)

  //   For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
    //2 charts: one for sleep quality and one for hours slept:
      // 7 day chart.
      // current day should be in RED.


}

