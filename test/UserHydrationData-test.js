import { expect } from 'chai';
import UserHydrationData from '../src/UserHydrationData';

describe('UserHydrationData', () => {
  let UserHydrationData
  let userOneHydroData = [{
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
    UserHydrationData = new UserHydrationData(userHydrationData)
  })

  it('should be function', () => {
    expect(UserHydrationData).to.be.a('function')
  })

  it('should be an instance of UserHydrationData', () => {
    expect(UserHydrationData).to.be.an.instanceOf(UserHydrationData)
  })

  it('should return all UserHydrationData data', () => {
    expect(UserHydrationData.hydroData).to.equal(userHydrationData)
  })