class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
 }

   //HELPER METHOD TO RETURN USER BY ID
    //filterUserById(id) {
      //return this.sleepData.filter((user) => user.id === id
        //this will return an array 
  //}

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

  calculateAllUsersAverageSleepQuality() {
    //For all users, the average sleep quality
  }
  
  filterUsersSleepQualityAboveThree(week) {
    // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  findUsersMostHoursSleptByDay(date) {
    // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  }



}

export default Sleep;



//WE MAY WANT TO CREATE A SLEEP REPOSITORY CLASS FOR THIS DATA
  //user's week sleep quality
  // sleep.filterQualityByWeek;

  //all users averageSleepQuality
  // sleep.calculateAverageSleepQuality;