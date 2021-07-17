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

  returnUserData(id) {
    return this.sleepData.filter((sleepItem) => sleepItem.userID === id);
  }
}

export default SleepRepository;

