class UserHydrationData {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

  returnOuncesDrank(date = (this.hydroData[this.hydroData.length - 1].date)) {
    return this.hydroData.find(hydroItem => hydroItem.date === date).numOunces;
  }

  numDailyOuncesDrankInWeek(today = (this.hydroData[this.hydroData.length - 1].date)) {
    let dateIndex = this.hydroData.findIndex(day => day.date === today)
    let weekData = this.hydroData.slice(dateIndex - 6, dateIndex + 1)
    return weekData.map(day => day.numOunces)
  }
}

export default UserHydrationData;
