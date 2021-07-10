class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
 }

   ///Below goes in SleepRepositoryClass (METHODS INVOLVES ALL USERS):
   calculateAllUsersAverageSleepQuality() {
    //For all users, the average sleep quality
  }
  
  filterUsersSleepQualityAboveThree(week) {
    // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  findBestSleepersByDay(date) {
    // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  }

   //filterUserById(id) {
      //return this.sleepData.filter((user) => user.id === id
        //this will return an array 
  //}
