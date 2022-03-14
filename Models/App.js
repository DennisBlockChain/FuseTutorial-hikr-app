import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import MockBackend from 'Services/MockBackend';
import Navigation from 'Services/Navigation';

export let services = {
  navigation: new Navigation(),
  mockBackend: new MockBackend()
}

class Hike{
  constructor(id, name, location, distance, rating, comments){
    this.id = id;
    this.name = name;
    this.location = location;
    this.distance = distance;
    this.rating = rating;
    this.comments = comments;
  }
}

export default class App {
  constructor() {
    this.services = services;
    this.hikes = [];
    services.mockBackend.getHikes().then(hikes => {
      this.hikes = hikes;
    });
    }
}
