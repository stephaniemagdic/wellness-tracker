class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calculateAverageSleepQuality() {
    const totalSleepQuality = this.sleepData.reduce((sum, sleepItem) => {
      sum += sleepItem.sleepQuality;
      return sum;
    }, 0)
    return parseFloat((totalSleepQuality / this.sleepData.length).toFixed(1));
  }
  
  // filterUsersSleepQualityAboveThree(week) {
  //   // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // }

  // findBestSleepersByDay(date) {
  //   // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  // }

  returnUserData(id) {
    return this.sleepData.filter((sleepItem) => sleepItem.userID === id);
  }
}

export default SleepRepository;

