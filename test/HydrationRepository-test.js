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

  it('should return all of one user\'s hydration data by id', () => {
    const allHydroDataUserOne = hydrationRepository.returnUserData(1)
    expect(allHydroDataUserOne).to.deep.equal([allHydroData[0], allHydroData[3], allHydroData[6]])  
  })

  it('should return all of a different user\'s hydration data by id', () => {
    const allHydroDataUserTwo = hydrationRepository.returnUserData(2)
    expect(allHydroDataUserTwo).to.deep.equal([allHydroData[1], allHydroData[4], allHydroData[7]])
  })
})