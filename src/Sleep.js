import User from "./User"

class Sleeper {
  constructor(sleeperData) {
    this.allSpecificUsersData = allSpecificUsersData; //an array of all the objects that hold one users data.
    // [{"userID":2,"date":"2019/06/15","hoursSlept":7,"sleepQuality":4.7},
    // {"userID":2,"date":"2019/06/16","hoursSlept":7.5,"sleepQuality":3.8},
    // {"userID":2,"date":"2019/06/17","hoursSlept":5.7,"sleepQuality":3},
    //
    //
    //
    //
    //

  ]

 }



  calculateDailyAverage() {
    //filterUserById(id) 
  }

  filterHoursByDate(id, date) {
    //filterUserById(id) 
    //For a user, their sleep quality for a specific day (identified by a date)
  }

  filterQualityByDate(id, date) {
  //filterUserById(id) 
   //For a user, how many hours they slept for a specific day (identified by a date)
  }

  filterHoursByWeek(id, date) {
  //filterUserById(id) 
  //For a user, their sleep quality for a specific day (identified by a date)
  }

  filterQualityByWeek(id, date) {
     //filterUserById(id) 
     // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }



}

export default Sleep;



//WE MAY WANT TO CREATE A SLEEP REPOSITORY CLASS FOR THIS DATA
  //user's week sleep quality
  // sleep.filterQualityByWeek;

  //all users averageSleepQuality
  // sleep.calculateAverageSleepQuality;