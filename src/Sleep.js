import User from "./User"

class Sleep {
  constructor(userID, sleepData) {
    this.allUsersSleep = sleepData;
    this.oneUsersSleep = this.allUsersSleep.filter(sleepElement => sleepElement.userID === userID)
  } 

  calculateDailyAverage() {
    //this.oneUsersSleep - the average number of hours slept per day
  }

  calculateAverageSleepQuality(date) {
    // get all instances where id === this.oneUsersSleep (.filter())
  }

  filterHoursByDate(date) {
    //For a user, how many hours they slept for a specific day (identified by a date)

    //const data = this.allUsersSleep.filter((object) => object.date = date);
    //return data.hoursSlept;
  }

  filterQualityByDate(date) {
    //For a user, their sleep quality for a specific day (identified by a date)
    //const data = this.allUsersSleep.filter((object) => object.date = date);

    //return data.hoursSlept.sleepQuality;
  }

  filterHoursByWeek(date) {
    // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

    //const data = this.allUsersSleep.filter((object) => object.date > date && < object.date = date - 7);

    //return data.map((date) => return date.hoursSlept)
  }

  filterQualityByWeek(date) {
     //filterUserById(id) 
     // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

    //const data = this.allUsersSleep.filter((object) => object.date > date && < object.date = date - 7);

    //return data.map((date) => return date.sleepQuality)   
  }
  calculateAllUsersAverageSleepQuality() {
    //For all users, the average sleep quality
  }
  
  filterUsersSleepQualityAboveThree(week) {
    // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  findBestSleepersByDay(date) {
    // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  }
  
// HELPER METHOD
   filterUserById(id) {
   // return this.sleepData.filter((user) => user.id === id
   // this will return an array 
  }


export default Sleep;
