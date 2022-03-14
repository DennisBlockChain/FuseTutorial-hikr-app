import { services } from "../Models/App"

export default class EditHikePage {
  constructor(hike, pages){
    this.hike = hike;
    this.hikeCopy = Object.assign({}, hike);
  }

  save(){
    services.mockBackend.updateHike(
      this.hike.id,
      this.hike.name,
      this.hike.location,
      this.hike.distance,
      this.hike.rating,
      this.hike.comments
    ).catch(err => {
      console.log("there was an error updating hike " + this.hike.id + ": " + err);
    });

    services.navigation.goBack();
  }
  cancel(){
    Object.assign(this.hike, this.hikeCopy);
    services.navigation.goBack();
  }
}
