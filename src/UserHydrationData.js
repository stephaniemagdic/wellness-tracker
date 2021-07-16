class UserHydrationData {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }
  // will need to return 2 pieces of data by id 


  
  returnOuncesDrank(date = (this.hydroData[this.hydroData.length - 1].date)) {
    return this.hydroData.find(hydroItem => hydroItem.date === date).numOunces;
  }

  numDailyOuncesDrankInWeek(specificDate = (this.hydroData[this.hydroData.length - 1].date)) {
  //how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
    let dateIndex = this.hydroData.findIndex(day => day.date === specificDate)
    let weekData = this.hydroData.slice(dateIndex - 6, dateIndex + 1)
    return weekData.map(day => day.numOunces)
  }
}

export default UserHydrationData;

// dashboard 
// A display to show how much water they have consumed today (these displays are often called “widgets” in the FE tech world)
// A display to show much water they have consumed each day over the course of the latest week

