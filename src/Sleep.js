class Sleep {
  // let usersData = filterUserById(id);
  constructor(usersData) {
    this.usersSleepData= usersData;

    // {"sleepData":[{"userID":1,"date":"2019/06/15","hoursSlept":6.1,"sleepQuality":2.2},{"userID":1,"date":"2019/08/15","hoursSlept":7,"sleepQuality":4.7},{"userID":1,"date":"2019/10/15","hoursSlept":10.8,"sleepQuality":4.7}
  //]

  } 

  calculateDailyAverage() {
    //this.oneUsersSleep - the average number of hours slept per day

    //const totalHours  = this.usersSleepData.reduce((sum, sleepElement) => {
      //return sum + sleepElement.hoursSlept;

    //});

    // return totalHours/ this.oneUsersSleep.length;

    
  }

  calculateAverageSleepQuality(date) {
    // const dateNeeded = this.usersSleepData.find((sleepData) =>
    // return sleepData.date === date );
    // return dataNeede.hoursSlept

    //
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


export default Sleep;

