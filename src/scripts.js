import './css/styles.css';
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import SleepRepository from './SleepRepository';
import UserSleepData from './UserSleepData';
import HydrationRepository from './HydrationRepository';
import UserHydrationData from './UserHydrationData';


import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

//---------------------EVENT LISTENER--------------------------------------//
window.addEventListener('load', loadPage);
 
//---------------------GLOBAL VARIABLES--------------------------------------//
let allUserData;
let allHydrationData;
let allSleepData;
const welcomeName = document.querySelector(".welcome-user");
const address = document.querySelector(".address");
const email = document.querySelector(".email")
const strideLength = document.querySelector(".stride-length-num");
const dailyStepGoal = document.querySelector(".daily-step-goal-num")
const averageStepGoal = document.querySelector(".average-step-goal-num")

//---------------------FETCH CALLS--------------------------------------//
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
  allHydrationData = new HydrationRepository(dataSets[1].hydrationData);
  allSleepData = new SleepRepository(dataSets[2].sleepData);
}

async function fetchData(type) {
  const promise = await fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .then(data => data)
    // .catch(console.log("error!"))
  return promise;
}




//---------------------DISPLAY FUNCTIONS--------------------------------------//

function loadPageInfo() {
  //This will call invoke a function that loads our user card to start.
  displayUserCard();
  displayAverageStepGoal();
  displayAllHydrationData();
  // function to set up first chart
  // function to set up second chart 
  // function to set up third chart

  //create instance of UserHydrationData class
  //create instance of hydration (holds one users hydration info)
      //because we have to call methods on hydration class to get data in
      //order to display this on the dom.
  displayAllSleepData();
  // function to set up first chart
  // function to set up second chart 
  // function to set up third chart
 
  //create instance of UserSleepData class
    //create instance of sleep class (holds one users sleep info)
        //because we have to call methods on sleep class to get data in
        //order to display this on the dom.
}




//---------------------USER CARD --------------------------------------//
function displayUserCard() {
   const user1 = allUserData.returnUserData(1)
   const currentUser = new User(user1);
   welcomeName.innerHTML = `${currentUser.returnFirstName()}`;
   address.innerHTML = `${currentUser.address}`;
   email.innerHTML = `${currentUser.email}`;
   strideLength.innerHTML = `${currentUser.strideLength}`
   dailyStepGoal.innerHTML = `${currentUser.dailyStepGoal}`
   //TO DO
      //display User step goal from here instead.
}

function displayAverageStepGoal() {
  averageStepGoal.innerHTML = `${allUserData.returnAverageStepGoal()}`
}





//---------------------HYDRATION CHARTS --------------------------------------//
function displayAllHydrationData(hydroData) {
  let dailyHydoDataChart = document.getElementById('hydration-chart')
  //.getContect('2d');
  // displayDailyHydrationData();
  // displayWeeklyHydrationData();
  // displayAllTimeHydrationData();
}

// function displayDailyHydrationData() {

// }

// function displayWeeklyHydrationData() {

// }

// function displayAllTimeHydrationData() {

// }






//---------------------SLEEP CHARTS --------------------------------------//
function displayAllSleepData() {
  const userData = allUserData.returnUserData(1)
  const currentUser = new User(userData);

  const sleepData = allSleepData.returnUserData(currentUser.id);
  const currentUserSleepData = new UserSleepData(sleepData);

  displayDailySleepData(currentUserSleepData);

//STEP 2 SLEEP DASHBOARD
  displayWeeklySleepData(currentUserSleepData)

//STEP 3.. (NOT STARTED YET.)
// For a user, their all-time average sleep quality and all-time average number of hours slept

// bubble chart : 2 bubbles for where they are average all time and where
// other users are.
  // displayAllTimeSleepData(currentUserSleepData);
}

function displayDailySleepData(user) {
  let dailySleepDataChart = document.getElementById('daily-sleep')

  let dailySleepDataChartDisplay = new Chart(dailySleepDataChart, {
    type: 'bar',
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
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        legend: { display: false },
        title: {
          display: true,
          text: 'Weekly Sleep Quality DisplayTitle',
          responsive: true
        }
      }
    }
  });

  dailySleepDataChart.innerHTML = `${dailySleepDataChartDisplay}`;
}

function displayWeeklySleepData(user) {
  let weeklySleepQualityChart = document.getElementById('weekly-sleep');

  let weeklySleepDataChartDisplay = new Chart(weeklySleepQualityChart, {
    type: 'bar', 
    data: {
      labels: [ '', '', '', '', '', '', 'Today'],
      datasets: [
        {
          label: ['Hours Slept'],
          data: user.returnHoursSleptByWeek(),
          backgroundColor: ["#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd","#3e95cd", "#6082B6" ]
        },
        {
          label: "Sleep Quality",
          data: user.returnSleepQualityByWeek(),
          backgroundColor: ["#8e5ea2", "#8e5ea2", "#8e5ea2", "#8e5ea2", "#8e5ea2", "#8e5ea2", "#702963" ]
        }
      ]
    },
    options: {
      // responsive: true,
      // maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Weekly Sleep Quality DisplayTitle',
        responsive: true
      }
    }
  });
  
  weeklySleepQualityChart.innerHTML = `${weeklySleepDataChartDisplay}`;
}

// function displayAllTimeSleepData() {

// }
