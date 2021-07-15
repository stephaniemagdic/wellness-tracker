import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';

describe('HydrationRepository', () => {
  let hydrationRepository

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(data)
  })

  it('should be function', () => {
    expect(HydrationRepository).to.be.a('function')
  })

  it('should be an instance of HydrationRepository', () => {
    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository)
  })

})

