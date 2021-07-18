class HydrationRepository {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

 returnUserData(id) {
   return this.hydroData.filter(hydroItem => hydroItem.userID === id)
 }
}

export default HydrationRepository;