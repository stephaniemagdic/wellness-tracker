class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  //HELPER METHOD TO RETURN USER BY ID
  //Should this be in hydrationRepository
    //filterUserById(id) {
      //return this.hydrationData.filter((user) => user.id === id
        //this will return an array 
  //}

  
  calculateDailyAverage(id) {
    //const hydration = filterUserById(id);
    //const average = sum(acc)/hydrationArry length
    //return average
  }

  filterByDate(id, date) {
    //filterUserById(id)
    //return fluid ounces they consumed for a specific day (identified by a date) by the last Day. 
  }

  filterByWeek(id, week) {
 //how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
  }

}

export default Hydration;


