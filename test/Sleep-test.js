import { expect } from 'chai';
import UserSleepData from '../src/Sleep';

describe('UserSleepData', function() {
  let user1SleepData;
  let data;

  before(() => {
    data = [
      {"userID":1,"date":"2019/06/15","hoursSlept":6.1,"sleepQuality":2.2},{"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},
      {"userID":1,"date":"2019/06/21","hoursSlept":7.8,"sleepQuality":4.2},
      {"userID":1,"date":"2019/06/22","hoursSlept":7,"sleepQuality":3}
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
  })

  it('should return average hours slept', () => {
    const dailyAverageSlept = user1SleepData.calculateAverageHoursSlept();
    expect(dailyAverageSlept).to.equal(7.8);
  })

  it('should return hours slept by day', () => {
    const hoursSlept = user1SleepData.returnHoursSlept();
    expect(hoursSlept).to.equal(7);
  })

});