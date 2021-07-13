import { expect } from 'chai';
import User from '../src/User';


describe('User', function() {

let user;

before(() => {
    user =
    {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    };
 

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  }); 

  //-----------default property tests
  it('should store an id', () => {
    expect(user.id).to.equal(1)
  });

  it('should store a name', () => {
    expect(user.name).to.equal(1)
  });

  it('should store an address', () => {

  });

  it('should store an email', () => {

  });

  it('should store a stride length', () => {

  });

  it('should store a daily step goal', () => {

  });

  it('should store friends', () => {

  });