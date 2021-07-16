import { expect } from 'chai';
import UserSleepData from '../src/Sleep';

describe('UserSleepData', function() {
  let user1SleepData;
  let data;

  //TO DO: CHECK THAT DATE DATA IS PARSED AS A STRING.
  before(() => {
    data = [
      {userID:1, date:'2019/06/15', hoursSlept:6.1, sleepQuality:2.2}, 
      {userID:1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality:3.8},
      {userID:1, date:'2019/06/17', hoursSlept: 8, sleepQuality: 2.6},
      {userID:1,date:'2019/06/18', hoursSlept: 10.4, sleepQuality:3.1},
      {userID:1, date:'2019/06/19', hoursSlept:10.7, sleepQuality:1.2},
      {userID:1, date:'2019/06/20', hoursSlept:9.3, sleepQuality: 1.2},
      {userID: 1,date:'2019/06/21', hoursSlept:7.8, sleepQuality:4.2},
      {userID:1,date:'2019/06/22', hoursSlept:7, sleepQuality:3},
    ];

    user1SleepData = new UserSleepData(data);
  });
 
  it('should be a function', () => {
    expect(UserSleepData).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(user1SleepData).to.be.an.instanceof(UserSleepData);
  }); 

  it('should store sleep data', () => {
    expect(user1SleepData.sleepData).to.equal(data);
  });

  it('should return average hours slept', () => {
    const dailyAverageSlept = user1SleepData.calculateAverageHoursSlept();
    expect(dailyAverageSlept).to.equal(7.9);
  });

  it('should return hours slept by day', () => {
    const hoursSlept = user1SleepData.returnHoursSlept('2019/06/15');
    expect(hoursSlept).to.equal(6.1);
  });

  it('should return hours slept for most recent date as default', () => {
    const hoursSlept = user1SleepData.returnHoursSlept();
    expect(hoursSlept).to.equal(7);
  });

  it('should return sleep quality by day', () => {
    const sleepQuality = user1SleepData.returnSleepQuality('2019/06/15');
    expect(sleepQuality).to.equal(2.2);
  });

  it('should return sleep quality for most recent date as default', () => {
    const hoursSlept = user1SleepData.returnSleepQuality();
    expect(hoursSlept).to.equal(3);
  });

  it('test', () => {
    const weeklyHoursSlept = user1SleepData.returnWeeklyHoursSlept();
    expect(weeklyHoursSlept).to.deep.equal([7, 7.8, 9.3, 10.7, 10.4, 8, 4.1]);
  })

  //test for if there are less than 7 days prior (say 3 days.)


});