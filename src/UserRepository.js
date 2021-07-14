class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(userId) {
    return this.userData.find(userData => userData.id == userId)
  }

  returnAverageStepGoal() {
    const average = this.userData.reduce((totalSteps, userData) => {
      totalSteps += userData.dailyStepGoal
      return totalSteps 
    }, 0)
    return average / this.userData.length
    }
  }

export default UserRepository;
