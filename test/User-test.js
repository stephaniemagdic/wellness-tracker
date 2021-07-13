import { expect } from 'chai';
import User from '../src/User';


describe('User', function() {
  let user;

  beforeEach(() => {
    user = new User({
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
    });
  });
 
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  }); 

  it('should store an id', () => {
    expect(user.id).to.equal(1);
  });

  it('should store a name', () => {
    expect(user.name).to.equal("Luisa Hane");
  });

  it('should store an address', () => {
    expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  });

  it('should store an email', () => {
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it('should store a stride length', () => {
    expect(user.strideLength).to.equal(4.3);
  });

  it('should store a daily step goal', () => {
    expect(user.dailyStepGoal).to.equal(10000);
  });

  it('should store friends', () => {
    expect(user.friends).to.deep.equal([16, 4, 8]);
  });

  it('should return first name', () => {
    const firstName = user.returnFirstName();
    expect(firstName).to.equal('Luisa');
  });
});