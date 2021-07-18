import './css/styles.css';
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import SleepRepository from './SleepRepository';
import UserSleepData from './UserSleepData';
import HydrationRepository from './HydrationRepository';
import UserHydrationData from './UserHydrationData';


import { Chart, LinearScale, registerables } from 'chart.js';
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


//---------------------ALL DISPLAY FUNCTIONS----------------------------------//
function loadPageInfo() {
  displayUserCard();
  displayAllHydrationData();
  displayAllSleepData();
}


//---------------------USER CARD--------------------------------------//
function displayUserCard() {
  const user1 = allUserData.returnUserData(1)
  const currentUser = new User(user1);
  welcomeName.innerHTML = `${currentUser.returnFirstName()}`;
  address.innerHTML = `${currentUser.address}`;
  email.innerHTML = `${currentUser.email}`;
  strideLength.innerHTML = `${currentUser.strideLength}`
  dailyStepGoal.innerHTML = `${currentUser.dailyStepGoal}`
  averageStepGoal.innerHTML = `${allUserData.returnAverageStepGoal()}`
}


//---------------------HYDRATION CHARTS --------------------------------------//
function displayAllHydrationData() {
  const userData = allUserData.returnUserData(1)
  const currentUser = new User(userData);
  const hydrationData = allHydrationData.returnUserData(currentUser.id);
  const currentUserHydrationData = new UserHydrationData(hydrationData);

  displayDailyHydrationData(currentUserHydrationData);
  displayWeeklyHydrationData(currentUserHydrationData);
  // displayAllTimeHydrationData(currentUserHydrationData);
}

function displayDailyHydrationData(user) {
  let dailyHydrationDataChart = document.getElementById('daily-hydration')
  let dailyHydrationDataChartDisplay = new Chart(dailyHydrationDataChart, {
    type: 'bar',
    data: {
      labels: ['Ounces Consumed', '% of Daily Goal'], // add % of Daily Goal?
      datasets: [{
        label: 'By Day',
        data: [
          user.returnOuncesDrank(),
        ],
        backgroundColor: ['#3e95cd'],
      }],
    }
  });

  dailyHydrationDataChart.innerHTML = `${dailyHydrationDataChartDisplay}`;
}

function displayWeeklyHydrationData(user) {
  const weeklyHydrationChart = document.getElementById('weekly-hydration');
  const weeklyHydrationDataChartDisplay = new Chart(weeklyHydrationChart, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', '', 'Today'],
      datasets: [
        {
          label: 'Water Consumed Last Week',
          data: user.numDailyOuncesDrankInWeek(),
          backgroundColor: ['#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#6082B6']
        },
        // {
        //   label: 'Parched or Hydrated',
        //   data: user.returnHydrationLevelByWeek(),
        //   backgroundColor: ['#8e5ea2', '#8e5ea2', '#8e5ea2', '#8e5ea2', '#8e5ea2', '#8e5ea2', '#702963']
        // }
      ]
    },
    options: {
      // responsive: true,
      // maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Weekly Hydration Level Display Title',
        responsive: true
      }
    }
  });

  weeklyHydrationChart.innerHTML = `${weeklyHydrationDataChartDisplay}`;
}
// we don't technically need this chart?
// function displayAllTimeHydrationData(user) {
//   let allTimeHydrationChart = document.getElementById('all-time-hydration')
//   let allTimeHydrationChartDisplay = new Chart(allTimeHydrationChart, {
//     type: 'bar',
//     data: {
//       labels: ['Average Ounces Slept', 'Average Hydration Quality'],
//       datasets: [{
//         label: 'Overall Hydration',
//         data: [
//           user.calculateAverageOuncesConsumed(),
//           user.calculateAverageHydrationLevel()
//         ],
//         backgroundColor: ['#3e95cd', '#8e5ea2'],
//       }],
//       options: {
//         // responsive: true,
//         // maintainAspectRatio: false,
//         legend: { display: false },
//         title: {
//           display: true,
//           text: 'Overall Hydration',
//           responsive: true
//         }
//       }
//     }
//   });

//   allTimeHydrationChart.innerHTML = `${allTimeHydrationChartDisplay}`;
// }

//---------------------SLEEP CHARTS --------------------------------------//
function displayAllSleepData() {
  const userData = allUserData.returnUserData(1)
  const currentUser = new User(userData);
  const sleepData = allSleepData.returnUserData(currentUser.id);
  const currentUserSleepData = new UserSleepData(sleepData);

  displayDailySleepData(currentUserSleepData);
  displayWeeklySleepData(currentUserSleepData);
  displayAllTimeSleepData(currentUserSleepData);
}

function displayDailySleepData(user) {
  const dailySleepDataChart = document.getElementById('daily-sleep')
  const dailySleepDataChartDisplay = new Chart(dailySleepDataChart, {
    type: 'bar',
    data: {
      labels: ['Hours Slept', 'Sleep Quality'],
      datasets: [{
        label: 'By Day',
        data: [
          user.returnHoursSlept(),
          user.returnSleepQuality()
        ],
        backgroundColor: ['#3e95cd', '#8e5ea2'],
      }],
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        legend: { display: false },
        title: {
          display: true,
          text: '',
          responsive: true
        }
      }
    }
  });

  dailySleepDataChart.innerHTML = `${dailySleepDataChartDisplay}`;
}

function displayWeeklySleepData(user) {
  const weeklySleepQualityChart = document.getElementById('weekly-sleep');
  const weeklySleepDataChartDisplay = new Chart(weeklySleepQualityChart, {
    type: 'bar', 
    data: {
      labels: [ '', '', '', '', '', '', 'Today'],
      datasets: [
        {
          label: 'Hours Slept',
          data: user.returnHoursSleptByWeek(),
          backgroundColor: ['#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd','#3e95cd', '#6082B6' ]
        },
        {
          label: 'Sleep Quality',
          data: user.returnSleepQualityByWeek(),
          backgroundColor: ['#8e5ea2', '#8e5ea2', '#8e5ea2', '#8e5ea2', '#8e5ea2', '#8e5ea2', '#702963' ]
        }
      ]
    },
    options: {
      // responsive: true,
      // maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: '',
        responsive: true
      }
    }
  });
  
  weeklySleepQualityChart.innerHTML = `${weeklySleepDataChartDisplay}`;
}

function displayAllTimeSleepData(user) {
  const allTimeSleepChart = document.getElementById('all-time-sleep');
  const allTimeSleepChartDisplay = new Chart(allTimeSleepChart, {
    type: 'bar',
    data: {
      labels: ['Hours Slept'],
      datasets: [
        {
          barPercentage: 0.2,
          label: ['Hours Slept'], 
          data: [user.calculateAverageHoursSlept()],
          backgroundColor: ['#3e95cd']
        }
      ]
    },
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        legend: { display: false },
        title: {
          display: true,
          text: '',
          responsive: true, 
        },
          
      }
  });

  const allTimeSleepChart2 = document.getElementById('all-time-sleep-2')
  const allTimeSleepChartDisplay2 = new Chart(allTimeSleepChart2, {
    type: 'bar',
      data: {
      labels: ['Sleep Quality'],
      datasets: [
        {
          barPercentage: 0.2,
          label: ['Sleep Quality'], 
          data: [user.calculateAverageSleepQuality()],
          backgroundColor: ['#8e5ea2']
        }
      ]
    },
    options: {
      // responsive: true,
      // maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: '',
        responsive: true
      },
        
    }
  });

  allTimeSleepChart.innerHTML = `${allTimeSleepChartDisplay}`;
  allTimeSleepChart2.innerHTML = `${allTimeSleepChartDisplay2}`;
}
