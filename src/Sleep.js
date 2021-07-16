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

  returnHoursSlept(date = (this.sleepData[this.sleepData.length - 1].date)) {
    return this.sleepData.find(
      sleepItem => sleepItem.date === date).hoursSlept;
  }

  returnSleepQuality(date = (this.sleepData[this.sleepData.length - 1].date)) {
    return this.sleepData.find(
      sleepItem => sleepItem.date === date).sleepQuality;
  }

  returnWeeklyHoursSlept(date = (this.sleepData[this.sleepData.length - 1]).date) {
    const sleepItem = this.sleepData.find(sleepItem => sleepItem.date === date);
    const dateIndex = this.sleepData.indexOf(sleepItem);
    if (dateIndex >= 7) {
      const datesNeeded = this.sleepData.slice((parseInt(dateIndex - 6)));
      return (datesNeeded.map((sleepItem) => sleepItem.hoursSlept));
    } else {
      const datesNeeded = this.sleepData.slice(0, dateIndex + 1);
      return (datesNeeded.map((sleepItem) => sleepItem.hoursSlept));
    }
  }

  filterQualityByDate(date) {
    //For a user, their sleep quality for a specific day (identified by a date)
    //const data = this.usersSleepData.filter((object) => object.date = date);

    //return data.hoursSlept
  }

  //pass in todays date ...
  filterHoursByWeek(date) {
    // 2019/08/15
    // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

    //const data = this.usersSleepData.filter((object) => object.date > date && < object.date = date - 7);
  
    //this returns an array of all the sleepQuality for each day so you can have a list or put it in a chart.
    //return data.map((date) => return date.hoursSlept)
  }

  filterQualityByWeek(date) {
    // 2019/08/15
     //filterUserById(id) 
     // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

    //const data = this.usersSleepData.filter((object) => object.date > date && < object.date = date - 7);

      //this returns an array of all the sleepQuality for each day so you can have a list or put it in a chart.
    //return data.map((date) => return date.sleepQuality)   
  }
}


export default UserSleepData;

