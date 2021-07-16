import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';

describe('HydrationRepository', () => {
  let hydrationRepository
  let allHydroData = [{
    userID: 1,
    date:"2019/06/15",
    numOunces: 37
  },
  {
    userID: 2,
    date:"2019/06/15",
    numOunces: 75
  },
  {
    userID: 3,
    date:"2019/06/15",
    numOunces: 47
  },
  {
    userID: 1,
    date:"2019/06/16",
    numOunces: 69
  },
  {
    userID: 2,
    date:"2019/06/16",
    numOunces: 91
  },
  {
    userID: 3,
    date:"2019/06/16",
    numOunces: 99
  },
  {
    userID: 1,
    date:"2019/06/17",
    numOunces: 96
  },
  {
    userID: 2,
    date:"2019/06/17",
    numOunces: 96
  },
  {
    userID: 3,
    date:"2019/06/17",
    numOunces: 28
  }
];
  
  beforeEach(() => {
    hydrationRepository = new HydrationRepository(allHydroData)
  })

  it('should be function', () => {
    expect(HydrationRepository).to.be.a('function')
  })

  it('should be an instance of HydrationRepository', () => {
    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository)
  })

  it('should return all hydration data', () => {
    expect(hydrationRepository.hydroData).to.equal(allHydroData)
  })

  it('should return one user\'s hydration data by id', () => {
    const filterUserHydroData = hydrationRepository.filterUserHydroData(3)
    console.log(filterUserHydroData);
    console.log(allHydroData[2])
    expect(filterUserHydroData).to.deep.equal(allHydroData[2])
  })
})
