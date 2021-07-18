import { expect } from 'chai';
import UserSleepData from '../src/UserSleepData';

describe('UserSleepData', function() {
  let user1SleepData;
  let data;

  before(() => {
    data = [
      {
        userID: 1, 
        date: '2019/06/15', 
        hoursSlept: 6.1, 
        sleepQuality: 2.2
      }, 
      {
        userID: 1, 
        date: '2019/06/16', 
        hoursSlept: 4.1, 
        sleepQuality: 3.8
      },
      {
        userID: 1, 
        date: '2019/06/17', 
        hoursSlept: 8, 
        sleepQuality: 2.6
      },
      {
        userID: 1, 
        date: '2019/06/18', 
        hoursSlept: 10.4, 
        sleepQuality: 3.1
      },
      {
        userID: 1, 
        date: '2019/06/19', 
        hoursSlept: 10.7, 
        sleepQuality: 1.2
      },
      {
        userID: 1, 
        date: '2019/06/20', 
        hoursSlept: 9.3, 
        sleepQuality: 1.2
      },
      {
        userID: 1, 
        date: '2019/06/21', 
        hoursSlept: 7.8, 
        sleepQuality: 4.2
      },
      {
        userID: 1, 
        date: '2019/06/22', 
        hoursSlept: 7, 
        sleepQuality: 3
      },
      {
        userID: 1, 
        date: '2019/06/23', 
        hoursSlept: 8, 
        sleepQuality: 2.5
      },
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

  it('should return average sleep quality', () => {
    const dailyAverageSlept = user1SleepData.calculateAverageSleepQuality();
    expect(dailyAverageSlept).to.equal(2.6);
  });

  it('should return hours slept by day', () => {
    const hoursSlept = user1SleepData.returnHoursSlept('2019/06/15');
    expect(hoursSlept).to.equal(6.1);
  });

  it('should return hours slept for most recent date as default', () => {
    const hoursSlept = user1SleepData.returnHoursSlept();
    expect(hoursSlept).to.equal(8);
  });

  it('should return sleep quality by day', () => {
    const sleepQuality = user1SleepData.returnSleepQuality('2019/06/15');
    expect(sleepQuality).to.equal(2.2);
  });

  it('should return sleep quality for most recent date as default', () => {
    const hoursSlept = user1SleepData.returnSleepQuality();
    expect(hoursSlept).to.equal(2.5);
  });

  it('should return hours slept for previous week', () => {
    const weeklyHoursSlept = user1SleepData.returnHoursSleptByWeek();
    expect(weeklyHoursSlept).to.deep.equal([8, 10.4, 10.7, 9.3, 7.8, 7, 8]);
  })

  it('should return hours slept for only 7 days of data', () => {
    const weeklyHoursSlept = user1SleepData.returnHoursSleptByWeek('2019/06/22');
   expect(weeklyHoursSlept).to.deep.equal([4.1, 8, 10.4, 10.7, 9.3, 7.8, 7]);
  });

  it('should return hours slept for all days prior if less than 7 days', () => {
     const weeklyHoursSlept = user1SleepData.returnHoursSleptByWeek('2019/06/17');
    expect(weeklyHoursSlept).to.deep.equal([6.1, 4.1, 8]);
  });

  it('should return daily sleep quality for previous week', () => {
    const weeklysleepQuality  = user1SleepData.returnSleepQualityByWeek();
    expect(weeklysleepQuality).to.deep.equal([2.6, 3.1, 1.2, 1.2, 4.2, 3, 2.5]);
  });

  it('should return hours slept for only 7 days of data', () => {
    const weeklySleepQuality  = user1SleepData.returnSleepQualityByWeek('2019/06/22');
    expect(weeklySleepQuality).to.deep.equal([3.8, 2.6, 3.1, 1.2, 1.2, 4.2, 3]);
  });

  it('should return daily sleep quality for all days prior if less than 7 days', () => {
     const weeklySleepQuality = user1SleepData.returnSleepQualityByWeek('2019/06/17');
    expect(weeklySleepQuality).to.deep.equal([2.2, 3.8, 2.6]);
  });
});