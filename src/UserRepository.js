class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(userId) {
    return this.userData.find(userData => userData.id == userId)
  }

  returnAverageStepGoal() {
    // The average step goal amongst all users
    const average = this.userData.reduce((totalSteps, userData) => {
      totalSteps += userData.dailyStepGoal
      console.log("totalSteps: ", totalSteps)
      console.log("userData: ", userData)
      console.log("userData.dailyStepGoal: ", userData.dailyStepGoal)
      return totalSteps 
    }, 0)
    return average / this.userData.length
    }
  }

export default UserRepository;
