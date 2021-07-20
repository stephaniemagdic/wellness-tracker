import './css/styles.css';
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
function loadPage() {
  Promise.resolve(fetchPageData()).then((data) => generateRepoClasses(data))
    .then(() => displayPageInfo());
}

function fetchPageData() {
  const userRepoPromise = fetchData('users') 
  const hydrationRepoPromise = fetchData('hydration')  
  const sleepRepoPromise = fetchData('sleep')  
  return Promise.all([userRepoPromise, hydrationRepoPromise, sleepRepoPromise]).then(values => values);
}

function generateRepoClasses(dataSets) {
  allUserData = new UserRepository(dataSets[0].userData);
  allHydrationData = new HydrationRepository(dataSets[1].hydrationData);
  allSleepData = new SleepRepository(dataSets[2].sleepData);
}

function fetchData(type) {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(`ERROR with ${type}: ${err}`))
}

//---------------------ALL DISPLAY FUNCTIONS----------------------------------//
function displayPageInfo() {
  const randomUser = allUserData.userData[Math.floor(Math.random()* allUserData.userData.length)]
  const user = new User(allUserData.returnUserData(randomUser.id));
  displayUserCard(user);
  displayAllHydrationData(user);
  displayAllSleepData(user);
}

//---------------------USER CARD--------------------------------------//
function displayUserCard(user) {
  welcomeName.innerHTML = `${user.returnFirstName()}`;
  address.innerHTML = `${user.address}`;
  email.innerHTML = `${user.email}`;
  strideLength.innerHTML = `${user.strideLength}`
  dailyStepGoal.innerHTML = `${user.dailyStepGoal}`
  averageStepGoal.innerHTML = `${allUserData.returnAverageStepGoal()}`
}

//---------------------HYDRATION CHARTS --------------------------------------//
function displayAllHydrationData(user) {
  const hydrationData = allHydrationData.returnUserData(user.id);
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
function displayAllSleepData(user) {
  const sleepData = allSleepData.returnUserData(user.id);
  const currentUserSleepData = new UserSleepData(allSleepData.returnUserData(user.id));
  displayDailySleepData(currentUserSleepData);
  displayWeeklySleepData(currentUserSleepData);
  displayAllTimeSleepData(currentUserSleepData);
}

function displayDailySleepData(user) {
  const dailySleepHoursButton = document.getElementById('daily-sleep-hours');
  const dailySleepDataButton = document.getElementById('daily-sleep-quality');
  dailySleepHoursButton.innerHTML = `${user.returnHoursSlept()}`;
  dailySleepDataButton.innerHTML = `${user.returnSleepQuality()}`;
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
  const allTimeSleepButton = document.getElementById('all-time-sleep');
  const allTimeSleepButton2 = document.getElementById('all-time-sleep-2');
  allTimeSleepButton.innerHTML = `${user.calculateAverageHoursSlept()}`;
  allTimeSleepButton2.innerHTML = `${user.calculateAverageSleepQuality()}`;
}
