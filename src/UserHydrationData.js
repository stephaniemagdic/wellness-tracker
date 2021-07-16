class UserHydrationData {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }
  // will need to return 2 pieces of data by id 

  
  calculateDailyAverage(id) {
    //const hydration = filterUserById(id);
    //const average = sum(acc)/hydrationArray length
    //return average
  }

  filterByDate(date = (this.sleepData[this.sleepData.length - 1].date)) {
    //filterUserById(id)
    //return fluid ounces they consumed for a specific day (identified by a date) by the last Day. 
  }

  filterByWeek(id, week) {
  //how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
  }

}

export default UserHydrationData;


