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
    console.log(date)
    return this.sleepData.find(
      sleepItem => sleepItem.date === date).hoursSlept;
    // return dataNeede.hoursSlept //chain .hoursSlept

    //

    // For a user, how many hours they slept for a specific day (identified by a date)
  }

  filterHoursByDate(date) {
   // const dateNeeded = this.usersSleepData.find((sleepData) =>
    // return sleepData.date === date );
    // return dataNeede.hoursSlept


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

