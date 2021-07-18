class UserSleepData {
  constructor(sleepData) {
    this.sleepData = sleepData;
  } 

  calculateAverageHoursSlept() {
    const totalHoursSlept  = this.sleepData.reduce((sum, sleepItem) => {
      return sum + sleepItem.hoursSlept;
    }, 0);
    return parseFloat((totalHoursSlept / this.sleepData.length).toFixed(1));
  }

  calculateAverageSleepQuality() {
    const totalSleepQuality  = this.sleepData.reduce((sum, sleepItem) => {
      return sum + sleepItem.sleepQuality;
    }, 0);
    return parseFloat((totalSleepQuality / this.sleepData.length).toFixed(1));
  }

  returnHoursSlept(date = (this.sleepData[this.sleepData.length - 1].date)) {
    return this.sleepData.find(
      sleepItem => sleepItem.date === date).hoursSlept;
  }

  returnSleepQuality(date = (this.sleepData[this.sleepData.length - 1].date)) {
    return this.sleepData.find(
      sleepItem => sleepItem.date === date).sleepQuality;
  }

  returnHoursSleptByWeek(date = (this.sleepData[this.sleepData.length - 1]).date) {
    const sleepItem = this.sleepData.find(sleepItem => sleepItem.date === date);
    const dateIndex = this.sleepData.indexOf(sleepItem);
    if (dateIndex >= 7) {
      const datesNeeded = this.sleepData.slice((dateIndex - 6), (dateIndex + 1));
      return (datesNeeded.map((sleepItem) => sleepItem.hoursSlept));
    } else {
      const datesNeeded = this.sleepData.slice(0, (dateIndex + 1));
      return (datesNeeded.map((sleepItem) => sleepItem.hoursSlept));
    }
  }

  returnSleepQualityByWeek(date = (this.sleepData[this.sleepData.length - 1]).date) {
    const sleepItem = this.sleepData.find(sleepItem => sleepItem.date === date);
    const dateIndex = this.sleepData.indexOf(sleepItem);
    if (dateIndex >= 7) {
      const datesNeeded = this.sleepData.slice((dateIndex - 6), (dateIndex + 1));
      return (datesNeeded.map((sleepItem) => sleepItem.sleepQuality));
    } else {
      const datesNeeded = this.sleepData.slice(0, (dateIndex + 1));
      return (datesNeeded.map((sleepItem) => sleepItem.sleepQuality));
    }
  }
}

export default UserSleepData;

