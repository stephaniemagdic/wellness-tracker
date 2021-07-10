import User from "./User"

class SleepData {
  constructor(arrayofSleepUserObjects) {
    constructor(sleepRepoInstance.filterUserById(id)) {
  //an array of all the objects that hold one users data.
    // [{"userID":2,"date":"2019/06/15","hoursSlept":7,"sleepQuality":4.7},
    // {"userID":2,"date":"2019/06/16","hoursSlept":7.5,"sleepQuality":3.8},
    // {"userID":2,"date":"2019/06/17","hoursSlept":5.7,"sleepQuality":3},
    //
    //
    //

      this.arrayofSleepUserObjects = arrayofSleepUserObjects;
 }

  calculateDailyAverage() {
    //For a user (identified by their userID), the average number of hours slept per day
  }

  calculateAverageSleepQuality() {

  }

  filterHoursByDate(date) {
//For a user, how many hours they slept for a specific day (identified by a date)

    //const data = this.arrayofSleepUserObjects.filter((object) => object.date = date);

    //return data.hoursSlept;
  }

  filterQualityByDate(date) {
 
  //For a user, their sleep quality for a specific day (identified by a date)
    //const data = this.arrayofSleepUserObjects.filter((object) => object.date = date);

    //return data.hoursSlept.sleepQuality;

  }

  filterHoursByWeek(date) {
    // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

      //const data = this.arrayofSleepUserObjects.filter((object) => object.date > date && < object.date = date - 7);

    //return data.map((date) => return date.hoursSlept)
    



  }

  filterQualityByWeek(id, date) {
     //filterUserById(id) 
     // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

    //const data = this.arrayofSleepUserObjects.filter((object) => object.date > date && < object.date = date - 7);

    //return data.map((date) => return date.sleepQuality)
    
  }





export default Sleep;



//WE MAY WANT TO CREATE A SLEEP REPOSITORY CLASS FOR THIS DATA
  //user's week sleep quality
  // sleep.filterQualityByWeek;

  //all users averageSleepQuality
  // sleep.calculateAverageSleepQuality;