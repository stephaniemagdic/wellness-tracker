import { expect } from 'chai';
import UserHydrationData from '../src/UserHydrationData';

describe('UserHydrationData', () => {
  let userHydrationData
  let userOneHydroData = [
    {
      userID: 1,
      date: "2019/06/15",
      numOunces: 37
    },
    {
      userID: 1,
      date: "2019/06/16",
      numOunces: 69
    },
    {
      userID: 1,
      date: "2019/06/17",
      numOunces: 96
    },
    {
      userID: 1,
      date: "2019/06/18",
      numOunces: 61
    },
    {
      userID: 1,
      date: "2019/06/19",
      numOunces: 91
    },
    {
      userID: 1,
      date: "2019/06/20",
      numOunces: 50
    },
    {
      userID: 1,
      date: "2019/06/21",
      numOunces: 50
    },
    {
      userID: 1,
      date: "2019/06/22",
      numOunces: 43
    },
    {
      userID: 1,
      date: "2019/06/23",
      numOunces: 39
    },
    {
      userID: 1,
      date: "2019/06/24",
      numOunces: 61
    },
  ];
  
  beforeEach(() => {
    userHydrationData = new UserHydrationData(userOneHydroData)
  })

  it('should be function', () => {
    expect(UserHydrationData).to.be.a('function')
  })

  it('should be an instance of UserHydrationData', () => {
    expect(userHydrationData).to.be.an.instanceOf(UserHydrationData)
  })

  it('should return all UserHydrationData data', () => {
    expect(userHydrationData.hydroData).to.equal(userOneHydroData)
  })

  it('should return fluid ounces consumed for a specific date', () => {
    const numOuncesDrank = userHydrationData.returnOuncesDrank('2019/06/15');
    expect(numOuncesDrank).to.equal(37);
  })

  it('should return fluid ounces consumed each day over the course of a week', () => {
    const numDailyOuncesDrankInWeek = userHydrationData.numDailyOuncesDrankInWeek('2019/06/24');
    expect(numDailyOuncesDrankInWeek).to.deep.equal([61, 91, 50, 50, 43, 39, 61]);
  })

  it('should return average ounces drank', () => {
    const dailyAverage = userHydrationData.calculateAverageOuncesConsumed(1);
    expect(dailyAverage).to.equal(59.7);
  });
})

