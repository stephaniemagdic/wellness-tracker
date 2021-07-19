class UserHydrationData {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

  returnOuncesDrank(date = (this.hydroData[this.hydroData.length - 1].date)) {
    return this.hydroData.find(hydroItem => hydroItem.date === date).numOunces;
  }

  numDailyOuncesDrankInWeek(today = (this.hydroData[this.hydroData.length - 1].date)) {
    const dateIndex = this.hydroData.findIndex(day => day.date === today)
    const weekData = this.hydroData.slice(dateIndex - 6, dateIndex + 1)
    return weekData.map(day => day.numOunces)
  }

  calculateAverageOuncesConsumed() {
    const totalOuncesConsumed = this.hydroData.reduce((sum, hydroItem) => {
      return sum + hydroItem.numOunces;
    }, 0);
    return parseFloat((totalOuncesConsumed / this.hydroData.length).toFixed(1));
  }
}

  // displayOverallHydration() {
  //   const overallHydration = this.hydroData.calculateAverageOuncesConsumed()
  //     if (overallHydration > 50) {
  //       return 'Hydrated' 
  //     } else if (overallHydration < 50) {
  //       return 'Parched'
  //     }
  //   }


 
export default UserHydrationData;
