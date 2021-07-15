import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';


describe('SleepRepository', function() {
  let allSleepData;
  let data;

  before(() => {
    data = [
      {"userID":1,"date":"2019/06/15","hoursSlept":6.1,"sleepQuality":2.2},{"userID":2,"date":"2019/06/15","hoursSlept":7,"sleepQuality":4.7},{"userID":3,"date":"2019/06/15","hoursSlept":10.8,"sleepQuality":4.7},{"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},{"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},{"userID":3,"date":"2019/06/18","hoursSlept":9.8,"sleepQuality":2.6}
    ];

    allSleepData = new SleepRepository(data);
  });
 
  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(allSleepData).to.be.an.instanceof(SleepRepository);
  }); 

  it('should store sleep data', () => {
    expect(allSleepData.sleepData).to.equal(data);
  })

  it('should calculate average sleep quality', () => {
    const averageSleepQuality = allSleepData.calculateAverageSleepQuality();
    expect(averageSleepQuality).to.equal(3.4);
  });

  it('should return an array of sleepItems by user', () => {
    const userSleepData = allSleepData.returnUserData(1);
    expect(userSleepData).to.deep.equal([ {"userID":1,"date":"2019/06/15","hoursSlept":6.1,"sleepQuality":2.2}, {"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1}]);
  });
});

